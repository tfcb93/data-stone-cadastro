<script setup lang="ts">
    import { useClientsStore } from '../stores/clients';
    import { useProductsStore } from '../stores/products';
    import { ClientType, ProductType } from '../types';
    import Modal from '../components/Modal.vue';
import { computed, ref } from 'vue';


    const props = defineProps<{client: ClientType}>();

    const clientsStore = useClientsStore();
    const productsStore = useProductsStore();

    const isProductsModalOpen = ref<boolean>(false);
    const selectedProducts = ref<Array<string>>([]);
    const isProductsOpen = ref<boolean>(false);

    const openProductsModal = () => {
        isProductsModalOpen.value = true;
    }

    const closeProductsModal = () => {
        isProductsModalOpen.value = false;
        selectedProducts.value = [];
    }

    const toggleProducts = () => {
        isProductsOpen.value = !isProductsOpen.value;
    }

    const selectProducts = (id: string) => {
        
        if(selectedProducts.value.includes(id)) {
            const productIndex = selectedProducts.value.indexOf(id);
            selectedProducts.value = [...selectedProducts.value.slice(0, productIndex), ...selectedProducts.value.slice(productIndex + 1)];
        } else {
            selectedProducts.value = [...selectedProducts.value, id];
        }
    }

    const addProductsToClient = () => {
        clientsStore.addProducts(props.client.id!, selectedProducts.value);
        closeProductsModal();
    }

    const removeProductFromClient = (id: string) => {
        clientsStore.removeProducts(props.client.id!, [id]);
    }

    const notLinkedProducts = computed(() => {
        return productsStore.products.filter((product: ProductType) => !props.client.products?.includes(product.id!) && product.active);
    });

    const linkedProductsData = computed(() => {
        return productsStore.products.filter((product: ProductType) => props.client.products?.includes(product.id!));
    })

</script>


<template>
    <div v-on:click="toggleProducts">
        Produtos v
    </div>
    <div v-if="isProductsOpen">
        <button v-on:click="openProductsModal" v-bind:disabled="notLinkedProducts.length === 0 || !client.active">Adicionar</button>
        <div v-for="(product, index) in linkedProductsData">
            {{ product.name }}
            <button v-on:click="() => removeProductFromClient(product.id!)">x</button>
        </div>
    </div>
    <Modal :is-open="isProductsModalOpen">
        <div class="clientProduct--modal">
            <div>
                <div>Adicionar Produtos</div>
                <button v-on:click="closeProductsModal">x</button>
            </div>
            <div v-for="(product, index) in notLinkedProducts">
                <div v-on:click="() => selectProducts(product.id!)" :class="{'product-selected': selectedProducts.includes(product.id!)}">
                    <span>
                        {{ product.name }}
                    </span>
                    <span>
                        {{ product.active ? "Sim" : "Não" }}
                    </span>
                </div>
            </div>
            <div>
                <button v-on:click="addProductsToClient">Adicionar</button>
            </div>
        </div>
    </Modal>
</template>


<style scoped>

.clientProduct--modal {
    background-color: white;
}

.product-selected {
    background-color: blue;
}

</style>
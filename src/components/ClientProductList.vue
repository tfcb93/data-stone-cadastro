<script setup lang="ts">
    import { useClientsStore } from '../stores/clients';
    import { useProductsStore } from '../stores/products';
    import { ClientType, ProductType } from '../types';
    import { computed, ref } from 'vue';


    const props = defineProps<{client: ClientType}>();

    const clientsStore = useClientsStore();
    const productsStore = useProductsStore();

    const selectedProducts = ref<Array<string>>([]);

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
        selectedProducts.value = [];
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
    <v-expansion-panels>
        <v-expansion-panel title="Produtos">
            <v-expansion-panel-text>
                <v-col
                class="text-grey"
                cols="8"
                >
                <v-fade-transition leave-absolute>
                    <v-dialog max-width="500">
                        <template v-slot:activator="{props: activatorProps}">
                        <v-btn
                            v-bind="activatorProps"
                            text="Adicionar"
                            variant="flat"
                            color="primary"
                            :disabled="notLinkedProducts.length === 0 || !client.active"
                        ></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-card-title class="px-4">
                                Adicionar Produtos
                            </v-card-title>
                            <v-list lines="one">
                                <v-list-item
                                    v-for="(product, index) in notLinkedProducts"
                                    :title="product.name"
                                    @click="() => selectProducts(product.id!)"
                                    :class="{'bg-primary': selectedProducts.includes(product.id!)}"
                                >
                                </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-btn
                                text="Adicionar"
                                variant="flat"
                                color="primary"
                                @click="() => {addProductsToClient(); isActive.value = false}"
                                ></v-btn>
                                <v-btn
                                text="Cancelar"
                                variant="flat"
                                @click="() => {selectedProducts = []; isActive.value = false}"
                                ></v-btn>
                            </v-card-actions>
                        </v-card>
                        </template>
                    </v-dialog>
                </v-fade-transition>
                </v-col>
                <v-list lines="one">
                    <v-list-item v-for="(product, index) in linkedProductsData">
                        <v-card :variant="index % 2 === 1 ? 'tonal' : 'flat'" >
                            <v-row justify="space-between" align="center" class="py-2 px-4">
                                <v-card-title>
                                    {{ product.name }}
                                </v-card-title>
                                <v-btn color="red-accent-4" text="Excluir" variant="flat" @:click="() => removeProductFromClient(product.id!)"></v-btn>
                            </v-row>
                        </v-card>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>


<style scoped>

</style>
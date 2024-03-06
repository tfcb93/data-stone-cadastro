<script setup lang="ts">
    import { useClientsStore } from '../stores/clients';


    const props = defineProps<{
        id: string,
        closeEditing: () => void
    }>();

    const clientName = defineModel('clientName',{required: true, type: String});
    const clientDocument = defineModel('clientDocument',{required: true, type: String});
    const clientTelephone = defineModel('clientTelephone', {required: true, type: String});
    const clientEmail = defineModel('clientEmail', {required: true, type: String});
    const clientActive = defineModel('clientActive', {required: true, type:Boolean});

    const store = useClientsStore();

    const saveClient = () => {
        store.update(props.id,{
            name: clientName.value!,
            document:clientDocument.value!,
            email:clientEmail.value!,
            telephone: clientTelephone.value!,
            active: clientActive.value!
        });

        props.closeEditing();
    }

    const cancelEdit = () => {
        props.closeEditing();
    }

</script>

<template>
    <div>
        <div class="client-edit--title">
            Editar cliente
        </div>
        <div class="client-edit--container">
            <div class="client-edit--form">
                <span class="client-edit--form-input">
                    <label class="client-edit--form-input__label" for="name">Nome: </label>
                    <input v-model="clientName" id="name" type="text" />
                </span>
                <span class="client-edit--form-input">
                    <label class="client-edit--form-input__label" for="document">Documento: </label>
                    <input v-model="clientDocument" id="document" type="text" />
                </span>
                <span class="client-edit--form-input">
                    <label class="client-edit--form-input__label" for="telephone">Telefone: </label>
                    <input v-model="clientTelephone" id="telephone" type="text" />
                </span>
                <span class="client-edit--form-input">
                    <label class="client-edit--form-input__label" for="email">E-mail: </label>
                    <input v-model="clientEmail" id="email" type="text" />
                </span>
                <span class="client-edit--form-input client-edit--form-input__active">
                    
                    <legend>Ativo: </legend>
                    <span>
                        <input id="active-yes" type="radio" v-model="clientActive" :value="true" />
                        <label for="active-yes">Sim</label>
                    </span>
                    <span>
                        <input id="active-no" type="radio" v-model="clientActive" :value="false" />
                        <label for="active-no">Não</label>
                    </span>
                </span>
            </div>
            <div class="client-edit--options">
                <button v-on:click="saveClient">
                    Atualizar
                </button>
                <button v-on:click="cancelEdit">
                    Cancelar
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>

.client-edit--title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
}

.client-edit--container {
    display: flex;
}

.client-edit--form {
    display: flex;
    flex-direction: column;
}

.client-edit--options {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    gap: 5px;
    justify-content: start;
}

.client-edit--form-input:not(.client-edit--form-input__active) {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.client-edit--form-input__label {
    font-weight: bold;
}

.client-edit--form-input__active {
    display: flex;
}
</style>
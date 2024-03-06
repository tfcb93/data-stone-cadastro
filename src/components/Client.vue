<script setup lang="ts">
import { useClientsStore } from '../stores/clients';

    const clientName = defineModel('clientName',{type: String});
    const clientDocument = defineModel('clientDocument',{type: String});
    const clientTelephone = defineModel('clientTelephone', {type: String});
    const clientEmail = defineModel('clientEmail', {type: String});
    const clientActive = defineModel('clientActive', {default: true, type:Boolean});

    const props = defineProps<{
        closeModal?:any
    }>();

    const store = useClientsStore();

    const saveClient = () => {
        store.create({
            name: clientName.value!,
            document:clientDocument.value!,
            email:clientEmail.value!,
            telephone: clientTelephone.value!,
            active: clientActive.value!
        });

        if(props.closeModal) {
            props.closeModal();
        }
    }

</script>

<template>
    <div class="client--form">
        <span class="client--form-input">
            <label for="name">Nome: </label>
            <input v-model="clientName" id="name" type="text" />
        </span>
        <span class="client--form-input">
            <label for="document">Documento: </label>
            <input v-model="clientDocument" id="document" type="text" />
        </span>
        <span class="client--form-input">
            <label for="telephone">Telefone: </label>
            <input v-model="clientTelephone" id="telephone" type="text" />
        </span>
        <span class="client--form-input">
            <label for="email">E-mail: </label>
            <input v-model="clientEmail" id="email" type="text" />
        </span>
        <span class="client--form-input client--form-input__active">
            
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
    <button v-on:click="saveClient()">Cadastrar</button>
</template>


<style scoped>
    .client--form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .client--form-input {

    }

    .client--form-input__active {
        display: flex;
        gap: 10px;
    }
</style>
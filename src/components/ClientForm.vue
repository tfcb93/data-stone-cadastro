<script setup lang="ts">
import { useClientsStore } from '../stores/clients';

    const clientName = defineModel('clientName',{type: String});
    const clientDocument = defineModel('clientDocument',{default:"", type: String});
    const clientTelephone = defineModel('clientTelephone', {type: String});
    const clientEmail = defineModel('clientEmail', {type: String});
    const clientActive = defineModel('clientActive', {default: true, type:Boolean});

    const props = defineProps<{
        closeModal: () => void
    }>();

    const store = useClientsStore();

    const saveClient = () => {
        store.create({
            name: clientName.value!,
            document:clientDocument.value,
            email:clientEmail.value!,
            telephone: clientTelephone.value!,
            active: clientActive.value!
        });

        props.closeModal();
    }

</script>

<template>
    <v-text-field label="Nome" v-model="clientName"></v-text-field>
    <v-text-field label="Documento" v-model="clientDocument"></v-text-field>
    <v-text-field label="Telefone" v-model="clientTelephone"></v-text-field>
    <v-text-field label="E-mail" v-model="clientEmail"></v-text-field>
    <v-switch
        v-model="clientActive"
        color="primary"
        :label="clientActive ? 'Ativo' : 'Inativo'"
        inset
    ></v-switch>
    <v-row no-gutters>
        <v-btn color="primary" @click="saveClient">Cadastrar</v-btn>
        <v-btn class="ml-2" @click="closeModal">Cancelar</v-btn>
    </v-row>
</template>


<style scoped>
</style>
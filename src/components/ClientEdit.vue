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

</script>

<template>
    <v-container>
        <v-card title="Editar Cliente" class="pa-4">
            <v-text-field label="Nome" v-model="clientName"></v-text-field>
            <v-text-field label="Nome" v-model="clientDocument"></v-text-field>
            <v-text-field label="Nome" v-model="clientTelephone"></v-text-field>
            <v-text-field label="Nome" v-model="clientEmail"></v-text-field>
            <v-switch
                v-model="clientActive"
                color="primary"
                :label="clientActive ? 'Ativo' : 'Inativo'"
                inset
            ></v-switch>
            <v-card-actions>
                <v-btn color="primary" @click="saveClient" variant="flat">Salvar</v-btn>
                <v-btn @click="props.closeEditing" variant="flat">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>

</template>

<style scoped>

</style>
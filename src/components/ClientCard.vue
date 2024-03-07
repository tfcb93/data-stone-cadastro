<script setup lang="ts">
import { ClientType } from '../types';
import ClientProductList from '../components/ClientProductList.vue';


    defineProps<{
        client: ClientType,
        openEditing: () => void,
        deleteClient: () => void
    }>();

</script>

<template>
    <v-container>
        <v-card>
            <v-row justify="space-between" class="px-2 py-4">
                <v-card-title>
                    {{ client.name }}
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Editar" @click="openEditing"></v-btn>
                    <v-btn text="Excluir" @click="deleteClient"></v-btn>
                </v-card-actions>
            </v-row>
            <v-table class="text-caption" density="compact">
                <tbody>
                    <tr align="right">
                        <th>Documento:</th>
                        <td>{{ client.document !== "" ? client.document : "Não há documentos" }}</td>
                    </tr>
                    <tr align="right">
                        <th>Telefone:</th>
                        <td>{{ client.telephone }}</td>
                    </tr>
                    <tr align="right">
                        <th>E-mail:</th>
                        <td>{{ client.email }}</td>
                    </tr>
                    <tr align="right">
                        <th>Ativo:</th>
                        <td>{{ client.active ? "Sim" : "Não" }}</td>
                    </tr>
                </tbody>
            </v-table>
            <ClientProductList :client="client" />
        </v-card>
    </v-container>
</template>

<style scoped>

</style>
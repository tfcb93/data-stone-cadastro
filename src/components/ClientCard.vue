<script setup lang="ts">
import { ClientType } from '../types';
import ClientProductList from '../components/ClientProductList.vue';


    defineProps<{client: ClientType}>();

</script>

<template>
    <v-card :title="client.name">
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
    </v-card>
        <div>
            <ClientProductList :client="client" />
        </div>
</template>

<style scoped>

</style>
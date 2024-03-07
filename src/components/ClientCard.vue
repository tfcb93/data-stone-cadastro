<script setup lang="ts">
import { ClientType } from '../types';
import ClientProductList from '../components/ClientProductList.vue';


    defineProps<{client: ClientType}>();

</script>

<template>
    <div class="clientcard">
        <div class="clientcard--data clientcard--data__name">
            <span class="clientcard--data__title">Nome: </span>
            <span class="clientcard--data__data">
                {{ client.name }}
            </span>
        </div>
        <div class="clientcard--data clientcard--data__document">
            <span class="clientcard--data__title">Documento: </span>
            <span  class="clientcard--data__data">
                {{ client.document !== "" ? client.document : "Não há documentos" }}
            </span>
        </div>
        <div class="clientcard--data clientcard--data__email">
            <span class="clientcard--data__title">E-mail: </span>
            <span class="clientcard--data__data">
                {{ client.email }}
            </span>
        </div>
        <div class="clientcard--data clientcard--data__telephone">
            <span class="clientcard--data__title">Telefone: </span>
            <span class="clientcard--data__data">
                {{ client.telephone }}
            </span>
        </div>
        <div class="clientcard--data clientcard--data__active">
            <span class="clientcard--data__title">Ativo: </span>
            <span class="clientcard--data__data">
                {{ client.active ? "Sim" : "Não" }}
            </span>
        </div>
        <div>
            <ClientProductList :client="client" />
        </div>
    </div>
</template>

<style scoped>

.clientcard {
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.clientcard--data__title {
    font-weight: bold;
}

</style>
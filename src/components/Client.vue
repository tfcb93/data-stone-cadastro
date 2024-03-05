<script setup lang="ts">

</script>

<template>
    <div class="client--form">
        <span class="client--form-input">
            <label for="name">Nome: </label>
            <input id="name" type="text" />
        </span>
        <span class="client--form-input">
            <label for="document">Documento: </label>
            <input id="document" type="text" />
        </span>
        <span class="client--form-input">
            <label for="telephone">Telefone: </label>
            <input id="telephone" type="text" />
        </span>
        <span class="client--form-input">
            <label for="email">E-mail: </label>
            <input id="email" type="text" />
        </span>
        <span class="client--form-input client--form-input__active">
            <legend>Ativo: </legend>
            <span>
                <input id="active-yes" type="radio" />
                <label for="active-yes">Sim</label>
            </span>
            <span>
                <input id="active-no" type="radio" />
                <label for="active-no">Não</label>
            </span>
        </span>
    </div>
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
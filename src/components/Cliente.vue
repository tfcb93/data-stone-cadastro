<script setup lang="ts">

</script>

<template>
    <div class="cliente--form">
        <span class="cliente--form-input">
            <label for="name">Nome: </label>
            <input id="name" type="text" />
        </span>
        <span class="cliente--form-input">
            <label for="document">Documento: </label>
            <input id="document" type="text" />
        </span>
        <span class="cliente--form-input">
            <label for="telephone">Telefone: </label>
            <input id="telephone" type="text" />
        </span>
        <span class="cliente--form-input">
            <label for="email">E-mail: </label>
            <input id="email" type="text" />
        </span>
        <span class="cliente--form-input cliente--form-input__active">
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
    .cliente--form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cliente--form-input {

    }

    .cliente--form-input__active {
        display: flex;
        gap: 10px;
    }
</style>
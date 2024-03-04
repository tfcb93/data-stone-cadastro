<script setup lang="ts">
/**
 * Nome
 * Ativo (sim/não)
 */

</script>

<template>
    <div class="produto--form">
        <span class="produto--form-input">
            <label for="name">Nome: </label>
            <input id="name" type="text" />
        </span>
        <span class="produto--form-input produto--form-input__active">
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
    .produto--form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .produto--form-input {
        
    }


    .produto--form-input__active {
        display: flex;
        gap: 10px;
    }
</style>
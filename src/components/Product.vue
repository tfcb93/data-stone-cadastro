<script setup lang="ts">
/**
 * Nome
 * Ativo (sim/não)
 */

</script>

<template>
    <div class="product--form">
        <span class="product--form-input">
            <label for="name">Nome: </label>
            <input id="name" type="text" />
        </span>
        <span class="product--form-input product--form-input__active">
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
    .product--form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product--form-input {
        
    }


    .product--form-input__active {
        display: flex;
        gap: 10px;
    }
</style>
<script setup lang="ts">

    defineProps<{isOpen: boolean}>()

</script>


<template>
    <div v-if="isOpen" class="modal">
        <slot></slot>
    </div>
</template>

<style scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(100, 100, 100, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
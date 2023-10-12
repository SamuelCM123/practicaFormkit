<script setup>
import { defineAsyncComponent } from 'vue';

    const FormUser = defineAsyncComponent(()=> import('../components/FormUser.vue'));
    const TempForm = defineAsyncComponent(()=> import('../components/TempForm.vue'))
</script>

<template>
    <div class="main-container">
        <FormUser></FormUser>
        <TempForm></TempForm>
    </div>
</template>

<style scoped>
    .main-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
</style>
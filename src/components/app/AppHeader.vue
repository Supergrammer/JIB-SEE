<script setup>
const logo = new URL("@/assets/logo.png", import.meta.url).href
</script>

<template>
    <v-card :height="64" :elevation="10" class="pa-2 d-flex align-center">
        <v-btn flat size="large" rounded="lg">
            <v-icon icon="fa-solid fa-bars" :size="32" />
        </v-btn>
        <v-img :src="logo" :max-width="72" max-height="100%" />
        <span v-text="'JIB SEE'" class="text-h4 font-weight-black" />
    </v-card>
</template>

<style scoped>

</style>
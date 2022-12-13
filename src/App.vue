<script setup>
import AppHeader from "@/components/app/AppHeader.vue";
</script>

<template>
    <v-app id="app">
        <app-header id="appHeader" />
        <router-view id="routerView" />
    </v-app>
</template>

<style scoped>
#app {
    /* IE and Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
}

#app::-webkit-scrollbar {
    /* Chrome, Safari, Opera */
    display: none;
}

#appHeader {
    z-index: 20;
}

#routerView {
    z-index: 10;
}
</style>
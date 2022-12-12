<script setup>
import AppHeader from "@/components/app/AppHeader.vue";
</script>

<template>
  <v-app>
    <app-header id="appHeader" />
    <router-view id="routerView" mainComponent />
  </v-app>
</template>

<style scoped>
#appHeader {
  z-index: 20;
}

#routerView {
  z-index: 10;
}
</style>
<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/app/AppHeader.vue";
</script>

<template>
  <v-app id="app">
    <AppHeader />
    <RouterView />
  </v-app>
</template>

<style scoped>

</style>
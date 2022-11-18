<template>
  <div>
    <AppNavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import AppNavBar from "@/components/AppNavBar.vue";
</script>
<style>
@import "~nprogress/nprogress.css";
#nprogress .bar {
  background: blue !important;
}
</style>

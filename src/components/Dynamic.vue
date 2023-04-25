<script setup>
import Navigation from "./Navigation.vue";
</script>

<template>
  <div class="dynamic">
    <router-view></router-view>
    <Navigation />
  </div>
</template>

<style>
.dynamic {
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 10vh;
  display: flex;
  z-index: 1;
  overflow-x: hidden;
}
</style>
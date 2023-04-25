<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Dynamic from "./components/Dynamic.vue";
</script>

<template>
  <div class="app">
    <Header />
    <div class="coolShadow"></div>
    <Dynamic />
  </div>
</template>

<style>
.app {
  -webkit-user-select: none;
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-image: url("pexels-jimmy-chan.jpg");
  background-position: center;
  background-size: cover;
}
.app::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #00000044;
}
.coolShadow {
  width: 100%;
  height: 3vh;
  margin-top: 10vh;
  position: absolute;
  background-image: linear-gradient(to bottom, #03071e, transparent 10%);
  z-index: 100;
}
</style>

<script setup>
import NaviButton from "./NaviButton.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const { navi_getNaviOptions } = store.getters;
const naviBarActive = computed(() => store.state.navi.naviBarActive);

const getNaviOptions = computed(() => store.state.navi.naviOptions);
</script>

<template>
  <div :class="['navigation', { navi_active: naviBarActive }]">
    <NaviButton
      v-for="option in getNaviOptions"
      :key="option.id"
      :option="option"
    />
  </div>
</template>

<style>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #f5deb3cc; */
  background-image: url("pexels-shonejai-1227511.jpg");
  background-position: center;
  background-size: cover;
  position: absolute;
  right: -350px;
  width: 350px;
  height: 90vh;
  transition: 0.5s ease;
  z-index: 2;
}
.navigation:after {
  content: "";
  position: absolute;
  width: 350px;
  height: 90vh;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.navi_active {
  box-shadow: -3px 0 10px var(--color1);
  right: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>
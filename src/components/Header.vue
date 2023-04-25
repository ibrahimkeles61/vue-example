<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
// import { translate } from "../api/googleTranslate.js";

// const result = await translate("e");
// console.log(result);

const store = useStore();

const changeNaviBarActivity = () => store.commit("navi_naviBarChanger");
const naviBarActive = computed(() => store.state.navi.naviBarActive);

const clicked = ref(false);
const activatedClicked = () => {
  clicked.value = true;
  setTimeout(() => (clicked.value = false), 100);
};
</script>

<template>
  <div class="header">
    <span>LEARN & PLAY</span>
    <div class="infoAndButtons">
      <div
        :class="['naviBarButton', { naviBarButtonClick: clicked }]"
        @click="changeNaviBarActivity(), activatedClicked()"
      >
        <div
          :class="[
            { buttonLinesDeactive: !naviBarActive },
            { buttonLinesActive: naviBarActive },
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  /* background-image: linear-gradient(
    to bottom right,
    var(--color1) 30%,
    var(--color5)
  ); */
  background: transparent;
  text-align: center;
  font-weight: bold;
  z-index: 5;
}
.header span {
  color: orange;
  font-size: 3rem;
  text-shadow: 10px 10px 10px black, -10px -10px 10px black;
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
}
.infoAndButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  /* border: 5px solid black; */
  width: 500px;
  height: 50px;
}
.naviBarButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid grey;
  box-shadow: 0 0 10px grey;
  width: 50px;
  height: 45px;
  border-radius: 10px;
  position: absolute;
}
.naviBarButtonClick {
  animation: click 0.5s linear;
}
.naviBarButton:hover {
  cursor: pointer;
}
.buttonLinesDeactive {
  background-color: grey;
  height: 2px;
  width: 40px;
  transition: 0.3s;
  position: absolute;
}
.buttonLinesDeactive::before {
  content: "";
  position: absolute;
  background-color: grey;
  height: 2px;
  width: 40px;
  transform: translate(-20px, 9px);
}
.buttonLinesDeactive::after {
  content: "";
  position: absolute;
  background-color: grey;
  height: 2px;
  width: 40px;
  transform: translate(-20px, -9px);
}
.buttonLinesActive {
  background-color: grey;
  height: 2px;
  width: 30px;
  transform: rotate(45deg);
  position: absolute;
  transition: 0.3s;
}
.buttonLinesActive::after {
  content: "";
  position: absolute;
  background-color: grey;
  height: 2px;
  width: 30px;
  transform: translate(-15px, 0px) rotate(90deg);
}

@keyframes click {
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
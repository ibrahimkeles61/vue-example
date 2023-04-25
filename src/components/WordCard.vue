<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  word: Object,
});

const show = ref(true);

const flip = () => (show.value ? (show.value = false) : (show.value = true));

const wordsView = computed(() => store.state.words.wordsView);

const condition = () => {
  if (wordsView.value == "userWords") return true;
  if (wordsView.value == "deleteSelected") return true;
  return false;
};

const deleteItemList = computed(() => store.state.words.deleteItemList);

const pickButtonValue = ref("Seç");

const valueChanger = () =>
  pickButtonValue.value == "Seç"
    ? (pickButtonValue.value = "Kaldır")
    : (pickButtonValue.value = "Seç");

const pickOrRemove = (id) => store.dispatch("words_deleteItemsPicker", { id });
</script>



<template>
  <div class="wordCard">
    <div class="wordCardUpper">
      <span>
        <div v-if="show">{{ word.en }}</div>
        <div v-if="!show">{{ word.tr }}</div>
      </span>
      <button
        @click="pickOrRemove(word.id), valueChanger()"
        v-if="condition()"
        class="pickButton"
      >
        {{ pickButtonValue }}
      </button>
    </div>
    <button @click="flip" class="flipButton">Çevir</button>
  </div>
</template>

<style>
.wordCard {
  /* position: relative; */
  width: 18rem;
  height: 10rem;
  border-radius: 10px;
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  transition: 0.2s;
  background-image: url("pexels-pixabayjpg.jpg");
  background-position: center;
  background-size: cover;
  z-index: 2;
}
.wordCard:after {
  content: "";
  position: absolute;
  width: 18rem;
  height: 10rem;
  border-radius: 10px;
  /* 
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  transition: 0.2s; */
  background-image: url("pexels-pixabayjpg.jpg");
  filter: blur(1px);
  background-color: #00000022;
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.wordCardUpper {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wordCard span {
  width: 70%;
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: 0px 3px 10px black;
  font-size: 1.7rem;
}
.pickButton {
  width: 30%;
  height: 5rem;
  background-color: rgb(205, 193, 27);
}
.pickButton:hover {
  cursor: pointer;
}
.flipButton {
  width: 90%;
  height: 2rem;
  border-radius: 5px;
}
.flipButton:hover {
  transform: scale(1.02);
  box-shadow: 2px 2px 10px #d0d0d7, -2px -2px 10px #d0d0d7;
  cursor: pointer;
}
</style>
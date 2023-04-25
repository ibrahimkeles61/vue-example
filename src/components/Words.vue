<script setup>
import WordCard from "../components/WordCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

//getters
const words_globalWords = computed(() => store.getters.words_globalWords);
const words_userWords = computed(() => store.getters.words_userWords);
const words_trainingWords = computed(() => store.getters.words_trainingWords);

const wordList = store.state.words.wordList;
const wordsView = computed(() => store.state.words.wordsView);
const naviBarActive = computed(() => store.state.navi.naviBarActive);

const show = (condition) => {
  switch (condition) {
    case "allWords":
      return words_globalWords.value;
    case "userWords":
      return words_userWords.value;
    case "trainingWords":
      return words_trainingWords.value;
  }
};
</script>



<template>
  <div :class="['words', { words_active: naviBarActive }]">
    <WordCard v-for="word in show(wordsView)" :key="word.id" :word="word" />
  </div>
</template>


<style>
.words {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  scrollbar-width: none;
  transition: 0.7s;
  /* position: absolute; */
}
.words_active {
  filter: blur(5px);
}
</style>


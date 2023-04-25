<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const props = defineProps({
  option: Object,
});
// const isFirst = props.option.id == 1 ? true : false;
const wordsView = computed(() => store.state.words.wordsView);

const changeWordsView = (option) => {
  switch (option.id) {
    case 1:
      store.dispatch("words_changeWordsView_act", {
        wordsView: "userWords",
      });
      break;
    case 2:
      store.dispatch("words_changeWordsView_act", { wordsView: "allWords" });
      break;
    case 3:
      store.dispatch("words_changeWordsView_act", {
        wordsView: "trainingWords",
      });
      break;
  }
};

const deletePickedControl = () =>
  wordsView.value != "userWords" && props.option.id == 4 ? false : true;

const deleteSelectedItems = (id) =>
  id == "4" && store.dispatch("words_deleteSelectedItems");

const routing = (id) => {
  // this.$router.push(`/details/${e.target.value}`);
  if (id == 1 || id == 2 || id == 3) router.push({ name: "Words" });
  id == 5 && router.push({ name: "AddNewWord" });
};
</script>


<template>
  <div
    v-if="deletePickedControl()"
    class="naviButton"
    @click="
      changeWordsView(option),
        deleteSelectedItems(option.id),
        routing(option.id)
    "
  >
    <span>{{ option.value }} </span>
  </div>
</template>



<style>
.naviButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  border-radius: 50px;
  background-color: var(--color8);
  font-size: 1.5rem;
  position: relative;
  margin: 10px 0;
  transition: 0.1s;
  z-index: 10;
}
.naviButton:hover {
  cursor: pointer;
  transform: scale(1.07);
  /* box-shadow: 5px 5px 20px var(--color8-1), -5px -5px 20px var(--color8-1); */
}
/* .first {
  margin-top: 10rem;
} */
</style>
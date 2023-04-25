<template>
  <div :style="addNewWord">
    <div :style="mainCard" @keydown.enter="save">
      <div :style="cardTextArea">
        <input
          :style="input"
          type="text"
          v-model="en"
          placeholder="İngilizce Kelimeyi Giriniz"
        />
        <input
          :style="input"
          type="text"
          v-model="tr"
          placeholder="Türkçe Karşılığını Giriniz (İsteğe Bağlı)"
        />
      </div>
      <div
        :class="['saveButton', { saveButtonClick: clicked }]"
        @click="activatedClicked(), save()"
      >
        <span>Kaydet</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// JavaScript
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { translate } from "../api/googleTranslate.js";

const store = useStore();

const en = ref("");
const tr = ref("");

const save = async () => {
  tr.value == "" && (tr.value = await translate(en.value));

  tr.value != -1 &&
    store.dispatch("word_addNewWord", {
      en: en.value.toUpperCase(),
      tr: tr.value.toUpperCase(),
    });

  tr.value = "";
  en.value = "";
};

// CLICK OP
const clicked = ref(false);
const activatedClicked = () => {
  clicked.value = true;
  setTimeout(() => (clicked.value = false), 100);
};

// CSS ------------------------------------------------------------------------------------------------------------------
const addNewWord = reactive({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  width: "100%",
  backgroundImage: "linear-gradient(to bottom, transparent, black )",
});

const mainCardBoxShadowPx = "100px";
const mainCard = reactive({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  width: "25%",
  height: "70vh",
  backgroundColor: "transparent",
  borderRadius: "20px",
  //   border: "2px solid #c6ac8f",
  //   boxShadow: `${mainCardBoxShadowPx} ${mainCardBoxShadowPx} 1000px #c6ac8f88,
  //   -${mainCardBoxShadowPx} -${mainCardBoxShadowPx} 1000px #c6ac8f88`,
  animation: "turningLight 3s infinite",
});

const cardTextArea = reactive({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "200px",
  width: "100%",
});

const input = reactive({
  borderRadius: "none",
  backgroundColor: "#c6ac8f55",
  marginTop: "10px",
  borderRadius: "10px",
  width: "70%",
  height: "30px",
  color: "white",
  fontSize: "1rem",
  textAlign: "center",
  fontWeight: "bold",
});

// const saveButton = reactive({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "30%",
//   height: "40px",
//   borderRadius: "10px",
//   backgroundColor: "grey",
//   fontSize: "1.2rem",
//   backgroundColor: "#f77f00",
// });
</script>

<style>
/* .mainCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 70vh;
  background-color: transparent;
  border-radius: 20px;
  animation: turningLight 3s infinite alternate;
} */

.saveButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #f77f00;
}
.saveButtonClick {
  animation: click 0.5s linear;
}
.saveButton:hover {
  cursor: pointer;
}

@keyframes turningLight {
  0% {
    box-shadow: 5px 5px 10px #c6ac8f88, -5px -5px 10px #c6ac8f88;
  }
  25% {
    box-shadow: 5px -5px 10px #c6ac8f88, -5px 5px 10px #c6ac8f88;
  }
  50% {
    box-shadow: -5px -5px 10px #c6ac8f88, 5px 5px 10px #c6ac8f88;
  }
  75% {
    box-shadow: -5px 5px 10px #c6ac8f88, 5px -5px 10px #c6ac8f88;
  }
  100% {
    box-shadow: 5px 5px 10px #c6ac8f88, -5px -5px 10px #c6ac8f88;
  }
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
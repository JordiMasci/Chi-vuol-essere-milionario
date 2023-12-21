<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  props: ["answer"],
  emits: ["click-answer"],

  methods: {
    // Imposta l'indice della risposta selezionata
    handleButtonClick(answers, index) {
      if (answers.success) {
        console.log("risposta corretta");
      } else {
        console.log("risposta sbagliata");
      }

      // Emetti l'evento click-answer
      this.answer[index] = { ...answers, clicked: true };
      setTimeout(() => {
        this.$emit("click-answer");
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row p-4 g-2 text-center">
      <div v-for="(answers, index) in answer" :key="index" class="col-6">
        <button
          class="ciao btn d-flex justify-content-center align-items-center"
          @click="() => handleButtonClick(answers, index)"
          :class="{
            'btn-success': answers.success && answers.clicked,
            'btn-danger': !answers.success && answers.clicked,
          }"
        >
          {{ answers.titolo }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ciao {
  height: 100px;
  color: white;
  font-size: 18px;

  border: solid 1px white;
  border-radius: 100px;
}
</style>
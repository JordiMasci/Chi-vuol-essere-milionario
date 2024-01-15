<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      isButtonDisabled: false,
    };
  },
  props: ["answer"],
  emits: ["click-answer"],

  methods: {
    // Imposta l'indice della risposta selezionata
    handleButtonClick(answers, index) {
      if (answers.success) {
        this.store.score += 3000;
        this.store.correctAnswers.push(answers);
        console.log(this.store.score);
      } else {
        this.store.wrongAnswers.push(answers);
        console.log("risposta sbagliata");
      }

      // disattivo button durante il setTimeout
      this.isButtonDisabled = true;

      // Emetti l'evento click-answer
      this.answer[index] = { ...answers, clicked: true };
      setTimeout(() => {
        this.$emit("click-answer");
        // riattivo il button
        this.isButtonDisabled = false;
      }, 1500);

    },


  },


};
</script>

<template>
  <div class="container">
    <div class="row p-4 g-2 text-center">
      <div v-for="(answers, index) in answer" :key="index" class="col-6">
        <div
          class="w-100 border border-light rounded-pill d-flex justify-content-center"
        >
          <button
            class="ciao btn d-flex justify-content-center align-items-center w-100 rounded-pill"
            @click="() => handleButtonClick(answers, index)"
            :class="{
              'btn-success': answers.success && answers.clicked,
              'btn-danger': !answers.success && answers.clicked,
            }"
            :disabled="isButtonDisabled"
          >
            {{ answers.titolo }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ciao {
  height: 100px;
  color: white;
  font-size: 18px;
}
</style>

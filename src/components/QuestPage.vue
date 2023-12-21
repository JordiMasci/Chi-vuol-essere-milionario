<script>
import AnswerPage from "./AnswerPage.vue";

import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      myArray: store.questions,
      usedIndex: [],
      question: "",
      answer: [],
    };
  },

  components: { AnswerPage },

  methods: {
    randomQuestion() {
      if (this.usedIndex.length === this.myArray.length) {
        // Tutte le domande sono state utilizzate, resetta l'array usedIndex
        this.usedIndex = [];
        alert("Sono finite le domande");
      }
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * this.myArray.length);
        // console.log("Nuovo indice generato: ", randomIndex);
      } while (this.usedIndex.includes(randomIndex));
      //   console.log(this.usedIndex);
      this.question = this.myArray[randomIndex].titolo;
      this.usedIndex.push(randomIndex);
      // console.log("Nuova domanda: ", this.question);

      this.answer = []; // Resetta l'array delle risposte

      for (let i = 0; i < this.myArray[randomIndex].answers.length; i++) {
        this.answer.push(this.myArray[randomIndex].answers[i]);
        // if (this.answer[i].success) {
        //   console.log("verde");
        // } else {
        //   console.log("red");
        // }

        // console.log("Nuova risposta: ", this.myArray[randomIndex].answers[i]);
      }
    },
  },
  mounted() {
    this.randomQuestion();
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center pt-3">
    <div class="question text-center">
      {{ this.question }}
    </div>
  </div>

  <div class="answer">
    <AnswerPage :answer="answer" @click-answer="randomQuestion" />
  </div>
</template>

<style lang="scss" scoped>
.question {
  width: 300px;
  height: 100px;

  font-size: 30px;
  color: white;
}

.answer {
  background-color: #11093a;
}
</style>
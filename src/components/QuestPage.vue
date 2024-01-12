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
      proviamo: true,
    };
  },

  components: { AnswerPage },

  methods: {
    // randomQuestion() {

    //   if (this.usedIndex.length != this.myArray.length) {
    //     let randomIndex;
    //     do {
    //       randomIndex = Math.floor(Math.random() * this.myArray.length);
    //       // console.log("Nuovo indice generato: ", randomIndex);
    //     } while (this.usedIndex.includes(randomIndex));
    //     //   console.log(this.usedIndex);
    //     this.question = this.myArray[randomIndex].titolo;
    //     this.usedIndex.push(randomIndex);
    //     // console.log("Nuova domanda: ", this.question);

    //     this.answer = []; // Resetta l'array delle risposte

    //     for (let i = 0; i < this.myArray[randomIndex].answers.length; i++) {
    //       // randomIndexAnswer = Math.floor(Math.random() * this.answer.length);
    //       this.answer.push(this.myArray[randomIndex].answers[i]);
    //     }
    //   } else {
    //     // alert("Sono finite le domande.\n" + "€" + this.store.score);

    //     let answerSectionEl = document.getElementById("answerSection");
    //     answerSectionEl.classList.add("d-none");

    //     let scoreSectionEl = document.getElementById("scoreSection");
    //     scoreSectionEl.classList.remove("d-none");
    //   }
    // },

    randomQuestion() {
      if (this.usedIndex.length !== this.myArray.length) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * this.myArray.length);
        } while (this.usedIndex.includes(randomIndex));

        this.question = this.myArray[randomIndex].titolo;
        this.usedIndex.push(randomIndex);

        // Genera un array di indici casuali per le risposte
        let answerIndices = Array.from(
          { length: this.myArray[randomIndex].answers.length },
          (_, i) => i
        );
        answerIndices = answerIndices.sort(() => Math.random() - 0.5);

        this.answer = answerIndices.map(
          (index) => this.myArray[randomIndex].answers[index]
        );
      } else {
        // alert("Sono finite le domande.\n" + "€" + this.store.score);

        let answerSectionEl = document.getElementById("answerSection");
        answerSectionEl.classList.add("d-none");

        let scoreSectionEl = document.getElementById("scoreSection");
        scoreSectionEl.classList.remove("d-none");
      }
    },

    playAgain() {
      this.usedIndex = [];
      this.store.score = 0;
      this.store.correctAnswers = [];
      this.store.wrongAnswers = [];

      let answerSectionEl = document.getElementById("answerSection");
      answerSectionEl.classList.remove("d-none");

      let scoreSectionEl = document.getElementById("scoreSection");
      scoreSectionEl.classList.add("d-none");

      this.randomQuestion();
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

  <!-- Componente di Gioco -->
  <div class="answer" id="answerSection">
    <AnswerPage :answer="answer" @click-answer="randomQuestion" />
  </div>

  <!-- Componente Punteggio finale -->

  <div class="container d-none" id="scoreSection">
    <p class="text-light">Punteggio finale: €{{ this.store.score }}</p>

    <!-- RISPOSTE ESATTE -->
    <p class="text-light">Risposte esatte:</p>
    <ul v-if="this.store.correctAnswers.length > 0">
      <li class="text-light" v-for="correctAnswer in this.store.correctAnswers">
        {{ correctAnswer.titolo }}
      </li>
    </ul>
    <p class="text-danger" v-else>Nessuna risposta esatta</p>

    <!-- RISPOSTE ERRATE -->
    <p class="text-light">Risposte errate:</p>
    <ul v-if="this.store.wrongAnswers.length > 0">
      <li class="text-light" v-for="wrongAnswer in this.store.wrongAnswers">
        {{ wrongAnswer.titolo }}
      </li>
    </ul>
    <p class="text-success" v-else>Nessuna risposta sbagliata</p>

    <button class="btn btn-success mb-5" @click="playAgain">Gioca Ancora</button>
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

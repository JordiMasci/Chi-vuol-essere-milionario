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
    randomQuestion() {
      // verifico se l'array usedIndex è lungo quanto l'array question
      if (this.usedIndex.length !== this.myArray.length) {
        let randomIndex;
        do {
          // trova un numero casuale
          randomIndex = Math.floor(Math.random() * this.myArray.length);
          // Genera indici casuali, se già presenti ne genera un altro
        } while (this.usedIndex.includes(randomIndex));

        // creo una variabile di domande con indice [randomIndex]
        this.question = this.myArray[randomIndex].titolo;
        // riempio array udexIndex con i valori di randomIndex
        this.usedIndex.push(randomIndex);

        // Genera un array di indici casuali per le risposte (metodo sorting)
        let answerIndices = Array.from(
          { length: this.myArray[randomIndex].answers.length },
          (_, i) => i
        );
        answerIndices = answerIndices.sort(() => Math.random() - 0.5);

        this.answer = answerIndices.map(
          (index) => this.myArray[randomIndex].answers[index]
        );
      } else {
        // finite le domande

        // nascondo answerSection
        let answerSectionEl = document.getElementById("answerSection");
        answerSectionEl.classList.add("d-none");
        // nascondo questionContainer
        let questionContainer = document.getElementById("questionContainer");
        questionContainer.classList.add("d-none");
        // mostro scoreSection
        let scoreSectionEl = document.getElementById("scoreSection");
        scoreSectionEl.classList.remove("d-none");
      }
    },

    playAgain() {
      // svuoto tutti i valori
      this.usedIndex = [];
      this.store.score = 0;
      this.store.correctAnswers = [];
      this.store.wrongAnswers = [];

      // mostro answerSection
      let answerSectionEl = document.getElementById("answerSection");
      answerSectionEl.classList.remove("d-none");
      // mostro questionContainer
      let questionContainer = document.getElementById("questionContainer");
      questionContainer.classList.remove("d-none");
      // nascondo scoreSection
      let scoreSectionEl = document.getElementById("scoreSection");
      scoreSectionEl.classList.add("d-none");

      // richiamo la funzione per caricare il gioco
      this.randomQuestion();
    },
  },
  mounted() {
    this.randomQuestion();
  },
};
</script>

<template>
  <div
    class="container d-flex justify-content-center pt-3"
    id="questionContainer"
  >
    <div class="question text-center">
      {{ this.question }}
    </div>
  </div>

  <!-- Componente di Gioco -->
  <div class="answer" id="answerSection">
    <AnswerPage :answer="answer" @click-answer="randomQuestion" />
  </div>

  <!-- Componente Punteggio finale -->

  <div class="container d-none mt-5 text-center" id="scoreSection">
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

    <button class="btn btn-success mb-5" @click="playAgain">
      Gioca Ancora
    </button>
  </div>
</template>

<style lang="scss" scoped>
.question {
  width: 600px;

  font-size: 30px;
  color: white;
}

.answer {
  background-color: #11093a;
}

ul {
  list-style-type: none;
}
</style>

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

  computed: {
    randomQuestion() {
      let randomIndex = Math.floor(Math.random() * this.myArray.length);

      //   this.usedIndex.push(randomIndex);
      //   console.log(this.usedIndex);

      this.question = this.myArray[randomIndex].titolo;
      console.log(this.question);

      for (let i = 0; i < this.myArray[randomIndex].answers.length; i++) {
        this.answer.push(this.myArray[randomIndex].answers[i]);

        console.log(this.answer);
      }
    },
  },
  mounted() {
    this.randomQuestion;
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
    <AnswerPage :answer="answer"/>
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
  height: 100vh;
}
</style>

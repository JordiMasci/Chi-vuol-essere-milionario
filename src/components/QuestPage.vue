<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      myArray: store.questions,
      usedIndex: [],
      question:'',
      answer:'',
    };
  },

  computed: {
    randomQuestion() {
      let randomIndex = Math.floor(Math.random() * this.myArray.length);

    //   this.usedIndex.push(randomIndex);
    //   console.log(this.usedIndex);

      this.question = this.myArray[randomIndex].titolo;
      console.log(this.question);

      for (let i = 0; i < this.myArray[randomIndex].answers.length; i++) {
        this.answer = this.myArray[randomIndex].answers[i];

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
</template>

<style lang="scss" scoped>
.question {
  width: 300px;
  height: 50px;

  font-size: 30px;
  color: white;
}
</style>

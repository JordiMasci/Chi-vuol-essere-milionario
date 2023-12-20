<script>
import Contenitor from "./components/Contenitor.vue";
import QuestPage from "./components/QuestPage.vue";
import AnswerPage from "./components/AnswerPage.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: { Contenitor, QuestPage, AnswerPage },
};
</script>

<template>
  <div class="logo">
    <Contenitor />
  </div>
  <div class="question">
    <QuestPage />
  </div>
  <div class="answer">
    <AnswerPage />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  padding-top: 30px;
  padding-bottom: 30px;

  background-color: #120e80;
}

.question {
  background-color: #11093a;
}
.answer {
  background-color: #11093a;
  height: 100vh;
}
</style>

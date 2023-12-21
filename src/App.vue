<script>
import Contenitor from "./components/Contenitor.vue";
import QuestPage from "./components/QuestPage.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: { Contenitor, QuestPage },
};
</script>

<template>
  <div class="wrapper">
    <div class="logo">
      <Contenitor />
    </div>
    <div class="question">
      <QuestPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-color: #11093a;
}

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
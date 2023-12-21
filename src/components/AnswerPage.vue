<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  props: ["answer"],
};
</script>

<template>
  <div class="container">
    <div class="row p-4 g-2 text-center">
      <div v-for="(answers, index) in answer" :key="index" class="col-6">
        <div class="ciao d-flex justify-content-center align-items-center">
          {{ answers.titolo }}
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

  border: solid 1px white;
  border-radius: 100px;
}
</style>

<script>
import { store } from "../data/store";

export default {
  data() {
   return {
     store,
   }
 }


};
</script>

<template>
   <div class="container">
    <div class="row p-4 g-2 text-center" >
        <div class=" col-6">
            <div class="ciao d-flex justify-content-center align-items-center">
                {{this.store.questions[0].answers[0].titolo}}
            </div>
        </div>
        <div class=" col-6">
            <div class="ciao d-flex justify-content-center align-items-center">
                {{this.store.questions[0].answers[1].titolo}}
            </div>
        </div>
        <div class=" col-6">
            <div class="ciao d-flex justify-content-center align-items-center">
                {{this.store.questions[0].answers[2].titolo}}
            </div>
        </div>
        <div class=" col-6">
            <div class="ciao d-flex justify-content-center align-items-center">
                {{this.store.questions[0].answers[3].titolo}}
            </div>
        </div>
    </div>

   </div>
</template>

<style lang="scss" scoped>
.ciao{

    height: 100px;
    color:white;
    font-size: 18px;

    border: solid 1px white;
   border-radius: 100px;

}
</style>
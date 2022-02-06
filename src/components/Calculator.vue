<template>
  <div id="calculator">
    <Display v-bind:input="display"></Display>
    <Keyboard @onkey="handleClick($event)"></Keyboard>
  </div>
</template>



<script>import { CalculatorEngine } from "./model/CalculatorEngine";
import Display from "./Display.vue";
import Keyboard from "./Keyboard.vue";



export default {
    name: "HelloWorld",
    data() {
        return {
            display: "",
            localCalculatorEngine: new CalculatorEngine()
        };
    },
    methods: {
        handleClick(value) {
          console.log("click en componente");
          if (typeof value === "number") {
              this.display = this.localCalculatorEngine.handleNumber(value);
          }
          else if (typeof value === "string") {
              this.display = this.localCalculatorEngine.handleSymbol(value);
          }
        },
    },
    components: { Display, Keyboard }
}
</script>

<style scoped>
</style>

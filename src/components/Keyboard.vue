<template>
    <form>
      <br />
      <input type="button" class="btn btn-light m-1" value="7" id="keys" @click="handleClick(7)" />
      <input type="button" class="btn btn-light m-1" value="8" id="keys" @click="handleClick(8)" />
      <input type="button" class="btn btn-light m-1" value="9" id="keys" @click="handleClick(9)" />
      <input type="button" class="btn btn-light m-1" value="-" id="keys" @click="handleClick('-')" />
      <br />
      <input type="button" class="btn btn-light m-1" value="4" id="keys" @click="handleClick(4)" />
      <input type="button" class="btn btn-light m-1" value="5" id="keys" @click="handleClick(5)" />
      <input type="button" class="btn btn-light m-1" value="6" id="keys" @click="handleClick(6)" />
      <input type="button" class="btn btn-light m-1" value="*" id="keys" @click="handleClick('*')" />
      <br />
      <input type="button" class="btn btn-light m-1" value="1" id="keys" @click="handleClick(1)" />
      <input type="button" class="btn btn-light m-1" value="2" id="keys" @click="handleClick(2)" />
      <input type="button" class="btn btn-light m-1" value="3" id="keys" @click="handleClick(3)" />
      <input type="button" class="btn btn-light m-1" value="/" id="keys" @click="handleClick('/')" />
      <br />
      <input type="button" class="btn btn-light m-1" value="+" id="keys" @click="handleClick('+')" />
      <input type="button" class="btn btn-light m-1" value="0" id="keys" @click="handleClick(0)" />
      <input type="button" class="btn btn-light m-1" value="=" id="equal" @click="handleClick('=')" />
    </form>
</template>

<script>
export default {
    methods: {
        handleClick(value) {
            console.log('clicked on keyboard');
            this.$emit('onkey',value);
        }
    },
    emits: ['onkey']
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <Button @click="increment" outlined>Click me</Button>
    <DirectivesTest />
  </div>
</template>

<script>
import Button from './components/Button';
import DirectivesTest from './components/DirectivesTest';

export default {
  name: 'App',
  components: {
    Button,
    DirectivesTest
  },
  data() {
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {
      this.amountOfClicks += 1
    }
  }
}
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

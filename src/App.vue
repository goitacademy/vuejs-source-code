<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <ApartmentCard
      :description="apartment.description"
      :photo="apartment.photo"
      :rating="apartment.rating"
      :price="apartment.price"
    />
  </div>
</template>

<script>
import ApartmentCard from './components/apartment-card';

export default {
  name: 'App',
  components: {
    ApartmentCard
  },
  data() {
    return {
      amountOfClicks: 0,
      apartment: {
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nobis quasi cupiditate hic soluta laborum corporis est velit sit animi?',
        photo: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        price: 1200,
        rating: 4.3
      }
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

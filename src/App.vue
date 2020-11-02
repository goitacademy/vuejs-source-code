<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentsFilterForm
        class="apartments-filter"
        @submit="logger"
      />
    </Container>
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click.native="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList'
import ApartmentsItem from './components/apartment/ApartmentsItem'
import apartments from './components/apartment/apartments'
import ApartmentsFilterForm from './components/apartment/ApartmentsFilterForm'
import Container from './components/shared/Container'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container
  },
  data() {
    return {
      text: '',
      apartments
    }
  },
  methods: {
    logger(value) {
      console.log(value, '---form value');
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>

<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList'
import apartments from './components/apartment/apartments'

export default {
  name: 'App',
  components: {
    ApartmentsList,
  },
  data() {
    return {
      apartments,
      apartment: {
        id: '5f05c9dad2c9bc0f773444bc',
        title: 'Aut qui adipisci distinctio maiores molestiae sit est inventore vero.',
        descr: 'Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.',
        price: 2032,
        rating: 4.7,
        location: {
          city: 'Kherson',
        },
        owner: {
          name: 'Ellen',
          phone: '115-355-5652',
          email: 'Tracey.Morar86@hotmail.com',
        },
      },
    }
  },
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

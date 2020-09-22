<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg"
    />
  </div>
</template>

<script>
import ApartmentsItem from './components/apartment/ApartmentsItem'
export default {
  name: 'App',
  components: {
    ApartmentsItem,
  },
  data() {
    return {
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

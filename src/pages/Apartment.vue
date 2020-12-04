<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentsOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container'
import apartments from '../components/apartment/apartments'
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo'
import ApartmentsOwner from '../components/apartment/AprtmentsOwner'

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
  },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      )
    },
  },
  mounted() {
    console.log(this.apartment)
  },
}
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>

<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container';
import apartments from '../components/apartment/apartments';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo';
import ApartmentsOwner from '../components/apartment/AprtmentsOwner';
import Reviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  beforeCreate() {
    console.log(this.reviewsList, '---beforeCreate');
  },
  created() {
    console.log(this.reviewsList, '---created');
  },
  beforeMount() {
    console.log(this.$el, '----beforeMount');
  },
  mounted() {
    console.log(this.$el, '----mount');
  },
  beforeDestroy() {
    console.log(this.$el, '----beforeDestroy');
  },
  destroyed() {
    console.log(this.$el, '----destroyed');
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>

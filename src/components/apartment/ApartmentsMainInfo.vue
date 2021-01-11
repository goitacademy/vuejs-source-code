<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <Button @click="handleApartmentsBooking">Забронировать</Button>
    </div>
  </article>
</template>

<script>
import Rating from '../StarRating';
import Button from '../shared/Button';
import { bookApartment } from '../../services/orders.services';

export default {
  name: 'ApartmentsMainInfo',
  components: {
    Rating,
    Button,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
      };

      try {
        await bookApartment(body);

        this.$notify({
          type: 'success',
          title: 'Заказ добавлен',
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Произошла ошибка',
          text: error.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>

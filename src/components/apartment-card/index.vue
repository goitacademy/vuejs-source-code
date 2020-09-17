<template>
  <div class="apartment-card">
    <img v-if="photo" :src="photo" alt="" class="apartment-card__photo" />
    <div class="apartment-card__inner">
      <p v-if="description" class="apartment-card__description">{{ description }}</p>
      <div v-if="rating" class="apartment-card__rating">
        <StarRating :rating="rating" />
      </div>
      <div v-if="price" class="apartment-card__price">UAH {{ price }}</div>
    </div>
  </div>
</template>

<script>
import StarRating from '../StarRating'

export default {
  name: 'ApartmentCard',
  components: {
    StarRating
  },
  props: {
    photo: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.apartment-card {
  position: relative;
  max-width: 350px;

  &:hover {
    .apartment-card__inner {
      opacity: 1;
    }
  }

  &__inner {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0F1D2D, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    cursor: pointer;
  }

  &__description {
    margin-bottom: 20px;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading'

export default {
  name: 'ReviewsItem',
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.reviews-item {
  background: #fff;
  padding: 20px 22px;
  line-height: 1.3;
  margin-bottom: 2px;

  &:last-child {
    margin-bottom: 0;
  }

  &__content {
    display: -webkit-box;
    margin-top: 20px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>

<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Заказы</MainTitle>
          <OrdersList :items="orders" />
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from '../components/shared/Container';
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer';
import MainTitle from '../components/shared/MainTitle';
import OrdersList from '../components/my-orders/OrdersList';
import { getOrders } from '../services/order.service';

export default {
  name: 'MyOrdersPage',
  components: {
    SectionWithHeaderSpacer,
    Container,
    MainTitle,
    OrdersList,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: 'error',
        title: 'Что-то пошло не так',
        text: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>

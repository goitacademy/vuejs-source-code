<template>
  <div class="account-actions" @mouseover="open" @mouseleave="close">
    <button @click="toggle" class="account-actions__btn">
      <span class="account-actions__text">профиль</span>
      <svg
        class="account-actions__icon"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0C5.38286 0 3.25391 2.12896 3.25391 4.74609C3.25391 7.36323 5.38286 9.49219 8 9.49219C10.6171 9.49219 12.7461 7.36323 12.7461 4.74609C12.7461 2.12896 10.6171 0 8 0Z"
        />
        <path
          d="M15.8216 14.0161C14.4028 11.8877 12.0282 10.6172 9.4708 10.6172H6.5292C3.9718 10.6172 1.5972 11.8877 0.178438 14.0161L0.0898438 14.1489V18H15.9102H15.9102V14.1489L15.8216 14.0161Z"
        />
      </svg>
    </button>
    <ul v-show="isOpen" class="account-actions__list">
      <li class="account-actions__item">
        <router-link class="account-actions__link" :to="{ name: 'my-orders' }"
          >Мои заказы</router-link
        >
      </li>
      <li class="account-actions__item">
        <button @click="handleLogout" class="account-actions__logout">
          Выйти
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AccountActions',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async handleLogout() {
      try {
        await this.logout();
        const { requiresAuth } = this.$route.meta;

        if (requiresAuth) {
          this.$router.push({ name: 'login-page' });
        }
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Логаут не удался',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.account-actions {
  position: relative;
  display: inline-flex;
  padding: 5px 0;
  color: #fff;

  &__btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }

  &__text {
    margin-right: 5px;
  }

  &__icon {
    transition: fill 0.4s;
    fill: currentColor;
    width: 16px;
    height: 18px;
  }

  &__list {
    position: absolute;
    right: 0;
    top: 100%;
    background: #fff;
    padding: 15px;
    color: #000;
    width: 150px;
    border: 1px solid $secondary-color;
  }

  &__item {
    margin-bottom: 5px;
    transition: color 0.4s;
    &:hover {
      color: $main-color;
    }
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }

  &__logout {
    padding: 0;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
  }
}
</style>

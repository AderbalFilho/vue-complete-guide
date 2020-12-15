<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter />
    <FavoriteValue />
    <button @click="addTen">Add 10</button>
    <ChangeCounter />
  </base-container>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';
import UserAuth from './components/UserAuth';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    addTen() {
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

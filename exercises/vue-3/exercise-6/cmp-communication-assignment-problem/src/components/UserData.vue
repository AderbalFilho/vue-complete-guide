<template>
  <section>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="number" id="age" v-model="age" />
    </div>
  </section>
</template>

<script>
export default {
  emits: [
    'update-age',
    'update-user',
  ],
  data() {
    return {
      age: '',
      username: '',
    }
  },
  watch: {
    age(value) {
      this.$emit('update-age', value)
    },
    username(value) {
      this.$emit('update-user', value)
    },
  }
}
</script>

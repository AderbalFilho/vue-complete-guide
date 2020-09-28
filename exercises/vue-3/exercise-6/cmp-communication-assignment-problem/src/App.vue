<template>
  <section>
    <user-data
      @update-age="updateAge"
      @update-user="updateUser"
    >
    </user-data>
    <active-user :age="age" :username="username"></active-user>
  </section>
</template>

<script>
export default {
  data() {
    return {
      age: 30,
      username: 'Aderbal Filho',
    }
  },
  methods: {
    updateAge(age) {
      this.age = +age;
    },
    updateUser(username) {
      this.username = username;
    },
  }
}
</script>

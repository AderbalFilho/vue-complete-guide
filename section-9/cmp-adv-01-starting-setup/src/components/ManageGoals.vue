<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <ErrorAlert v-if="inputIsInvalid">
      <h2>Input is Invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false;
    },
    setGoal() {
      const enteredValue = this.$refs.goal.value;

      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
  }
}
</script>

new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    }
  },
  watch: {
    counter(value) {
      const vm = this;

      setTimeout(() => {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result() {
      console.log('Method');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    }
  }
});

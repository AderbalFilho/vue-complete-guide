new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    keyPressed({ target }) {
      this.value = target.value;
    },
    showButtonAlert(alertText = 'Button clicked!') {
      alert(alertText);
    }
  }
});

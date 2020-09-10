new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    alertMe() {
      alert('Alert!')
    },
    increase(step = 1, e) {
      this.counter += step;
    },
    updateCoordinates({ clientX, clientY }) {
      this.x = clientX;
      this.y = clientY;
    }
  }
});

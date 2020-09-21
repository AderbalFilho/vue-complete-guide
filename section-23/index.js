new Vue({
  el: '#app',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle({ target }) {
      this.title = target.value;
    }
  }
});

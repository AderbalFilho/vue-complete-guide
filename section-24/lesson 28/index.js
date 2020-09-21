new Vue({
  el: '#app',
  data: {
    link: 'https://www.google.com.br/'
  },
  methods: {
    changeLink() {
      this.link = 'https://www.apple.com/'
    }
  }
});

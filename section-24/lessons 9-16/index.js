new Vue({
  el: '#app',
  data: {
    finishedLink: '<a href="https://www.google.com.br/" target="_blank">Google</a>',
    link: 'https://www.google.com.br/',
    title: 'Hello World!'
  },
  methods: {
    sayHello() {
      return this.title;
    },
  }
});

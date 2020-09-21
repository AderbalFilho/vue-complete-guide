new Vue({
  el: '#exercise',
  data: {
    age: 30,
    name: 'Aderbal Filho',
    randomImage: 'https://s2.glbimg.com/z_gIOSUdsxyNGClgVLYVBHBziyw=/0x0:400x400/400x400/s.glbimg.com/po/tt2/f/original/2016/05/20/new-google-favicon-logo.png'
  },
  computed: {
    randomNumber() {
      return Math.random();
    }
  }
});

new Vue({
  el: '#exercise',
  data: {
    hasStartedProgress: false,
    highlight: false,
    progress: 0,
    secondUserClass: '',
    start: false,
    userClass: '',
    userStyle: {
      border: '1px solid black',
      height: '100px',
      width: '100px',
    },
    useSecondUserClass: ''
  },
  computed: {
    effectClasses() {
      return  {
        highlight: this.highlight,
        shrink: this.start && !this.highlight
      };
    }
  },
  methods: {
    startEffect: function() {
      this.start = true;

      setInterval(() => {
        this.highlight = !this.highlight;
      }, 2000);
    },
    startProgress: function() {
      if (!this.hasStartedProgress) {
        this.hasStartedProgress = true;

        setInterval(() => {
          this.progress = this.progress === 100 ? 0 : this.progress + 10;
        }, 2000);
      }
    }
  }
});

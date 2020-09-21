new Vue({
  el: '#app',
  data: {
    isGameRunning: false,
    monsterHealth: 100,
    playerHealth: 100,
    turns: []
  },
  methods: {
    startGame() {
      this.isGameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack(e, playerMin = 3, playerMax = 10, typeAttack = '') {
      const damage = this.calculateDamage(playerMin, playerMax);

      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster${typeAttack} for ${damage}`
      });

      if (this.checkWin(this.monsterHealth, 'won')) {
        return;
      }

      this.monsterAttacks();
    },
    specialAttack() {
      this.attack(null, 10, 20, ' hard');
    },
    heal() {
      this.playerHealth = this.playerHealth <= 90 ? this.playerHealth + 10 : 100;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.monsterAttacks();
    },
    giveUp() {
      this.isGameRunning = false;
    },
    monsterAttacks() {
      const damage = this.calculateDamage(5, 12);

      this.playerHealth -= this.calculateDamage(5, 12);
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`
      });

      this.checkWin(this.playerHealth, 'lost');
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin(health, kind) {
      if (health <= 0) {
        if (confirm(`You ${kind}! New game?`)) {
          this.startGame();
          return true;
        }

        this.isGameRunning = false;

        return true;
      }

      return false;
    }
  }
});

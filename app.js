 new Vue({
     el: '#app',
     data: {
         playerHealth: 100,
         monsterHealth: 100,
         gameIsRunning: false
     },
     methods: {
         startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;             
         },
         calculateDamage: function(max, min){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
         },
         checkWin: function() {
            if (this.monsterHealth <= 0){
                if (confirm('You won! Start a new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if (confirm('You lost! Start a new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } 
            return false;
         },
         monsterAttacks() {
            this.playerHealth -= this.calculateDamage(12, 5);                         
            
            if (this.checkWin()) {
                return;
            }
         },
         attack: function() {
            this.monsterHealth -= this.calculateDamage(10, 3);
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
         },
         specialAttack: function() { //same as attack() but diff damage values
            this.monsterHealth -= this.calculateDamage(20, 10);    
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();        
         },
         heal: function() {
                    
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.monsterAttacks();      
         },
         giveUp: function() {
            this.gameIsRunning = false;
         }
     }
 });
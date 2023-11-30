AFRAME.registerComponent('game-play', {
    init: function () {
      this.setupCollisionEvents();
    },
  
    setupCollisionEvents: function () {
      const sceneEl = this.el;
  
     
      const scubaDiver = document.getElementById('scubaDiver');
      const coins = document.querySelectorAll('.coin');
      const fish = document.querySelectorAll('.fish');
  
      
      coins.forEach((coin) => {
        coin.addEventListener('collide', (event) => {
          
          console.log('Scuba diver collected a coin!');
          
          coin.setAttribute('visible', false); 
        });
      });
  
      
      fish.forEach((fish) => {
        fish.addEventListener('collide', (event) => {
          
          console.log('Scuba diver collided with a fish!');
          
        });
      });
    }
  });
  
  AFRAME.registerComponent('scuba-diver', {
    init: function () {
      
      const diverModel = document.createElement('a-box');
      diverModel.setAttribute('width', '1');
      diverModel.setAttribute('height', '1');
      diverModel.setAttribute('depth', '1');
      diverModel.setAttribute('color', 'yellow');
      this.el.appendChild(diverModel);
  
      
      this.el.setAttribute('game-play', '');
    }
  });
  
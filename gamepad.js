class Gamepad {
    constructor() {
      this.buttons = {};
      this.buttons['a'] = 0;
      this.buttons['b'] = 0;
      this.buttons['x'] = 0;
      this.buttons['y'] = 0;
      this.buttons['rb'] = 0;
      this.buttons['lb'] = 0;
      this.buttons['rt'] = 0;
      this.buttons['lt'] = 0;
      this.buttons['rs'] = 0;
      this.buttons['ls'] = 0;
      this.buttons['start'] = 0;
      this.buttons['select'] = 0;
      this.buttons['dup'] = 0;
      this.buttons['ddown'] = 0;
      this.buttons['dleft'] = 0;
      this.buttons['dright'] = 0;
      this.buttons['leftstick_x'] = 0;
      this.buttons['leftstick_y'] = 0;
      this.buttons['rightstick_x'] = 0;
      this.buttons['rightstick_y'] = 0;
      
      this.connected = false;
      
      window.addEventListener("gamepadconnected",function(e) {this.connect(e)}.bind(this));
      window.addEventListener("gamepaddisconnected",function(e) {this.disconnect(e)}.bind(this));
    }
    
    connect(e) {
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          e.gamepad.index, e.gamepad.id,
          e.gamepad.buttons.length, e.gamepad.axes.length);
      this.connected = true;
      console.log(this.connected);
    }
    
    disconnect(e) {
      console.log("Gamepad disconnected from index %d: %s",
      e.gamepad.index, e.gamepad.id);
      //this.connected = false;
    }
    
    update() {
      let gamepad = navigator.getGamepads()[0];
  
      if (gamepad && this.connected) {
        this.buttons['a'] = gamepad.buttons[0].value;
        this.buttons['b'] = gamepad.buttons[1].value;
        this.buttons['x'] = gamepad.buttons[2].value;
        this.buttons['y'] = gamepad.buttons[3].value;
        this.buttons['lb'] = gamepad.buttons[4].value;
        this.buttons['rb'] = gamepad.buttons[5].value;
        this.buttons['lt'] = gamepad.buttons[6].value;
        this.buttons['rt'] = gamepad.buttons[7].value;
        this.buttons['select'] = gamepad.buttons[8].value;
        this.buttons['start'] = gamepad.buttons[9].value;
        this.buttons['ls'] = gamepad.buttons[10].value;
        this.buttons['rs'] = gamepad.buttons[11].value;
        this.buttons['dup'] = gamepad.buttons[12].value;
        this.buttons['ddown'] = gamepad.buttons[13].value;
        this.buttons['dleft'] = gamepad.buttons[14].value;
        this.buttons['dright'] = gamepad.buttons[15].value;
        this.buttons['leftstick_x'] = gamepad.axes[0];
        this.buttons['leftstick_y'] = gamepad.axes[1];
        this.buttons['rightstick_x'] = gamepad.axes[2];
        this.buttons['rightstick_y'] = gamepad.axes[3];
      }
      
    }
    
    getKey(key) {
      // if (this.connected) {
      //   return this.buttons[key];
      // }
      // else {
      //   return 0;
      // }
      return this.buttons[key];
    }
    
    connected() {
      return this.connected;
    }
  }
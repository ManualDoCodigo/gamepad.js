

let gamepad;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight/25);
  gamepad = new Gamepad();
  
}

let lpad_x = 200;
let lpad_y = 200;
let rpad_x = 200;
let rpad_y = 200;

function draw() {
  background(35);
  gamepad.update();
  
  fill(255);
  text("A: " + gamepad.getKey('a'),20,windowHeight/25);
  text("B: " + gamepad.getKey('b'),20,(windowHeight/25)*2);
  text("X: " + gamepad.getKey('x'),20,(windowHeight/25)*3);
  text("Y: " + gamepad.getKey('y'),20,(windowHeight/25)*4);
  text("rb: " + gamepad.getKey('rb'),20,(windowHeight/25)*5);
  text("lb: " + gamepad.getKey('lb'),20,(windowHeight/25)*6);
  text("rt: " + gamepad.getKey('rt'),20,(windowHeight/25)*7);
  text("lt: " + gamepad.getKey('lt'),20,(windowHeight/25)*8);
  text("rs: " + gamepad.getKey('rs'),20,(windowHeight/25)*9);
  text("ls: " + gamepad.getKey('ls'),20,(windowHeight/25)*10);
  text("start: " + gamepad.getKey('start'),20,(windowHeight/25)*11);
  text("select: " + gamepad.getKey('select'),20,(windowHeight/25)*12);
  text("dup: " + gamepad.getKey('dup'),20,(windowHeight/25)*13);
  text("ddown: " + gamepad.getKey('ddown'),20,(windowHeight/25)*14);
  text("dleft: " + gamepad.getKey('dleft'),20,(windowHeight/25)*15);
  text("dright: " + gamepad.getKey('dright'),20,(windowHeight/25)*16);
  text("leftstick_x: " + gamepad.getKey('leftstick_x'),20,(windowHeight/25)*17);
  text("leftstick_y: " + gamepad.getKey('leftstick_y'),20,(windowHeight/25)*18);
  text("rightstick_x: " + gamepad.getKey('rightstick_x'),20,(windowHeight/25)*19);
  text("rightstick_y: " + gamepad.getKey('rightstick_y'),20,(windowHeight/25)*20);
  
  lpad_x = map(gamepad.getKey('leftstick_x'), -1, 1, 0, width);
  lpad_y = map(gamepad.getKey('leftstick_y'), -1, 1, 0, height);
  rpad_x = map(gamepad.getKey('rightstick_x'), -1, 1, 0, width);
  rpad_y = map(gamepad.getKey('rightstick_y'), -1, 1, 0, height);
  
  fill(255,0,0);
  circle(lpad_x,lpad_y,windowHeight/10);
  fill(255,255,0);
  circle(rpad_x,rpad_y,windowHeight/10);
  
  fill(255,0,255);
  rect(0,height-windowHeight/15+ gamepad.getKey('lt')*(-height+windowHeight/15),windowHeight/5,windowHeight/15)
  rect(width-windowHeight/5,height-windowHeight/15+ gamepad.getKey('rt')*(-height+windowHeight/15),windowHeight/5,windowHeight/15)
}
class Box{
constructor(x,y,width,height){
var options = {
restitution:0.4,
friction:0.30,
//isStatic:true
}
this.image = loadImage("images/bowling pin.png");
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
this.visibility=255;
}
display(){
console.log(this.body.speed);
if(this.body.speed<3){
var angle = this.body.angle;
var pos = this.body.position;
push ();
translate (pos.x,pos.y);
rotate (angle);
imageMode(CENTER);
stroke ("lightblue")
strokeWeight(5)
fill ("purple")
image(this.image,0,0,this.width,this.height);
pop ();
}
else{
World.remove(world,this.body)
push ();
this.visibility=this.visibility-5;
pop ();
}
}
}
  
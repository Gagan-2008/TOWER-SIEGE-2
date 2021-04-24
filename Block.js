class Block{
  constructor(x, y, width, height) {
      var options = {
        is_static:true,
          restitution :0.8,
          friction :1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
    this.image = loadImage("block.png");
     this.Visiblity = 255;
      World.add(world, this.body);


    }
    display(){
      
      if(this.body.speed <3){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);  
      }
       else{
         World.remove(world, this.body);
         push();
         imageMode(CENTER);
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);  
         pop();
       }
    }
}
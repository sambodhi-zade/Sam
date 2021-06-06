class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
      }
      this.body = Bodies.rectangle(x,793,width,height,options);
      this.width = 800;
      this.height = 10;

      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill("white")
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };

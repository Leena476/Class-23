class Ground{

    //add properties here
    constructor(x,y,width,height){

        var options= {
            isStatic: true
        }

        this.width= width;
        this.height= height;

        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }

    //add functions here
     display(){

        var pos= this.body.position;

        fill("aqua");
        rectMode(CENTER);
        rect(pos.x ,pos.y,this.width, this.height);



    }




}
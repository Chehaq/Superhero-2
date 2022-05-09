var canvas= new fabric.Canvas('myCanvas');

block_imgWidth= 30;
block_imgHeight= 30;

player_x= 10;
player_y= 10;

var player_object="";

function player_update(){
fabric.Image.fromURL("player.png",function (Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

});
}

 function new_img(get_Img){
    fabric.Image.fromURL(get_Img,function (Img){
        block_imgObject=Img;
        block_imgObject.scaleToWidth(block_imgWidth);
        block_imgObject.scaleToHeight(block_imgHeight);
        block_imgObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imgObject);
        
    });
}

    window.addEventListener("keydown", my_keydown);


    function my_keydown(e)
    {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
        if(keyPressed == '70')
        {
            new_img("ironman_face.png");
            console.log("'f' Key pressed");
        }

        if(keyPressed == '66')
        {
            player_x = 200;
            new_img("spiderman_body.png");
            console.log("b Key Pressed");
        }
        
        if(keyPressed == '72')
        {
            player_x = 350;
            new_img("captain_america_left");
            console.log("h Key Pressed");
        }
        if(keyPressed == '76')
        {
            player_x = 600;
            new_img("hulk_legs.png");
            console.log("l Key Pressed");
        }
        if(keyPressed == '82')
        {
            player_x = 700;
            new_img("thor_right_hand.png");
            console.log("r Key Pressed");
        }
        if(keyPressed == '38')
        {
            up();
            console.log(" Up Key Pressed");
        }

        if(keyPressed == '40')
        {
            down();
            console.log(" Down Key Pressed");
        }

        if(keyPressed == '37')
        {
            left();
            console.log(" Left Key Pressed");
        }

        if(keyPressed == '39')
        {
            left();
            console.log(" Right Key Pressed");
        }
    }

    
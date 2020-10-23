
var canvas = new fabric.Canvas('upper', {
    backgroundColor: 'rgb(100,100,200)',
    selectionColor: 'blue',
    selectionLineWidth: 2,
    height:864,
    width:1280,    
    // ...
  });

var roomImgElement = document.getElementById('room-bg');  
var RoomImgInstance = new fabric.Image(roomImgElement, {
    left: 0,
    top: 0,
    selectable:false,
    evented:false,    

    });

canvas.add(RoomImgInstance);

var imageUrl = './images/wallpapers/beige.png';
var floorimage = fabric.Image.fromURL(imageUrl, function(myImg) {
    myImg.set({
        left:-220,
        top: 716,            
        selectable:false,
        evented:false   
    });
    canvas.add(myImg);
    canvas.moveTo(myImg,-1);   
    canvas.renderAll(canvas);

});


function buttonClicked(clicked_id,place) {
    if(place=="wallpaper"){
        var imageUrl = './images/wallpapers/'+clicked_id+'.png';
        canvas.setBackgroundImage(imageUrl, canvas.renderAll.bind(canvas), {
                
            backgroundImageStretch: true,      
        });  
        //canvas.setBackgroundImage(bgImgInstance);
        console.log('wallpaper button');
        canvas.renderAll(canvas);
    } else if(place=="floor"){
        var imageUrl = './images/floor/'+clicked_id+'.png';
        var floorImage = fabric.Image.fromURL(imageUrl, function(myImg) {        
            myImg.set({
                left:-232,
                top: 716,            
                selectable:false,
                evented:false   
            });
            canvas.add(myImg);
            canvas.moveTo(myImg,-1);   
            canvas.renderAll(canvas);
           
        });
    }
}



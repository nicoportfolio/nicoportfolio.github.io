wordsworks();

function wordsworks() {

var canvasIn = false;

$( window ).scroll(function() {
  var elem = document.querySelector('#titleCanvas');
  if(elem != null) {
  var bounding = elem.getBoundingClientRect();

if(bounding.bottom < (window.innerHeight || document.documentElement.clientHeight) && !canvasIn){
  canvasIn=true;
  // console.log("in");
  var img = new Image();
    var clearCanvas;
    var fader;
  img.src="./WordsWorks/assets/brush1r.png";
  img.width=360;

  function distanceBetween(point1,point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x,2)+Math.pow(point2.y - point1.y, 2));
  }

  function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  }

  function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  const canv = document.getElementById('titleCanvas');
  const ctx = canv.getContext('2d');
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.canvas.width=innerWidth;
  ctx.canvas.height=innerHeight;

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

  var rect = canv.getBoundingClientRect(),
       scaleX = innerWidth / rect.width,
       scaleY = innerHeight / rect.height;

  var isDrawing, lastPoint;
  canv.onmousedown = function(e) {

      var pos = getMousePos(canv, e);
      var posx = pos.x;
      var posy = pos.y;

    isDrawing=true;
    lastPoint = {x: posx, y: posy};
    // lastPoint = {x: e.clientX, y:e.clientY};
    clearInterval(clearCanvas);
    clearTimeout(fader);
  };

  canv.onmousemove = function(e) {

      var pos = getMousePos(canv, e);
      var posx = pos.x;
      var posy = pos.y;

    if(!isDrawing) return;

    var currentPoint = {x: posx, y: posy};
    // var currentPoint = {x: e.clientX, y: e.clientY};
    var dist = distanceBetween(lastPoint, currentPoint);
    var angle = angleBetween(lastPoint, currentPoint);
    for(var i=0; i<dist; i+=35) {
      x=lastPoint.x+(Math.sin(angle)*i);
      y=lastPoint.y+(Math.cos(angle)*i);
      ctx.save();
      ctx.translate(Math.random(0,10)+x,Math.random(0,10)+y);
      ctx.scale(0.9,0.9);
      ctx.globalAlpha=0.4;
      // ctx.rotate(Math.PI*100/getRandomInt(30,360));
      ctx.rotate(getRandomInt(30,360));
      ctx.drawImage(img,-img.width/2,-img.width/2);
      ctx.restore();
    }

    lastPoint=currentPoint;
  };
  canv.onmouseup=function() {
    isDrawing = false;
    fader=setTimeout(fadeCanvas,800);
  };

  function fadeCanvas() {
    clearCanvas=setInterval(function() {
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.globalCompositeOperation='destination-out';
    ctx.fillStyle= '#FFF';
    ctx.fillRect(0,0,canv.width, canv.height);
    ctx.restore();

    },30);
  }

  function windowResized() {
    ctx.canvas.width=innerWidth;
    ctx.canvas.height=innerHeight;
  }
}
}
});
}

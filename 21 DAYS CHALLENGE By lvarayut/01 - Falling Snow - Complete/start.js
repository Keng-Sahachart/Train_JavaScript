(() => {
  // เริ่มเขียนโค้ด
  function setup(){
     /** @type {CanvasRenderingContext2D} */  // คำสั่ง ช่วยให้ vsCode ทำ intellisense canvasContext แสดง fnc ต่างๆได้ 
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth; // ไม่ได้กำหนด ความกว้าง*ยาว มาตั้งแต่แรก
    canvas.height = window.innerHeight;

    /** @type {CanvasRenderingContext2D} */  
    const canvasContext = canvas.getContext('2d');
    return {  // obj ตั้งชื่อตัวแปร ,พร้อมกำหนดค่า ,พร้อม return
      canvas,
      canvasContext, // กำหนดว่าจะทำ 2d
      numberOfSnowBalls: 250 //กำหนดจำนวนหิมะ
    }
  }

  function random(min,max){  // สุ่มตัวเลข
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  function createSnowBalls(canvas,numberOfSnowBalls){
    const x = [...Array(numberOfSnowBalls)].map(()=> {  // คำสั่ง ec6 สร้าง array ตามจำนวน เป็น map
      return{
        x : random(0,canvas.width),
        y: random(0,canvas.height),

        opacity : random(0.5,1), 
        radius : random(2,4),
        speedX : random(-5,5),
        speedY : random(1,2)
      }
    });
    console.log(x);  
    return x;
  }

  function drawSnowBall(canvasContext,snowBall){
    const canvasContext_ = canvasContext;
    canvasContext_.beginPath(); // บอก canvas ว่ากำลังจะวาด // ไม่ auto complete
    canvasContext_.arc(snowBall.x,snowBall.y,snowBall.radius,0,Math.PI*2)  // วาดรูปวงกลม
    canvasContext_.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;  // กำหนดสี ความโปรงแสง
    canvasContext_.fill(); // คำสั่งวาด
  }

  function moveSnowBall(canvas,snowBall){
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;

    if(snowBall.x > canvas.width) {
      snowBall.x = 0;
    }
    else if(snowBall.x < 0){
      snowBall.x = canvas.width;
    }

    if(snowBall.y > canvas.height) {
      snowBall.y = 0;
    }
    else if(snowBall.y < 0){
      snowBall.y = canvas.height;
    }
  }

  function run(){
 
    const {canvas,canvasContext,numberOfSnowBalls} = setup(); // ประกาศตัวแปรเป็น obj และ รับค่าจาก setup
    const snowBalls = createSnowBalls(canvas,numberOfSnowBalls);

    setInterval(() => {
 
      canvasContext.clearRect(0,0,canvas.width,canvas.height)  //มีภาพซ้อน ต้อง เคลียร์ รูปเก่า ออกก่อน ที่จะวาดใหม่ 
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext,snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(canvas,snowBall));
      
    }, 50);

   
    

  }


  run();


})();

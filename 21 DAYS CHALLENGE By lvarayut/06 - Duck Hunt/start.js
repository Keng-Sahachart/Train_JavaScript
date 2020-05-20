(() => {
  // เริ่มเขียนโค้ด
  /*
  create duck
  keep duck to create element to show duck
  move duck + set interval
    move check direction
    change left right bankground
  shoot
  */

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createDuck(duckNum) {
    const duck = [...Array(duckNum)].map(() => {
      return {
        x: random(0, window.innerWidth),
        y: random(0, window.innerHeight),
        speedX: random(-20, 20),
        speedY: random(5, 10)
      }
    });
    // console.log(duck);
    return duck;
  }

  function setupDuckElems(duck) {
    const duckElem = document.createElement("div");
    duckElem.className = "duck";

    duckElem.style.top = `${duck.y}px`;
    duckElem.style.left = `${duck.x}px`;
    duckElem.style.backgroundImage = "url('./left-1.png')";
    document.body.appendChild(duckElem);  //append ใช้ document.body ถึงผ่าน ***ใช้ getElementBy.... ไม่ได้

    // console.log(DuckElems);

    return { duck, duckElem };
  }
  /**
   * 
   * @param {HTMLDivElement} duckElem 
   */
  function moveDuck(duck, duckElem) {

    const { left, top } = duckElem.getBoundingClientRect();  //ต้องการ เฉพาะ left,top

    duck.x = left + duck.speedX;   // ทำไมไม่เอา จาก duck.x += duck.speedX  เลย
    duck.y = top + duck.speedY;

    if (duck.x > (window.innerWidth - 0) || duck.x < 0) {
      duck.speedX *= -1;
    }
    if (duck.y > (window.innerHeight - 0) || duck.y < 0) {
      duck.speedY *= -1;
    }

    duckElem.style.left = `${duck.x}px`;  //แรกผิดพลาด duckElem.style.left += `${duck.x}px`; 
    duckElem.style.top = `${duck.y}px`;  //ทำให้รู้ว่า เอา px ไป + กับ  px 


    /** Get Image */
    const direction = duck.speedX < 0 ? "left" : "right";

    const numImg = duckElem.style.backgroundImage.indexOf("1") > 0 ? "2" : "1";
    // console.log(numImg);


    duckElem.style.backgroundImage = `url('./${direction}-${numImg}.png')`;

    /** nothing to return 
     * but use interval then return out interval's value at run() command
    */
  }

  
  /**
   * 
   * @param {event} event 
   */
  function shootDuck(event) {
    console.log(event);
    GunShot();
/**
 * @type HTMLDivElement
 */
    const duckElem = event.currentTarget;

    clearInterval(duckElem.interval);

    duckElem.style.transition = "top 2s";   // ตั้งค่า ทิศทาง การเลื่อน ไปตำแหน่งใหม่ ที่จะกำหนด ภายใน  2 sec
    duckElem.style.top = `${window.innerHeight}px`;   // ตั้งค่า ตำแหน่งใหม่ แล้ว transition จะทำงาน 

    setTimeout(() => {
      document.body.removeChild(duckElem);
      const Checkduck = document.querySelector(".duck"); 
      if(!Checkduck){ 
        const winElem = document.querySelector(".winning");
        winElem_ByClass.style.opacity = 1;

        const winElem_ByClass = document.getElementsByClassName("winning");  // ไม่ต้อง มี . นำหน้า
        // winElem_ByClass.style['opacity'] = 1 ;


        console.log(winElem_ByClass);   // ได้ [h1.winning]
        console.log(winElem);   // ได้ <h1 class="winning" style="opacity: 1;">
        
      }

    }, 2000);

  }


  function run() {
    const ducks = createDuck(2);   // สร้างเป็ด

    const duckElems = ducks.map(setupDuckElems);  // เอาเป็ดมาสร้าง Elem Div เพื่อแสดงผล 

    duckElems.forEach(({ duck, duckElem }) => {
      // console.log(duck);
      // console.log(DuckElems);

      /* setInterval จะ return ออกมา เป็น ค่า **interval คล้ายๆกับ เป็น interval timer ของ object นั้นๆ 
      จะติด ตัว obj ไป เพื่อเอาไว้หยุดเวลา ไม่ให้ทำงานต่อได้ 
      สังเกตุว่า ไม่ได้ สร้าง property นี้ตั้งแต่เริ่มแรก แล้วมันจะเกิดขึ้นเอง ใน obj นั้น ตอนเรา assign ค่าเข้าไปนี่แหละ ถ้าไม่ได้ asign เข้าไป มันจะไม่เกิดขึ้น*/
      duckElem.interval = setInterval(() => moveDuck(duck, duckElem), 100);
      
      duckElem.addEventListener("click",shootDuck);

    });


  }

function GunShot() {
    var snd = new Audio("Gun+Shot2.mp3")
    snd.play();
  }

  run();
})();


/**
 *  
 * duckElem.interval = setInterval(() => moveDuck(duck, duckElem), 100);
 * 
 *    const winElem = document.getElementsByClassName(".winning");
 *    const winElem = document.querySelector(".winning");
 *    ได้ผลไม่เหมือนกัน   ใช้ getElementsByClassName  แล้วจะ เซ็ต winElem.style.opacity = 1; ไม่ได้
 *    console.log(winElem_ByClass);   // ไม่ได้ค่าอะไรออกมาเลย มีแต่ []
 *    console.log(winElem);   // ได้ elem ออกมาปกติ
 * 
 * 
 * 
 */
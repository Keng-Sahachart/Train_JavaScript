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

  function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createDuck(duckNum) {
    const duck = [...Array(duckNum)].map(() => {
      return {
        x: random(0,window.innerWidth),
        y: random(0,window.innerHeight),
        speedX: random(-50,50),
        speedY: random(5,10)
      }
    });
    console.log(duck);
    return duck;
  }

  function setupDuckElems(duck){
    const duckElem = document.createElement("div");
    duckElem.className = "duck";

    duckElem.style.top = `${duck.y}px`;
    duckElem.style.left = `${duck.x}px`;
    duckElem.style.backgroundImage = "url('./left-1.png')";
    document.body.appendChild(duckElem);  //append ใช้ document.body ถึงผ่าน ***ใช้ getElementBy.... ไม่ได้

    // console.log(DuckElems);

    return {duck,duckElem};
  }
/**
 * 
 * @param {HTMLDivElement} duckElem 
 */
  function moveDuck(duck, duckElem){
    
    const {left,top} = duckElem.getBoundingClientRect();  //ต้องการ เฉพาะ left,top

    duck.x = left + duck.speedX ;   // ทำไมไม่เอา จาก duck.x += duck.speedX  เลย
    duck.y = top + duck.speedY ; 

    if(duck.x > window.innerWidth || duck.x < 0) {
      duck.speedX *= -1 ;
    }
    if(duck.y > window.innerHeight || duck.y < 0) {
      duck.speedY *= -1 ;
    }

    duckElem.style.left = `${duck.x}px`;  //แรกผิดพลาด duckElem.style.left += `${duck.x}px`; 
    duckElem.style.top = `${duck.y}px`;  //ทำให้รู้ว่า เอา px ไป + กับ  px 

    const direction = duck.speedX < 0 ? "left" : "right" ;
    duckElem.style.backgroundImage.indexOf("1")

    duckElem.style.backgroundImage = `url('./${direction}-1.png')`;
  }

  // function MoveDuck( duck,duckElem) {
  //   const { left, top } = duckElem.getBoundingClientRect();
  //   const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth;
  //   const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight;

  //   if (outOfBoundX) {
  //     duck.speedX *= -1;
  //   }

  //   if (outOfBoundY) {
  //     duck.speedY *= -1;
  //   }

  //   duck.x = left + duck.speedX;
  //   duck.y = top - duck.speedY;
  //   duckElem.style.left = `${duck.x}px`;
  //   duckElem.style.top = `${duck.y}px`;

  //   duckElem.style.backgroundImage = getDuckBackgroundImage(duck, duckElem);
  // }

  function run() {
    const ducks  = createDuck(1);   // สร้างเป็ด

    const duckElems = ducks.map(setupDuckElems);  // เอาเป็ดมาสร้าง Elem Div เพื่อแสดงผล 

    duckElems.forEach( ({duck,duckElem}) => {
      // console.log(duck);
      // console.log(DuckElems);

      setInterval(() => {
        moveDuck(duck,duckElem);
      }, 100);
    });


  }

  run();
})();

(() => {
  // เริ่มเขียนโค้ด
  /*
  create duck
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
        speedY: random(7,20)
      }
    });
    console.log(duck);
    return duck;
  }

  function setupDuckElems(duck){
    
    const DuckElems = document.createElement("div");
    DuckElems.className = "duck";

    DuckElems.style.top = `${duck.y}px`;
    DuckElems.style.left = `${duck.x}px`;
    DuckElems.style.backgroundImage = "url('./left-1.png')";
    document.body.appendChild(DuckElems);  //append ใช้ document.body ถึงผ่าน ***ใช้ getElementBy.... ไม่ได้



    console.log(DuckElems);
  }

  function run() {
    const ducks  = createDuck(5);   // สร้างเป็ด
    ducks.map(setupDuckElems);  // เอาเป็ดมาสร้าง Elem Div เพื่อแสดงผล 
  }

  run();
})();

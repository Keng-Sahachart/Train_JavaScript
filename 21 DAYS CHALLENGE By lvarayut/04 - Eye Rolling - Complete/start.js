(() => {
  // เริ่มเขียนโค้ด

  function run() {
    console.log("Hello Every Body");

    const bodyElem = document.querySelector("body"); // ใช้ ทำ event ดึงตำแหน่ง mouse
    const eyeElems = document.querySelectorAll(".eye");

    function onMouseMove({ pageX, pageY }) {
      console.clear();
      console.log("Called");
      console.log("pageX => " + pageX + " ,pageY => " + pageY);
      console.log("**************************************************************");
      eyeElems.forEach(eyeElem => {
        /** หาตำแหน่ง จุด ซ้ายบน ของ ตาขาว */
        const { left, top } = eyeElem.getBoundingClientRect();  //getBoundingClientRect ค่าตำแหน่งของ eyeElem
        // ใช้ left กับ top  คือ จาก จุด 0,0 (ซ้ายบน) ของหน้าจอ ถึง จุด 0,0 (ซ้ายบน) ของตาขาว
        console.log("left => " + left + " ,top => " + top);

        /** หาจุดศูนย์ กลางของดวงตา */
        const eyeCenterX = left + eyeElem.offsetWidth / 2;
        const eyeCenterY = top + eyeElem.offsetHeight / 2;
        console.log("eyeCenterX => " + eyeCenterX + " ,eyeCenterY => " + eyeCenterY);

        /** หา radian ค่ามุม ของ mouse กับ จุด 0,0 ของตาขาว */
        const radian = Math.atan2(pageX - eyeCenterX,pageY - eyeCenterY);
        console.log("radian (pageX - eyeCenterX) => " + (pageX - eyeCenterX) + " ,radian (pageY - eyeCenterY) => " + (pageY - eyeCenterY));
        console.log("radian => " + radian);
  
        console.log("radian X => " +  eyeCenterX + " ,radian Y => " +  eyeCenterY);

        const angle = radian * 180 / Math.PI *-1;
        console.log("angle => " + angle);
        
       eyeElem.style.transform =`rotate(${angle}deg)`;   // 

        console.log("**************************************************************");
        
      });
    }

    bodyElem.addEventListener('mousemove', onMouseMove);
  }

  run();
})();



/**
 * atan2 หาหน่วย radian
 * radian คือ ความยาวของ รัศมี ที่เอามาวางทาบบน วงกลม 1 หน่วย เพื่อไปแปลง เป็นมุม องศา อีกที
 * https://en.wikipedia.org/wiki/File:Circle_radians.gif
 * https://www.geogebra.org/m/qBfHYSTQ
 * 
 */
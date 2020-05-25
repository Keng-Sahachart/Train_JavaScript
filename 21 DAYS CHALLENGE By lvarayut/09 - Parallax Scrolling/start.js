(() => {
  // เริ่มเขียนโค้ด

  function onScrollDown(event) {
    // console.log(window.scrollY);
/** @type {HTMLDivElement} */
    const moonElem = document.querySelector(".moon");

    const wishElem = document.querySelector(".wish");





    /**
     * X window.scrollY * 0.7 ยิ่งมาก จะยิ่งออกไปทาง ขวา
     * Y window.scrollY * -0.7 ยิ่ง ติดลบ จะยิ่งขึ้นบน
     */     
    moonElem.style.transform = `translate(${ window.scrollY * 0.7 }%,${ window.scrollY * -0.7 }%)`;

    wishElem.style.transform = `translateY(${ window.scrollY * -1.8 }%)`;   // ถ้ากำหนด เกิน จะ หลุดขึ้นไปขึ้นไป ด้านบนหน้าจอ

  }


  function run() {
    document.addEventListener('scroll', onScrollDown);
  }

  run();
})();


/**
 * CSS transform Property
 * https://www.w3schools.com/cssref/css3_pr_transform.asp
 *
 * translate  คือการเลื่อน ในแกน X,y   หรือ ใ่ส่แต่ X อย่างเดียวก็ได้
 * https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translate
 * transform:translate(-25px,-25px);
 *
 * translateY คือ การเลื่อน ในแกน Y เท่านั้น
 * https://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatey
 * transform:translateY(10px);
 *
 * ใน style ที่กำหนดใน js ห้ามมี semi colon ต่อท้าย 
 *      moonElem.style.transform = `translate(${ window.scrollY * 0.7 }%,${ window.scrollY * -0.7 }%);`;   <==== ต่อท้าย วงเล็บ
 * แต่ในไฟล์ css มีได้
 */
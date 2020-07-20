(() => {
  // เริ่มเขียนโค้ด
  const konamiCheat = ["ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "a",
    "b"];
  
    let index =0 ; // ตัวแปร ที่ เปลี่ยนค่าได้
  /**
   * @param {event} event 
   */
  function onKeyDown(event) {
    konamiCheat[index] === event.key ? index++ : index = 0 ;
    console.log(event.key +" - " + index);

    if(index === konamiCheat.length){  //index ที่ +1 สุดท้าย จะไม่เท่ากับ 9
      StartSnowing();
      console.log("StartSnowing");
    }

  }

  run = () => {
    document.addEventListener('keydown', onKeyDown);
  }

  run();
  // StartSnowing();
})();


/*** workshop Sahachart  2020/05/21
 * 
 * ไฟล์ snow-falling ห้าม เก็บ เป็น document function จะมองไม่เห็น (() => {.....})();
 * 
 * operator === คือ เท่ากัน และ ชนิดเดียวกัน
 */
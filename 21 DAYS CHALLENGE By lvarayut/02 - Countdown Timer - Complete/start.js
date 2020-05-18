(() => {
  // เริ่มเขียนโค้ด
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  function setElemById(id, text) {
    const idElem = document.getElementById(id);
    idElem.innerText = text;
  }

  function countDown() {
    /******************************************/
    /* keng ปรับแต่งเพิ่มเติม จาก workshop */
    const nowYear = new Date().getFullYear();
    setElemById('headYear', Math.floor(nowYear + 1));// ฟังก์ชั่นเดิม เพิ่มเติม คือ ให้เปลี่ยนปีได้ --> ถ้าข้ามปีใหม่ไปแล้ว นับปีถัดไปต่อ
    console.log(nowYear);   // log จะไม่ออก จากคำสั่งที่ ใช้ interval เรียก หรือ มันถูกเคลียร์ ไปแล้ว
    /******************************************/
    const now = new Date().getTime();  // ค่า unix timestamp
    const newYear = new Date(nowYear, 11, 31, 23, 59, 59).getTime();  // Note: JavaScript counts months from 0 to 11. 

    const newYearTimeLeft = newYear - now;

    console.log(newYear - now);

    setElemById('days', Math.floor(newYearTimeLeft / day));
    setElemById('hours', Math.floor((newYearTimeLeft % day) / hour));
    setElemById('minutes', Math.floor((newYearTimeLeft % hour) / minute));
    setElemById('seconds', Math.floor((newYearTimeLeft % minute) / second));
  }

  function run() {

    setInterval(countDown, 1000);

  }

  run();

})();

/*
ลบวัน คลาดเคลื่อน
เพราะ
format นี้ ==> new Date(year, month, day, hours, minutes, seconds, milliseconds)
Note: JavaScript counts months from 0 to 11.
      January is 0. December is 11.


// log จะไม่ออก จากคำสั่งที่ ใช้ interval เรียก หรือ มันถูกเคลียร์ ไปแล้ว
*/


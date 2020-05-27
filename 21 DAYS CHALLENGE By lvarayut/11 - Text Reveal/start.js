(() => {
  // เริ่มเขียนโค้ด

  /**
   * Summary Step
   * ใช้ event scroll 
   * หาตำแหน่งที่ scroll
   * ใน event เรียก elem text ที่จะแสดง และ รูปภาพมา
   * รูปภาพ นำมา คำนวน หา ตำแหน่ง ของ 1/10 
   * ส่วน text มีการ ทำ style ไว้ ให้ซ่อน (oppacity=0) และ เลื่อนออกไปจาก ตำแหน่งเดิม (transform: translateY(25px)) และ transition: 0.4s all linear 
   *  เมื่อเวลา add class ใหม่ เข้าไป  แสดงจะได้ดูเหมือนว่าเลื่อน
   */

  onScroll = () => {
    const sectionElems = Array.from(document.querySelectorAll('section'));
    //console.log(sectionElems);

    const scrollY = window.scrollY;
    console.log(scrollY);
    

    sectionElems.forEach((sectionElem)=>{

      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');
      // console.log(imgElems);
      // console.log(textElems);

      const Postition_scrollYReveal = imgElem.offsetTop + (imgElem.height / 10);
      if(scrollY >= Postition_scrollYReveal){
        textElem.classList.add('reveal');

        console.log('offsetHeight = ' + imgElem.offsetHeight);
        console.log('height = ' + imgElem.height);

      }else{
        textElem.classList.remove('reveal');
      }


    });




  }

  run = () => {
    document.addEventListener('scroll', onScroll);
  }

  run();


})();


/**
 * ผู้สอน ใช้ imgElem.offsetHeight  แต่เราใช้ imgElems.height  ไม่ต่างกัน
 * 
 * 
 * 
 */
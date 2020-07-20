(() => {
  // เริ่มเขียนโค้ด
  let currentImg = 0;

  function displayImageByIndex(imgElems, imageIndex) {
    const lastImageIndex = imgElems.length - 1; //   -1 ด้วย
    console.log(imageIndex);

    if (imageIndex <= -1) {   // error protecting
      imageIndex = lastImageIndex;
    } else if (imageIndex > lastImageIndex) {
      imageIndex = 0;
    }

    /**
     * @type {HTMLImageElement} imgElem
     */
    const imgElem = imgElems[imageIndex];
    console.log(imgElems);
    imgElem.scrollIntoView({ behavior: "smooth" });

    currentImg = imageIndex;
  }

  function run() {
    const imgElems = document.querySelectorAll('img');
    const btnPrevious = document.querySelector('.previous');
    const btnNext = document.querySelector('.next');

    btnPrevious.addEventListener('click', () => displayImageByIndex(imgElems, currentImg - 1));   // fnc มี arg -> ถ้าไม่ใส่ arrow fnc จะไม่ทำงาน 

    btnNext.addEventListener('click', () => displayImageByIndex(imgElems, currentImg + 1));
  }

  run();
})();


/****
 *
 *  ตอน addEventListener  แล้วใช้ fnc ที่มี arg -> ต้องใส่ arrow ด้วย -> ถ้าไม่ใส่ arrow fnc จะไม่ทำงาน
 *  btnPrevious.addEventListener('click',()=> displayImageByIndex(imgElems, currentImg - 1));
 *
 *  imgElem.scrollIntoView({option})
      ไม่ใส่ option  => ภาพตัด
      option ใส่ในลักษณะ destructuring

 *behavior:   transition animation.
      auto ภาพตัด  -> default
      smooth เลื่อนภาพ ทำให้ดูนุ่มนวลขึ้น
 block: vertical alignment.    ลองใช้แล้ว ไม่เห็นความต่าง
 inline : horizontal alignment.   ลองใช้แล้ว ไม่เห็นความต่าง
      start
      center
      end
      nearest -> default

 */
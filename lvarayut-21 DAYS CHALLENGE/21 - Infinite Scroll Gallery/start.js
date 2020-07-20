(() => {
  // เริ่มเขียนโค้ด



  // unsplash key
  const apiKey = 'HwYDS-O_Fa956xIiypObKuKaHqnGf4sXZxr0E4x9MIM';
  let page = 1;

  function showLoader(){
    const loaderElem = document.querySelector('.loader');
    loaderElem.classList.add('visible');
  }

  function hideLoader(){
    const loaderElem = document.querySelector('.loader');
    loaderElem.classList.remove('visible');
  }


  async function displayImage() {
    showLoader();
    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`);
    // console.log(result);  // class result ยังไม่ใช่ data
    const images = await result.json();
    // console.log(images);

    const galleryElem = document.querySelector('.gallery');
    images.forEach(image => {
      const imgElem = document.createElement('img');
      imgElem.src = image.urls.small;
      // console.log(imgElem);

      galleryElem.appendChild(imgElem);
      
    });
    hideLoader();

    page +=1;
  }

  function onScroll(){
    // console.log(     document.documentElement);
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
    console.log(scrollTop,clientHeight,scrollHeight);

    if(scrollTop + clientHeight >= scrollHeight - 10 ){
      displayImage();
    }
  }

  function run() {
    displayImage();

    document.addEventListener('scroll',onScroll);
  }

  run();

})();


/**
 * https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
 * 
 * api status 200 คือ success
 * 
 * document.documentElement; ถ้า log ออกมาจะเป็น tag ต่างๆเลย แต่ ถ้า destructuring จะได้ ตัวแปรต่างๆ เช่น
 * scrollTop => ตำแหน่ง ขอบขน ของหน้าจอ จาก doc
 * clientHeight => ความสูงของหน้าจอ   คงที่เสมอ ตาม หน้าจอ
 * scrollHeight => ความสูงทั้งหมดของ doc
 *  ดั้งนั้น ถ้า เลื่อน มาล่างสุด scrollTop + clientHeight = scrollHeight
 
 */

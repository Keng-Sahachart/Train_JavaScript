(() => {
  // เริ่มเขียนโค้ด



  /***
   * 
   * มี text เป็น list เอาไว้ค้นหา
   * 
   * ค้นหาจากการพิมพ์ แล้ว สร้างเป็น elem ul ในการแสดงผล
   * 
   * onclick
   * 
   * claerResult  ul
   */

  const textList = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];

  const searchElem = document.querySelector('.search');


  onInput = (event) => {
    // console.log(event.target.value);
    const inputText = event.target.value.toLowerCase();// 
    // console.log(inputText);

    const textFiltered = textList.filter(text => text.toLowerCase().startsWith(inputText))  // ค้นหา
    console.log(textFiltered);

    const ulElem = document.createElement('ul');  // สร้าง elem ใหม่ขึ้นมา
    ulElem.classList.add('results');
    
    textFiltered.forEach(text => {
      const liElem = document.createElement('li');
      liElem.innerText = text;
      liElem.onclick = li_onclick;
      ulElem.appendChild(liElem);
    });

    console.log(ulElem);
     claerResult_ui();
    document.body.appendChild(ulElem);   // ต้อง กำหนด ไปที่ body ด้วย
  }

  /**
   * เมื่อ คลิก li item
   */
  li_onclick = (event)=>{   
    console.log(event);
    searchElem.value =  event.target.innerText;
    claerResult_ui();
  }

  claerResult_ui =()=>{
    const ulResultElem = document.querySelector('.results');
    if(ulResultElem)  // ต้องตรวจสอบก่อน ไม่งั้น จะ error ไม่ทำงาน removeChild
    document.body.removeChild(ulResultElem);
  }

  Doc_onClick = () =>{
    claerResult_ui();
  }


  run = () => {
    searchElem.addEventListener('input', onInput) ; 

    document.addEventListener('click',Doc_onClick) ; // ถ้า ไม่มีคำสั่ง อะไรมาก ก็สามารถใส่เป็น claerResult_ui ได้เลย ไม่ตอ้ง สร้าง fnc ใหม่
  }

  run();


})();


/**
 * 
 * ตัวอย่าง สร้าง elem ul ขึ้นมาทุกครั้งที่พิมพ์ เลย
 * 
 */
(() => {
  // เริ่มเขียนโค้ด



  /***
   * 
   * validateForm
   * -validateLength 
   * -validateEmail  -> using regula expression
   * -resetState  -> all times in submit     
   * 
   * displayError -> for validate by parent query
   * displaySuccess -> do not form action . delete all elem ,add tag p
   */

  /**
   * 
   * @param {event} event 
   */
  function validateForm(event) {
    event.preventDefault();

    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');


    resetState(emailElem);
    resetState(passwordElem);

    // console.log(emailElem);
    // console.log(passwordElem);

    validateLength(emailElem, 6, 30);
    validateLength(passwordElem, 6, 10);
    validateEmail(emailElem);


    // const formElem = event.target;
    // ถ้าไม่พบ invalid
    const isValidForm = !form.classList.contains('invalid');
    if (isValidForm) {
      console.log(isValidForm);
      displaySuccess();
    }

  }

  /**
   * @param {HTMLInputElement} inputElem 
   * @param {Number} min 
   * @param {Number} max 
   */
  function validateLength(inputElem, min, max) {
    const elemName = inputElem.getAttribute('name');
    // console.log(elemName);

    const val = inputElem.value;
    const valLen = val.length;
    if (!(valLen >= min && valLen <= max)) {
      displayError(inputElem, `${elemName} length must between ${min} and ${max} `);
    }

  }

  /**
   * @param {HTMLInputElement} inputElem 
   */
  function validateEmail(inputElem) {
    const val = inputElem.value;
    const elemName = inputElem.getAttribute('name');
    // console.log(val);

    const emailPatern = /\S+@\S+\.\S+/;
    if (!emailPatern.test(val)) { // patern เป็นตัวทำ test
      displayError(inputElem, `</br>${elemName} must be valid`);
    }

  }

  /**
   * @param {HTMLInputElement} inputElem 
   */
  function resetState(inputElem) {
    const smallElem = inputElem.parentElement.querySelector('small');
    smallElem.innerHTML = '';

    inputElem.classList.remove('invalid');

    form.classList.remove('invalid');

  }

  /**
   * @param {HTMLInputElement} inputElem 
   */
  function displayError(inputElem, text) {
    const smallElem = inputElem.parentElement.querySelector('small');
    smallElem.innerHTML = text;

    inputElem.classList.add('invalid');
    form.classList.add('invalid');  // form ไม่ได้ประกาศ แต่ก็ เรียกใช้งานได้
  }

  function displaySuccess() {
    document.body.innerHTML = '';
    const pElem = document.createElement('p');
    pElem.innerHTML = 'Login Successful';
    pElem.classList.add('success');
    document.body.appendChild(pElem);
  }

  run = () => {


    const formElem = document.getElementById('form');
    formElem.addEventListener('submit', validateForm);

  }

  run();


})();


/** 
 * form ไม่ได้ประกาศ แต่ก็ใช้งานได้ ?
 *
 *workshop นี้ ปิดการ ทำส่งข้อมูลไปที่อื่น ยังไม่มีการ เช็คข้อมูล
 *
 * smallElem ไม่ได้ classList.add('invalid'); แต่ addclass ที่  form
 * 
 * 
 */
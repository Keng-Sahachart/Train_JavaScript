(() => {
  // 

  log2 = (text) => {
    const divDisplayElem = document.querySelector('#Display');
    divDisplayElem.innerHTML += `${text}</br>`;
  }



  // 1. NaN
  /* 
   * 
   * 
   */

  if (NaN === NaN) {
    log2('NaN === NaN  is true');
  }else{
    log2('NaN === NaN  is false');
  }

  if (Number.isNaN(NaN)) {
    log2('Number.isNaN(NaN) is true');
  }else{
    log2('Number.isNaN(NaN) is false');
  }



  // 2. Type Coercion
  // 3. Interpreter & Compiler
  // 4. Checking Object Type
})();

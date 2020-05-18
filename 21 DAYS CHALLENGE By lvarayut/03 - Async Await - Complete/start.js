(() => {
  // เริ่มเขียนโค้ด

 /* 1. How Asynchronous code works in JavaScript
 การทำงาน ต่างคนต่างทำงาน ไม่รอกัน 
 */

  function simulateAsyncAPI(text, timeout) {
    setTimeout(() => {
      console.log(text);
      document.getElementById("log").innerHTML += "by Normal Async : " + text + " in " + timeout + " ms</br>";  //แทน console.log ไม่แสดงผล
      beep();
    }
      , timeout);
  }

  beep();
  console.log("@start simulateAsyncAPI");
  simulateAsyncAPI('D',2000);
  simulateAsyncAPI('A',1000);
  simulateAsyncAPI('B',500);
  simulateAsyncAPI('C',100);
  simulateAsyncAPI('Z',0);

  /******************************************************************** */
 /* 2. Callback */
  function simulateAsyncAPI_callBack(text, timeout, callBack) {
    setTimeout(() => {
      console.log("by Call Back : " + text);
      document.getElementById("log").innerHTML += "by callBack : " + text + " in " + timeout + " ms</br>"; //แทน console.log ไม่แสดงผล
      if (callBack) {  //ถ้ามี จึง run ป้องกัน error
        callBack();
      }
      beep();
    }, timeout);
  }

  beep();
  console.log("@start simulateAsyncAPI_callBack");
  simulateAsyncAPI_callBack("@start simulateAsyncAPI_callBack",0)
  //Call back hell 
  simulateAsyncAPI_callBack("One",1000, ()=>{
    simulateAsyncAPI_callBack("Two",500,()=>{
      simulateAsyncAPI_callBack("Three",100); // สุดท้าย ไม่ต้อง parse ฟังก์ชั่น่เข้าไป เพราะป้องกันไว้แล้ว
    })
  } );
  simulateAsyncAPI_callBack("Four",0)

  /**
   *  call back hell => ถ้า มี statement มากๆ และ ต้องเรียก *ซ้อนกัน* หลายๆชั้น จะดูยากมาก
   *  และ เวลา จะ handle error ต้องทำที่ call back แต่ละตัว
   */

  // 3. Promise
  /* แก้ปัญหา call back hell ที่ต้องใช้คำสั่ง ซ้อนๆๆๆๆๆๆๆกัน ทำให้ดูยาก
  หัวใจสำคัญคือ object Promise  และการ เรียก ฟังก์ชั่น เข้าไปใน then และ return ออกมา เป็น resolve ด้วย
  */
  function simulateAsyncAPI_Promise(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === '4') return reject("Error : 4 got rejected");  // case study ถ้า มี error ใน function
        console.log("by Call Back : " + text);
        document.getElementById("log").innerHTML += "by Promise : " + text + " in " + timeout + " ms</br>"; //แทน console.log ไม่แสดงผล
        beep();
        resolve();
      }, timeout);
    });
  }

  simulateAsyncAPI_Promise("1", 1000) // ; ไม่ต้อง มี semi colon เพราะ return ได้มาเป็น Object Promise  
    .then(() => {
      return simulateAsyncAPI_Promise("2", 500);  // สำคัญ ต้องมี ฟังก์ชชั่น ป้อนเข้าไป และต้องมี return
    })
    .then(() => {
      return simulateAsyncAPI_Promise("3", 100);
    })
    .then(() => {
      return simulateAsyncAPI_Promise("4", 50); // กำหนดให้ reject ตรงนี้
    })
    .then(() => {
      return simulateAsyncAPI_Promise("5", 10);
    })
    .then(() => {
      return simulateAsyncAPI_Promise("6", 5);
    })
    .then( //=>**** แบบนี้ผิด  ไม่มี function ป้อนเข้าไปใน then จึงไม่มี return  =>  ส่งผลให้ Promise .then ไม่ทำงาน ยังเป็น Async อยู่  /  แต่คำสั่งยังใช้งานได้
      simulateAsyncAPI_Promise("*7*", 1500)  
    )
    .catch((error)=>{  // เอาไว้ ลำดับสุดท้าย ก็ได้ เพราะจะส่ง reject ออกต่อๆกันมา
      document.getElementById("log").innerHTML += "by Promise : " + error + "</br>"; //แทน console.log ไม่แสดงผล
    })


  // 4. Async/Await
  /* สร้างขึ้นมา ใช้งาน ให้ง่ายขึ้น สามารถ ใช้งานร่วมกับ promise ได้
  */

  async function run() {
    try {
      await simulateAsyncAPI_Promise("1", 1000);
      await simulateAsyncAPI_Promise("2", 500);
      await simulateAsyncAPI_Promise("3", 200);
      await simulateAsyncAPI_Promise("4", 100);  // กำหนดให้มี error ออกมา ต้องมี try //หลังจาก นี้ await จะไม่ทำงาน แต่ จะ throw error ที่กำหนดไว้ออกมา 
      await simulateAsyncAPI_Promise("5", 50);
      await simulateAsyncAPI_Promise("6", 10);
    } catch (error) {  
      // เอาค่า ที่ throw ออกมาแสดง
      console.error(error);
      document.getElementById("log").innerHTML += "by Promise+await : " + error + "</br>"; //แทน console.log ไม่แสดงผล
    }
  }

  run();



  /***********************************************************************************************************************/
  function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
  }


})();


/*
console.log ไม่แสดงผล ใน setTimeout
100 ขึ้น ไม่แสดง log เลย แต่ถ้าเป็น beep ออกอยู่








*/
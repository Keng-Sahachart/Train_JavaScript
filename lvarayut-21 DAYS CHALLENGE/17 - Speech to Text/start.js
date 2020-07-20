(() => {
  // เริ่มเขียนโค้ด


  /**
   * ตรวจสอบว่า browser รองรับ API ของ Speech Recognition หรือไม่
   * เรียกใช้ recognition จาก ระบบ browser ซึ่ง มี 2 อย่าง ระบบอาจจะมีไม่อันใดก็อันหนึ่ง
   *
   * กำหนดภาษา ให้ recognition
   * 
   * 
   */



  //  const   // ไม่ใช่ตัวแปร ไม่ตอ้งประกาศ  assign ให้ window.SpeechRecognition เลย
  window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; // เลือกอันใดอันหนึ่งให้ browser ใช้  ไม่ใช้ การทำ condition
  const recognition = new window.SpeechRecognition;
  const p_text = document.querySelector('.text');


  btnRecord_onClick = (event) => {
    console.log(event);
    /** @type {HTMLButtonElement} */
    const btnRecord = event.target;
    console.log(btnRecord);

    const isRecording = btnRecord.classList.contains('record');
    if (isRecording) {
      btnRecord.classList.remove('record');
      btnRecord.classList.add('pause');

      recognition.start();
      p_text.innerText = '';
    } else {
      btnRecord.classList.remove('pause');
      btnRecord.classList.add('record');

      recognition.stop();   // มันจะหยุดเอง ไม่ต้อง สั่งหยุดก็ได้
    }
  }

  speechRecognition_onresult = (event) => {
    console.log(event);
    const { transcript } = event.results[0][0];
    console.log(transcript);

    if(transcript =='เริ่มต้นบันทึกใหม่') clearP();

    p_text.innerHTML  +=  transcript  + '</br>';
    
  }

  clearP=()=>{
    p_text.innerText = '';
  }

  speechRecognition_onEnd = (event) => {
    console.log(event);
    recognition.start();   //  สั่งให้เริ่มใหม่
  }

  run = () => {
    recognition.lang = 'th-TH';
    const btnRecord = document.querySelector('.control');
    btnRecord.addEventListener('click', btnRecord_onClick)

    recognition.addEventListener('result', speechRecognition_onresult)  // ค่าที่จะได้รับ
    recognition.addEventListener('end', speechRecognition_onEnd)  // หยุดทำงาน
  }


  run();
})();


/***
 * SpeechRecognition มีให้เลือก 2 อย่าง คือ window.SpeechRecognition || webkitSpeechRecognition
 * 
 * ต้องประกาศ เป็นตัวแปร จาก window.SpeechRecognition เพื่อเรียกใช้งาน
 * 
 * Recognition มันจะหยุดเอง หลังจาก พูดจบ ซักครู่
 * อาจจะต้อง สั่งให้เริ่ม start ใหม่ เรื่อยๆ
 * 
 * จากบรรทัดนี้ 
 * window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
 * ทำให้รู้ว่า สามารถ assign ค่าให้ตัวแปรได้ ด้วยวิธี ใช้ condition รวมด้วย แต่ จะไม่ได้ boolean ออกมา
 */
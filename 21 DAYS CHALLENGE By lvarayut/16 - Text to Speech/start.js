(() => {
  // เริ่มเขียนโค้ด

  /**
   * 
   * 
   * ใช้ class SpeechSynthesisUtterance(); ในการ config ภาษาพูด แล้ว assing เข้าไปให้  SpeechSynthesis
   * ใช้ ตัวแปร SpeechSynthesis มีอยู่แล้ว ใน browser ไม่ต้องประกาศใหม่ ใส่ event ได้เลย
   * 
   * class SpeechSynthesisUtterance ใช้เป็น ตัวแปร เก็บ text ที่ใช้อ่าน
   * 
   *  ทำ event speak รูปทุกรูป
   * 
   */


  const message = new SpeechSynthesisUtterance();

  onVoicesChanged = () => {
    const voiceLangs = speechSynthesis.getVoices();
    console.log(voiceLangs);


    const voiceTh = voiceLangs.find(voice => voice.lang === 'th-TH');
    console.log(voiceTh);

    var u = new SpeechSynthesisUtterance();
    u.text = 'สวัสดีครับ วันนี้ผมมีเรื่องจะมาเล่าให้ท่านฟังครับ';
    u.lang = 'th-TH';
    u.rate = 1.2;
    speechSynthesis.speak(u);

  }


  run = () => {
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)


  }

  run();


})();

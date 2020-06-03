(() => {
  // เริ่มเขียนโค้ด

  /** สรุป ขั้นตอนทำงาน
   * 
   * ใช้ class SpeechSynthesisUtterance(); ในการ config ภาษาพูด แล้ว assing เข้าไปให้  SpeechSynthesis
   * ใช้ ตัวแปร SpeechSynthesis มีอยู่แล้ว ใน browser ไม่ต้องประกาศใหม่ ใส่ event ได้เลย
   * 
   * class SpeechSynthesisUtterance ใช้เป็น ตัวแปร เก็บ text ที่ใช้อ่าน
   * 
   *  ทำ event speak ให้รูปทุกรูป
   * 
   * 
   */

  const message = new SpeechSynthesisUtterance();

  onVoicesChanged = () => {
    const voiceLangs = speechSynthesis.getVoices();
    console.log(voiceLangs);

    const voiceTh = voiceLangs.find(voice => voice.lang === 'th-TH');
    console.log(voiceTh);

    speechSynthesis.lang = voiceTh;
  }

  TestVoice = (text) => {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = 'th-TH';
    u.rate = 0.5;
    speechSynthesis.speak(u);
  }

  onImgClick = (event) => {
    console.log(event);
    const {target} = event;
    console.log(target);

    const altImg = target.getAttribute('alt')
    console.log(altImg);

    message.text = altImg;

    speechSynthesis.speak(message);
  }

  run = () => {
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
    // TestVoice('เจนค่ะ เจนค่ะ มากับนุ่น แล้วก็มากับโบว์');
    TestVoice('ต้นกล้ากินขนมไหมครับ');

    imgElems = Array.from(document.querySelectorAll('img'));
    imgElems.forEach(imgElem => {
      imgElem.addEventListener('click',onImgClick)
    });
  }

  run();


})();




/***
 * 63/06/03
 * 
 * ตอนทำ workshop นี้ มีปัญหา ว่า ไม่มี voice th-TH อยู่ใน ระบบ
 * วิธีแก้คือ ต้องลง voice th-TH ใน Region ก่อน
 * https://support.office.com/en-us/article/how-to-download-text-to-speech-languages-for-windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3?fbclid=IwAR3qW9KkIpSvkjxvceadQ3B_a3QgMCOWtn_vU2nzeK_A2Gnf59aa7M8Zk98
 
 
 * หลังจากนั้น run shell script เพื่อ add registry ให้แอปอื่น เอาไปใช้ได้
 * https://stackoverflow.com/questions/47379725/how-do-i-add-a-voice-language-to-speechsynthesis?fbclid=IwAR1wcwbSUM_LlDOzyTIXjPjidmiOr7ta4e4QjUFpm43PClKQEGxrlQdWLzA
      $sourcePath = 'HKLM:\software\Microsoft\Speech_OneCore\Voices\Tokens' #Where the OneCore voices live
      $destinationPath = 'HKLM:\SOFTWARE\Microsoft\Speech\Voices\Tokens' #For 64-bit apps
      $destinationPath2 = 'HKLM:\SOFTWARE\WOW6432Node\Microsoft\SPEECH\Voices\Tokens' #For 32-bit apps
      cd $destinationPath
      $listVoices = Get-ChildItem $sourcePath
      foreach($voice in $listVoices)
      {
      $source = $voice.PSPath #Get the path of this voices key
      copy -Path $source -Destination $destinationPath -Recurse
      copy -Path $source -Destination $destinationPath2 -Recurse
      }
 *
 *SpeechSynthesisUtterance ต้องประกาศตัวแปร เอาไว้ เซ็ตค่า เสียง

 speechSynthesis ไม่ต้องประกาศ เพราะอยู่ใน browser อยู่แล้ว แล้วไป ใช้ SpeechSynthesisUtterance อีกที

 ตรง function onImgClick  
 เราไปใช้วิธี destructuring event ออกมา เอา target แล้วค่อย  getAttribute   มันอ้อมไป 
 ของคุณ บอย ใช้ แค่ event.target.getAttribute('alt')    บรรทัดเดียวจบ
 */
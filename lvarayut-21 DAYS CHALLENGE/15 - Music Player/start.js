(() => {
  // เริ่มเขียนโค้ด

  /**
   * กด play เปลี่ยน Icon play - puase
   * update time ตอน เล่น
   * update เวลา starttime   end time
   * update progressbar
   * 
   * progressbar update playtime ได้
   * 
   * ended ให้ reset เป็น เริ่มต้น
   * 
   * 
   * 
   */

  /** @type {HTMLSpanElement} */
  const lbl_startTimeElem = document.querySelector('.start-time');
  /** @type {HTMLSpanElement} */
  const lbl_endTimeElem = document.querySelector('.end-time');
  /** @type {HTMLProgressElement}*/
  const pgrs_rangeElem = document.querySelector('.progress-bar');

    /** @type {HTMLAudioElement}*/
  const audioElem = document.querySelector('audio');

  /** @type {HTMLButtonElement} */
  const btn_playElem = document.querySelector('.play');


  btn_play_onClick = () => {
    if (audioElem.paused) {
      audioElem.play();
      btn_playElem.className = 'pause';
    } else {
      audioElem.pause();
      btn_playElem.className = 'play';
    }
  }

  DurationFormat=(time)=>{
    const mm = Math.floor( time / 60);
    const ss = Math.floor(time % 60).toString().padStart(2,"0");
    return `${mm}:${ss}`;
  }

  
  /**
   * พบปัญหา ว่า event นี้ บางครั้ง จะไม่ run ตอน refresh page
   * 
   */
  audioElem_onLoadedData = () => {
    console.log('load');  
    lbl_endTimeElem.innerHTML = DurationFormat(audioElem.duration);
    pgrs_rangeElem.max = audioElem.duration;
  }

  audioElem_timeUpdate = () => {
    lbl_startTimeElem.innerHTML = DurationFormat(audioElem.currentTime);
    pgrs_rangeElem.value = audioElem.currentTime;
  }

  audioElem_ended = () =>{
    btn_playElem.className = 'play';
    pgrs_rangeElem.value = 0;
    audioElem.currentTime = 0 ;
  }

  inputSeekTime = () =>{
    console.log(pgrs_rangeElem.value);
    audioElem.currentTime = pgrs_rangeElem.value;
  }



  function run() {

    btn_playElem.addEventListener('click', btn_play_onClick)

    audioElem.addEventListener('loadeddata', audioElem_onLoadedData);
    audioElem.addEventListener('timeupdate',audioElem_timeUpdate);
    audioElem.addEventListener('ended',audioElem_ended);

    pgrs_rangeElem.addEventListener('input',inputSeekTime);
  }

  run();

})();


/** workshop 15
 * 
 * progress bar ใน lab นี้เป็น tag => input type="range" 
 * 
 * lead zero ในภาษาอื่น ที่เห็นบ่อยๆ ประมาณว่า padleft แต่ js ใช้ padStart => .toString().padStart(2,"0");
 * 
 * HTMLAudioElement event loadeddata มีปัญหา ตอน refresh page ทำงาน บ้าง ไม่ทำงานบ้าง
 */
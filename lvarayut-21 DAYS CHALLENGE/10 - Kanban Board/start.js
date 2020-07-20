(() => {
  // เริ่มเขียนโค้ด
  
  
  
  let draggingElem;//  ใช้ระบุตัวที่กำลังถูกลาก

  function onDragStart(Event) {
    draggingElem = this;
    console.log('Drag');
    console.log(draggingElem);
    console.log(this);

  }

  function onDrop() {
    console.log('drop');
    this.append(draggingElem);   //append เข้าไปเลย ไม่ต้อง remove ออกจาก parent อันเดิม

  }

  /**
   * 
   * @param {event} event 
   */
  function onDragEnter(event) {
    event.preventDefault();  // cancel behavior
  }
  function onDragOver() {
    event.preventDefault();  // cancel behavior
  }

  function run() {
    // querySelector จะได้ เป็น nodeList ต้องแปลงเป็น Array ก่อน
    /**
     * @type {HTMLDivElement} taskElems
     * @type {HTMLDivElement} dropZoneElems
     * 
     */
    const taskElems = Array.from(document.querySelectorAll(".task"));
    const dropZoneElems = Array.from(document.querySelectorAll(".drop-zone"));

    taskElems.forEach((taskElem) => {

      taskElem.addEventListener('dragstart', onDragStart);

    });

    dropZoneElems.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragenter', onDragEnter);  //preventDefault
      dropZoneElem.addEventListener('dragover', onDragOver); //preventDefault
    });

  }

  run();
})();



/**
 *  Event ใน
 * In HTML:มีคำว่า on  ==>  <element ondragstart="myScript">
 * In JavaScript: มีคำว่า on   ==>   object.ondragstart = function(){myScript};
 * In JavaScript, using the addEventListener()  : *** ไม่มีคำว่า on
 *   ==> object.addEventListener("dragstart", myScript);
 *
 *
 * event drop  กับ dragEnter กับ DragOver จะทับซ้อนกันอยู่
 * ถ้าอยากใช้  drop ต้อง event.preventDefault() เพื่อปิด behavior ออกไปก่อน
 *
 * สังเกตุว่า event ใน HTML จะใช้ตัวพิมพ์เล็กหมดเลย ไม่เป็น camel case
 * dropZoneElem.addEventListener('dragover', onDragOver);
 *
 */
(() => {
  // เริ่มเขียนโค้ด
  /** @type {CanvasRenderingContext2D} */
  const canvas = document.getElementById("painting");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  let previusPoint = { x: 0, y: 0 };

  function onMouseMove({ pageX, pageY }) {
    const currentPoint = { x: pageX, y: pageY };

    context.beginPath();

    // หาความจาง
    const distance = getDistance(previusPoint, currentPoint);
    const opacity = Math.min(0.5, 1 / distance);

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = Math.random() / 1 * 40;

    
    // context.strokeStyle = `rgba(222,10,100,${opacity})`;
    context.strokeStyle = `rgba(238,130,238,${opacity})`;

    // const opacity = Math.min(0.5, 1 / distance);
    // context.strokeStyle = `rgba(222, 10, 109, ${opacity})`;

    context.moveTo(previusPoint.x, previusPoint.y);
    context.lineTo(currentPoint.x, currentPoint.y);
    context.stroke();
    context.closePath();

    previusPoint = currentPoint;
  }

  function onMouseEnter({ pageX, pageY }) {  // mouseenter จะทำงานพร้อมกันกับ mousemove point จะถูกกำหนดค่าพร้อมๆกันเลย
    previusPoint = { pageX, pageY };
    // previusPoint.x = pageX;
    // previusPoint.y = pageY;
  }

  /*ลากเร็วๆให้สีจาง  ลากช้าๆสีเข้ม ต้องดูจากระยะทาง*/
  function getDistance(previusPoint, currentPoint) {
    return Math.sqrt(((previusPoint.x - currentPoint.x) ** 2) + ((previusPoint.y - currentPoint.y) ** 2));
  }

  // function getDistance2(previousPoint, currentPoint) {
  //   // Distance formular: https://www.wikihow.com/Find-the-Distance-Between-Two-Points
  //   return Math.sqrt(
  //     (previousPoint.x - currentPoint.x) ** 2 +
  //       (previousPoint.y - currentPoint.y) ** 2
  //   );
  // }



  /******************************************************************************* */
  function run() {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseenter', onMouseEnter);



  }
  run();

})();

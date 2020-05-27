(() => {
  // เริ่มเขียนโค้ด

  /**
   * Step
   * 
   * สมัคร API
   * Key 9283425b-a890-47f0-bf72-224f16b2749a
   * AirVisual API
   * https://api-docs.airvisual.com/?version=latest
   * 
   * หา
   * GET List supported countries   ==> เอา  Thailand
   * http://api.airvisual.com/v2/countries?key=9283425b-a890-47f0-bf72-224f16b2749a
   * 
   * GET List supported states in a country   ==> เอา  Samut Prakan
   * http://api.airvisual.com/v2/states?country=Thailand&key=9283425b-a890-47f0-bf72-224f16b2749a
   * 
   * GET List supported cities in a state  ==> เอา Bang Phli
   * api.airvisual.com/v2/cities?state=Samut Prakan&country=Thailand&key=9283425b-a890-47f0-bf72-224f16b2749a
   * 
   * 
   * ***************************************************************************
   * getAirQuality
   * key fetch ค่าออกมา ใช้ async await
   * fetch มา ต้องเแปลงเป็น json
   * ใช้ destructuring ช่วย ดึงค่า ลดการเขียน coding
   * aqi, tp , hu , ws
   * 
   * displayAirQuality
   * เอา elem แต่ละตัว แสดงผล 
   * 
   * setAirQualityColor
   * css variable
   * 
   */

  const KEY = '9283425b-a890-47f0-bf72-224f16b2749a';

  //  async function getAirQuality ({city,state,country}) {
  getAirQuality = async ({ city, state, country }) => {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
    );

    //  https://api.airvisual.com/v2/city?city=Bang Phli&state=Samut Prakan&country=Thailand&key=9283425b-a890-47f0-bf72-224f16b2749a
    console.log("response =>");
    console.log(response);

    const { data: { current } } = await response.json();   //  data/current   destructuring 2 ชั้น
    //console.log("data => "); console.log(data);  // ไม่มี
    console.log("current => "); console.log(current);

    const { pollution, weather } = current; // descructure 
    console.log(pollution)
    console.log(weather)

    return {
      aqi: pollution.aqius,  //  pm2.5
      humdity: weather.hu, // humdity
      temperatur: weather.tp, // Temperatur
      wind: weather.ws // wind
    }

  }

  displayAirQuality = ({ city, state, country, aqi, humdity, temperatur, wind }) => {
    // const locationElem = document.querySelector('.location');
    const cityElem = document.querySelector('.location > .city');
    const stateCountryElem = document.querySelector('.location > .state-country');
    const aqiElem = document.querySelector('.card > .aqi > h1');
    const temperatureElem = document.querySelector('.info > .temperature');
    const humidityElem = document.querySelector('.info > .humidity');
    const windElem = document.querySelector('.info > .wind');

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state} - ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temp: ${temperatur} °C`;
    humidityElem.innerText = `Humdity: ${humdity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;

  }

  setAirQualityColor = (aqi) => {
    const root = document.documentElement;
    if (aqi <= 50) {
      root.style.setProperty('--current-aqi-color','var(--good-aqi-color)');
      console.log('1');
      
    } else if (aqi <= 100) {
      root.style.setProperty('--current-aqi-color','var(--medium-aqi-color)');
      console.log('2');
    } else {
      root.style.setProperty('--current-aqi-color','var(--bad-aqi-color)');
      console.log('3');
    }
    console.log('4');
  }

  run = async () => {
    const city = 'Bang Phli'
    const state = 'Samut Prakan'
    const country = 'Thailand'

    const { aqi, humdity, temperatur, wind } = await getAirQuality({ city, state, country });  // ข้างใน เป็น await ต้อง เปลี่ยน parent function ให้เป็น async function ด้วย
    console.log({ aqi, humdity, temperatur, wind });
    displayAirQuality({ city, state, country, aqi, humdity, temperatur, wind });

    setAirQualityColor(aqi);
  }

  run();
})();


/**
 * 
 * 
 * js กำหนด css variable 
 * ตอนเรียก property เรียกเป็นชื่อตัวแปร ปกติ --current-aqi-color
 * แต่ตอน assign ค่าเข้าไป ต้อง เป็ฯ sysntex ของ css variable ด้วด้วย
 * 
 * ducstructure 2 ชั้น  ตัวแปร ชั้นที่ 1 (data) จะไม่เกิดขึ้น
 * const { data: { current } } = await response.json();
 * 
 * ตอน return พร้อมกับ  destructure ออกมา พร้อมกัน ต้องกำหนด key:data ด้วย
 * 
 * function แม่ ที่ภายใน เรียก function ด้วย await  function นั้น จะต้อง เปลี่ยน เป็น async ด้วยเสมอ
 * 

 */
// TEmplate Literal
// คล้ายๆ กับ String.format ใน Dot Net

// แบบเดิม
const name = "Sahachart"
const Last = "Panlawan"
const city = "Bangkok"

const all = "name=" + name +"/Last=" + Last+"/City=" + city
console.log(all);

const all2 = "name=" + name +"/Last=" + "\n"+ Last+"/City=" + "\t" + city
console.log(all2);

const all2_1 = "name=" + name +"\
\nLast=" + Last+"\
\nCity=" + "\t" + city
console.log(all2_1);

// แบบใหม่
// ต้องใช้  `` แทน Single Quote
const all3 = `name=${name} , Last=${Last} , City=${city}`
console.log(all3);

const all4 = `name=${name} \
                , Last=${Last} \
                , City=${city}`
console.log(all4);

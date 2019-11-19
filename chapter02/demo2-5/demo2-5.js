var myModule = require('./test');
console.log(myModule);
console.log('length:' + myModule.length);
// exports与module.exports的区别是exports是module.exports的一个引用，require()返回的实际是module.exports对象
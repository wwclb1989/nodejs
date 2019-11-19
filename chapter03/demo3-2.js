/**
 * 异步代码
 */
console.log('起床');
console.log('背单词');
function eatBreakfast() {
    console.log('开始吃早餐了');
    // setTimeout执行的时候，不会阻塞后面代码的继续执行
    setTimeout(function () {
        console.log('早餐吃完了');
    }, 0);
}
eatBreakfast();
console.log('去上学');

/**
 * 由于setTimeout()是一个异步函数，不会阻塞后续代码的继续执行，所以这段代码相当于小明边去学校边吃早餐
 */
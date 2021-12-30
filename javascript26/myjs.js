function getSum(num1,num2){
    var sum = 0;
    for(var i = num1; i <= num2; i++){
        sum = sum + i;
    }
    console.log(sum);
}
getSum(1,100);
getSum(10,50);
getSum(1,1000);

function sayHi(){
    console.log('hi~~^');
}
//函数不调用，自己不执行
sayHi();

function cook(aru){
    console.log(aru);
}
cook('大肘子');

function sum(x,y){
    var z = x*y;
    return z;
}
document.write(sum(3,2));

function getResult(){
    return 666;
}
getResult();
document.write(getResult());

function cooking(aru){
    return aru;
}
var a = cooking('卵ご飯');
document.write(a);

function sum1(x,y){
    var z = x*y;
    return z;
}
document.write(sum1(3,5));

function fn(){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[2]);
    for(i=0; i < arguments.length; i++){
        console.log(arguments[i]);
    }


}
fn(1,2,3,4,5,6);









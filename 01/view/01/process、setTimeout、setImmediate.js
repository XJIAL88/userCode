//node 中的process
process.nextTick(() => {
    //当前队列最后执行
    console.log(1);
});
console.log(2);
console.log(3);
console.log(4);

setTimeout(() => {
    //=>等待队列执行
    console.log(11);
});

setImmediate(() => {
    //=>等待队列先执行
    console.log(22);
});

//=>输出 2、3、4、1、22、11

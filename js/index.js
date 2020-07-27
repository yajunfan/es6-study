// for(var i=0;i<6;i++){
//     console.log("内部i",i);
// }
// console.log("外部i",i);

// for(let j=0;j<3;j++){
//     console.log("内部j",j);
// }
// console.log("外部j",j);

// fn();
// function fn(){
//     var fni=0;
//     console.log("函数内部",fni)
// }
// console.log("函数外部部",fni)

// console.log(a)
// var a = 2;
// var a = 3;
// console.log(a)

// // console.log(b)
// let b= 2;
// // let b = 3;
// console.log(b)


/////////////////////////////////////////以上是let var const的部分，////////////////////////////////////////////

// let [a,b,c,d,[e,f]]=[1,2,3,4,[5,6]];
// let ary = [a,b,c,d,[e,f]];
// ary[1] = 6;
// console.log(a,e); //1,5
// console.log(ary) // [1,2,3,4,[5,6]]

// let {foo,ba}={"one","two"}
    // fn()
    // async function fn() {
    //     await b()
    //     console.log(111); //5 
    //     setTimeout(async () => {
    //         console.log('aaaa');//6
    //     }, 100)
       
    // }
 
    // function b() {
    //     console.log('b1');   //   1
    //     return new Promise(resolve => {
    //         setTimeout(function () {
    //             console.log('bbbbb'); // 4
    //             resolve();
    //         }, 2000)
    //         c();
    //     })
    // }
 
    // function c() {
    //     console.log('c1'); // 2
    //     return new Promise(resolve => setTimeout(function () {
    //         console.log('cccc'); //3
    //     }, 1000))     
    // }
    //这个例子说明的是
    //使用async和await的话，始终会等await的函数执行完才会执行后边的代码
    //所以执行的逻辑是
    //1.fn执行的时候，先进入b函数，由于使用了await，所以后面的console和定时器会在此函数执行完之后才会执行
    //进入了b函数中，首先打印了b1，接着进入=》return函数中，先执行c()函数，在2秒后进入b函数中的定时器
    //进入c函数，打印 c1，经过一秒之后，打印了ccccc
    //经过2秒，打印了bbbbb
    //至此b函数执行完，回到fn中，执行console，打印111，经过100毫秒，执行打印aaaa
    //只要出现了定时器，就会放在事件队列里边，所以a函数中的定时器，就算时间设置为0，依然是最后一个打印





// let [x,y,...z]=[1,2,4,5,6,7];
// console.log(x)
// console.log(y)
// console.log(z) //当为[x,y,...z]...z的时候，打印出的是[4,5,6,7]
// console.log(z)//当直接为[x,y,z]z的时候，打印出的就是4
//这个...z必须是最后一个元素，如果是x,...y,z,会报错Rest element must be last element





// let [,,,one]=[2,3,4,5]
// console.log(one);//这里是当[one] ,打印的one就是2，当为[,2]的时候，对应的索引位置为1，打印出的值为3，对应的索引位置在后面无对应的时候，为undefined





//不完全解构--- 等号左边的模式，只匹配一部分的等号右边的数组
// let [a] = [1,2,3]; // 仍然可以打印出a为1
//let [a] =1; //报错





//Generator 函数 --- 不懂
// function* fibs() {
//     let a = 0;
//     let b = 1;
//     debugger
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }
//   let [xx]=fibs();
//   //只有两个的时候，是0,1
//   //有三个的时候，因为yield a，所以a=1
//   console.log(xx)
//   console.log(xx,yy)
//   let [first, second, third, fourth, fifth, sixth] = fibs();
  //sixth // 5
//   console.log(first, second, third, fourth, fifth, sixth)





//默认值
// let [a=1,b] = [,3];
// console.log(a,b) // 当右边为 [,3]，得到的结果为1，3  ；  当右边是[3],得到的结果是3，undefined ；  当右边为[null,3] 得到的结果是null，3




//对象的解构
// let [a,b,c] = Ary1;
// console.log(Ary1)
// let {log,sin,cos,abs} = Math;
// console.log(sin)
let {log} = console;
log("hello")

// let {foo,bar}={foo:2,bar:3};
// log(foo); //2
// log(bar);  //3
//那其实{foo,bar}是{foo:foo,bar:bar}的缩写，且缩写是：后边的，而不是前面的属性名
// let{foo:baz,bar:bar}={foo:2,bar:3};
// log(foo);//foo未定义，他只是个匹配的模式
// log(baz);//2
// log(bar);//3
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者


//嵌套结构的对象
// let obj={p:['heool',{aa:"cc"}]};
// // let {p} = obj;
// // log(p); // ['heool',{aa:"cc"}] 同理，此时的p指的是右边的值
// let {p,nn:[x,{y:c}]} = {p:['heool',{aa:"cc"}]};
// log(p); //这个p指的是左边的模式，所以回报未定义的错；
// log(x)//这边能打印出来，仅仅是因为，p的模式匹配到了,特例


//字符串模板
var data = [{"name":"anmy"},{"name":"lily"},{"name":"monica"}]
var templeteStr=
`<ul>
<% for(var i=0;i<data.length;i++;){ %>
  <li><%= data[i].name %></li>
<% } %>
</ul>
`;
console.log(templeteStr)
$(".append-dom").html(templeteStr);

let arylist= [
  {key:"aada",value:"3434"},
  {key:"23232",value:"3434"},
  {key:"545454",value:"3434"}
];
let arylist2=[
  {key:"ceshisce ",value:"3434"}
]
let arylists3 = [...arylist,...arylist2];
let arylists4 = arylist.concat(arylist2);
let  arylists6 = arylist.slice();
let arylists5 = arylists6.concat(arylist2);
console.log(arylists5)
arylist[0].key = "676878";
console.log(222,arylist)
//数组的slice和concat以及object.assign()不属于真正的深拷贝，只能对一维数组有用，超过一维，对更深层次的数组不起作用

let arrrrr = ['123','234','345'];
console.log(arrrrr.includes('123'),arrrrr.indexOf('123'))

console.log('45678'.includes('5'))
let object12={
  a: 1, b: 2, c: 3
}
console.log(Object.values(object12),Object.keys(object12))
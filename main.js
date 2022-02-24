/*#1*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
console.log('Задание 1')
console.log(numbers.filter(element => !(element % 2)) .reduceRight((sum, element) => sum + Math.sqrt(element), 0)
);
/*#2*/
let apple=1.15, orange=2.30
console.log('Задание 2')
console.log((apple+orange).toFixed(2))
/*#3*/
console.log('Задание 3')
let n = 7,s = '*'
while(s.length<=n ){
    console.log(s);
    s+='*';
}
/*#4*/
console.log('Задание 4')
for( i=1; i<=100;i++){
    if ((i % 3 == 0) && (i % 5 == 0))
        console.log('FizzBuzz');
    else if (i % 3 == 0)
        console.log('Fizz');
    else if ((i % 3 != 0) && (i % 5 == 0))
        console.log('Buzz');
    else
        console.log(i);
}
/*#5*/
console.log('Задание 5')
let min=60;hour=60;
console.log(min*hour)
/*6*/
console.log('Задание 6')
let name = prompt('Введите ваше имя:');
alert('Ваше имя:' + name);
/*7*/
console.log('Задание 7')
let num7 = 'abcde'
console.log(num7[0] + num7[2] + num7[4]);
/*8*/
console.log('Задание 8')
let obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log('Петя:'+obj['Петя'],'Коля:'+obj['Коля']);
/*9*/
console.log('Задание 9')
let arr9 = [2, 5, 3, 9];
let result = arr9[0] * arr9[1] + arr9[2] * arr9[3]
console.log(result);
/*10*/
console.log('Задание 10')
let c = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(c[1][0]);
/*11*/
console.log('Задание 11')
let minute= prompt('Задание 11.Введите число')
if (0 <= minute <= 59 ){
    if (minute>=0 && minute<=14){
        alert('В 1 четверти');
    } else if (minute>15 && minute<=30){
        alert('Во 2 четверти');
    }else if(minute>31 && minute<=45){
        alert('В 3 четверти');
    }else if(minute>46 && minute<=59){
        alert('В 4 четверти')
    }
} else{
    alert('Введите другое число.')
}
/*12*/
console.log('Задание 12')
let a12 = prompt('Задание 12.Введите число:');
if (a12<0){
    alert('Верно');
}else{
    alert('Неверно');
}
/*13*/
console.log('Задание 13')
let test = prompt('Задание 13.Введите число');
test ? console.log('Верно') : console.log('Неверно');
if (test == true){
    alert('Верно')
} else {
    alert('Неверно')
}

/*14*/
console.log('Задание 14')
let numb = prompt('Задание 14.Введите число:');
switch (numb) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Лето');
        break;
    case 4:
        console.log('Осень');
        break;
    default:
        console.log('Введите другое число');
}

/*15*/
console.log('Задание 15')
let num15 = [1, 2, 3, 4, 5];
for (let i = 0; i < num15.length; i++){
    console.log(num15[i]);
}
/*16*/
console.log('Задание 16')
let a16 = 10;
let b16 = 3;
console.log(a16%b16);
/*17*/
console.log('Задание 17')
let a17 = 2;
let st17 = a17 ** 10;
console.log(st17);
/*18*/
console.log('Задание 18')
let num18 = 379;
console.log(+(num18 ** 0.5).toFixed(0));
console.log(+(num18 ** 0.5).toFixed(1));
console.log(+(num18 ** 0.5).toFixed(2));
/*19*/
console.log('Задание 19')
let num19 = [4, -2, 5, 19, -130 , 0, 10];
let min19 = 9999;
let max19 = -9999;

for (i=0; i<num19.length; i++){
    if (num19[i]<min19){
        min19 = num19[i];
    }
    if (num19[i]>max19){
        max19 = num19[i];
    }
}
console.log(max19, ' ', min19);

/*20*/
console.log('Задание 20')
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
    console.log(getRandom(1, 100));

/*21*/
console.log('Задание 21')
let str21 = "aaa bbb ccc";

console.log(str21.substr(4, 3));
console.log(str21.substring(4, 7));
console.log(str21.slice(4, 7));

/*22*/
console.log('Задание 22')
let str22 = 'js';
str22 = str22.toUpperCase();
console.log(str22);

/*23*/
console.log('Задание 23')
let str23 = 'я учу javascript!';
console.log(str23.length);

/*24*/
console.log('Задание 24')
let str24 = 'я учу javascript!';
console.log(str24.indexOf('учу'));

/*25*/
console.log('Задание 25')
let str25 = 'Я-учу-javascript!';
let new25 = '';
for (let i = 0; i < str25.length; i++) {
  str25[i] === '-' ? new25 += '!' : new25 += str25[i];
}
console.log(new25);

/*26*/
console.log('Задание 26')
let str26 = 'я учу javascript!';
console.log(str26.split(''))

//27
console.log('Задание 27')
let arr27 = ['я', 'учу', 'javascript','!'];
console.log(arr27.join('+'));

//28
console.log('Задание 28')
let str28 = 'javascript';
let new28 = str28[0].toUpperCase() + str28.slice(1);
console.log(new28);


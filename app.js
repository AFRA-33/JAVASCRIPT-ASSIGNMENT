// CHANGING CASES
// var a = prompt ("Enter you name:")
// var a = a.slice().toUpperCase();
// document.write(a);

// var  cityToCheck = prompt ("Enter you name:");
// var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  document.write(firstChar + otherChars);

// Strings: measuring length and extracting parts
// var a = prompt("Enter your favourite mobile:")
// var b = a.length
// document.write(b)

// var a = prompt("Enter anything:")
// var b = a.slice(a.length-1)
// document.write(b)

// Strings: finding segments
// var a = prompt("Enter the country name")
// for( i=0 ; i = a.length ; i++){
//     var txt =a.slice(i, i+1);
//     (txt == "n") ;{
//         alert("n is found  " + i);
//     }
// }

// var a = prompt("Enter your username");
// for (i = 0; i <= a.length; i++) {
  
//   if (a == "!" || a=="@"||a=="#"||a=="$"||a=="%") {
//     document.write("Enter walid name");
//   } else {
//     document.write("great");
//   }
//   break;
// }

// var a = "The quick brown fox jumps over the lazy dog";
// for (i = 0; i <= a.length; i++) {
//   var text = a.slice(i, i + 3);
//   text === "the";
//   {
//     alert("the is found " + i);
//     break;
//   }
// }

// Strings: finding a character at a location


// Strings: replacing characters



// Rounding numbers
// var a = Math.round(3.45214)
// var a= Math.floor(3.45214)
// var a = Math.ceil(3.45214)
// document.write(a)

// var a = Math.round(-2.678)
// var a= Math.floor(-2.678)
// var a = Math.ceil(-2.678)
// document.write(a)

// Generating random numbers
// var dice = Math.floor(Math.random()*6+1)
// document.write(dice)

// var toss = Math.floor(Math.random()*2+1)
// if(toss == 1){
// document.write(toss + " Head")
// }else{
//     document.write(toss + " Tail")
// }

// var a = prompt("Enter number b/w 1 to 10")
// if( a<=10){
//     document.write("Congrate")
// }else {
//     document.write("plz enter 1 to 10")
// }

// Converting strings to integers and decimals
// var a = prompt("Enter your weight")
// var b = Number(a)
// document.write(typeof(b))

// var a = 30 / 45 * 100;
// var b = a.toFixed(2)
// document.write(b)

// DATA METHOD
// var a = new Date()
// document.write(a)

// var a = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
// var d = new Date();
// document.write("The current month is " + a[d.getMonth()]);

// var a = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
// var  b = new Date();
// document.write("Today is " + a[b.getDay()]);

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write("m")
// }else if(c === "Tue"){
//     document.write("t")
// }else if(c === "Wed"){
//     document.write("w")
// }else if(c === "Thr"){
//     document.write("th")
// }else if(c === "Fri"){
//     document.write("f")


// var a = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
// var  b = new Date();
// if(b === "sunday"){
//     document.write("Today is funday " + a[b.getDay()]);    
// }

// var todayDate = new Date(2015 ,11,25);
// // document.write(todayDate)
// var currentTime  = todayDate.getTime();
// var date = new Date(2015,0,1)
// var specificDateTime = new Date(date)
// var specTime = specificDateTime.getTime()
// var diff = currentTime-specTime
// document.write(diff)
// // var year = diff/(1000*60*60*24*365)
// // document.write(year)
// document.write("on reference date "+ todayDate + Math.floor(diff) + " seconds has passed beginning of 2015.")

// var currentDate = new Date(2015,11,25)
// document.write("Current date : "+ currentDate);
// var specTime = new Date (1970,1,12)
// var milisec = specTime.geTime();
// document.write(milisec)
// var date = new Date(2015,11,25)
// var specTime = date.getTime();
// document.write(specTime)
// document.write("Elapse milisec since 1 jan 1970 : " + milisec) 





//CHAP 25 TO 38
// function a(){
//     var b = new Date()
//     document.write(b)

// }a()

// function a(){
//     var b = prompt("Enter ypur first name :")
//     var c = prompt("Enter your last name :")
//     document.write("Hello "+ b + c )
// }a()

// function num(a,b){
//     var c =1+(a+b)/2
//     document.write(Math.round(c))

// }num(12,11)

// function a(){
//     var b = Math.pow(3,2)
//     document.write(b)
// }a()

// function a( num )
// {
// var i;
// var fact = 1;
// for( i = num; i >= 1; i-- )
// {
// fact = fact * i;
// }
// return fact;
// }var b = a( 8 )
// document.write(b)

// function a(startNum,endNum){
    
//     for( i = startNum; i < endNum; i++ ){
//         document.write(i + " number" + "</br>")
//     }
// }a(1,100)

// function countSheep(limit){
//     for (var i = 1; i < limit; i +=1){
//         document.write(i + " sheep" + "</br>")
//     }
// }countSheep(10);

// function a (p,b){
// var h = (p+b)*(p+b)
// document.write(h)                        fgdfg
// function c(){
//     var squre = h*h
//     document.write(squre)
// }return c;
// }a(1,1)

// function a(w,h){
//     var b= w*h
//     document.write(b)
// }a(5,4)




// program to check if the string is palindrome or not
// function checkPalindrome(string) {
//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// // take input
// const string = prompt('Enter a string: ');
// // call the function
// const value = checkPalindrome(string);
// document.write(value);

// function calcCircumference(r){
//     var a = 2*3.142*r
//     document.write(a)
// }calcCircumference(56)

// function calcArea(r){
//     var a = 3.142*r*r
//     document.write(a)
// }calcArea(56)

// // program to convert first letter of a string to uppercase
// function capitalizeFirstLetter(str) {
//     // converting first letter to uppercase
//     var capitalized = str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalized;}
// // take input
// var string = prompt('Enter a string: ');
// var result = capitalizeFirstLetter(string);
// document.write(result)

//FUNCTIONS, SWITCH STATEMENTS, WHILE... DO- WHILE LOOPS
// function a(x,y){
//     var b = Math.pow(x,y)
//     return b;
// }var c = a(3,2)
// document.write(c)


// // program to check leap year
// function checkLeapYear(year) {
//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// // take input
// const year = prompt('Enter a year:');
// checkLeapYear(year);

// function leapYear(year){
//     if((0== year % 4) && (0 !=year%100) || (0 == year % 400)){
//         document.write(year + " is a Leap year")
//     }else{
//         document.write(year + " is not a Leap year")
//     }
// }var year = prompt("Enter the year")
// leapYear(year);

// function area(a,b,c){
//     var s = (a+b+c)/2
//     document.write(s)}
// // }var s= prompt("Enter the Numbers")
// area(4,4,4)

// function mainFunction(a,b,c){
//       function average(){
//           var aver = (a+b+c)/3
//           document.write(aver)
//       }function percentage(){
//           var per = ((a+b+c)/150)*100
//           document.write(per)
//       }
// }document.write(aver + per)
// mainFunction(45,45,45)


//   var def=prompt("Enter the string to count two vowels in succetion : ");
// var answer = deleteVowelsS(def);
// alert("The vowels in succetion are " + answer+" times");
// function deleteVowelsS(str)
// {
//     var k=0;
//     var spl=str.match(/.{0,2}/g);
//     for(var i=0;i<spl.length;i++)
//     {
//         if(spl[i]=='aa'||spl[i]=='ea'||spl[i]=='ia'||spl[i]=='oa'||
//         spl[i]=='ua'||spl[i]=='ae'||spl[i]=='ee'||spl[i]=='ie'||
//         spl[i]=='oe'||spl[i]=='ue'||spl[i]=='ai'||spl[i]=='ei'||
//         spl[i]=='ii'||spl[i]=='oi'||spl[i]=='ui'||spl[i]=='ao'||
//         spl[i]=='eo'||spl[i]=='io'||spl[i]=='oo'||spl[i]=='uo'||
//         spl[i]=='au'||spl[i]=='eu'||spl[i]=='iu'||spl[i]=='ou'||
//         spl[i]=='uu')
//         {
//             k++;     
//         }
//     }
//     return k;
    
// }




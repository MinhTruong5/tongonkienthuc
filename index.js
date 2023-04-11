// 1 . Tìm số phần tử lặp lại nhiều nhất 
// trong 1 mảng và đếm xem nó lặp lại bao nhiêu lần

const arr_name = [1,3,3,4,5,4,4,7]
var count1= 0;
 var num=0 ;
for(var i = 0;i<arr_name.length;i++){
var count2=0;
for(var j=0;j<arr_name.length;j++){
    if(arr_name[i]===arr_name[j]){
        count2++;
    }
    if(count1<count2){
        count1=count2;
      num = arr_name[i];
    }   
}
}
console.log(num,count1)
// 2. Tìm ước chung lớn nhất và
//  bội chung nhỏ nhất của hai số nguyên dương
function UCLN(num1, num2) {

    if (num1 == 0 || num2 == 0) {
      return num1 + num2;
    }else{
    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }
    return num1;
  }
}
// function BCNN(num1, num2) {
//     var max=0;
//     if(num1==0||num2==0){
//         console.log("Không có bội chung")
//     } else{
//      if(num1 <num2)
//     {
//         max = num2
//     }
//     else
//     {
//         max = num1
//     }
//     while(num1%max==0 &&num2%max==0){   
//         max++
//         }
//         return max;

//     }
// }
function BCNN(num1,num2){
    return num1*num2/UCLN(num1,num2)
}
  var num1 = prompt("Nhập số thứ nhất: ");
var num2 = prompt("Nhập số thứ 2: ");
  
  
  
  var findUC = UCLN(num1, num2);
  var findBC = BCNN(num1,num2)
  
  console.log("Ước chung lớn nhất của " + num1 + " và " + num2 + " là " + findUC);
  console.log("Bội chung nhỏ nhất của " + num1 + " và " + num2 + " là " + findBC);
  
//   3 . Cho một chuỗi  , tìm độ dài của xâu dài nhất là chuỗi con 
// với điều kiện là chuỗi con đó  không lặp lại ký tự
var a = "swwkeppa" 
function str (a){
var b = "";  
var count1 = 0;
for(var i=0;i<a.length;i++){
  var count2 = [];
    for(var j=i;j<a.length;j++){
        if(!count2.includes(a[j])){
            count2.push(a[j])
        }else{
          break;
        }
        if(count1<count2.length){
          count1=count2.length;
          b= count2.join("");
        }
    }
}
return b;
}
console.log(str(a))
// 4 . Cho một số nguyên x, trả về true 
// nếu x là một số xuôi ngược đều giống nhau , nếu khác thì trả về false
var num = 12321
function isNumber (num){
var sumStr = num.toString();
for (var i=0 ; i<sumStr.length/2;i++){
  if(sumStr[i]===sumStr[sumStr.length-i-1]){ // đối xứng
    return true
  }else{
    return false;
  }
}
}
// console.log(isNumber(num))
// 5 . Cho một mảng và một giá trị target . 
// Tổng của 2 số bất kì trong mảng cộng lại sẽ bằng giá trị của biến target . 
// Nhiệm vụ của bạn là tìm vị trí của 2 số đấy và cho vào một mảng
var nums = [1,2,4,7]
var target = 9;
function summ (nums){
  for(var i=0;i<nums.length;i++){
    var a = nums[i];
  for (var j=i+1;j<nums.length;j++){
    var b= nums[j];
    // if(a+b  ==target){
    //   return [a,b]
    if(nums[i]+nums[j]===target){
      return [i,j]
}
}
}
  return "không có";
}

console.log(summ(nums))

// 6 . Viết hàm tìm chuỗi tiền tố chung dài nhất trong một mảng các chuỗi. 
// Nếu không có tiền tố chung, hãy trả về một chuỗi rỗng ""

var strs = ["flower","flow","flight"]
// var strs = ["dog","racecar","car"]
function STR(strs) {
  var index = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(index) !== 0) {
      index = index.slice(0, -1);
      if (index === "") {
        console.log("");
  }
  }
  }
  return index;
}
console.log(STR(strs))

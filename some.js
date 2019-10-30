let fruits = ['apple', 'banana', 'mango', 'guava'];
function check(arr, value){
  for(let i = 0; i < fruits.length; i++){
    if(value === fruits[i]){
      return true
    }
    else {
      return false
    }
  }
}
console.log(check(fruits, 'apple'));
console.log(check(fruits, 'guava'));
console.log(check(fruits, 'kiwi'));

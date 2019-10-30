let numbers = [4, 7, 48, 73, 56, 98];
let num1 = [];
function find(){
  numbers.forEach(function(element){
    if(element % 2 === 0){
      num1.push(element);
    }

  })
}
find();

console.log(num1);

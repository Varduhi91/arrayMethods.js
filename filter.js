let arr = [15, 7, 56, 3, 8, 75];
let arrNew = [];
arr.forEach(function(item){
  if(item > 10){
    arrNew.push(item);
  }
})
document.write(arr);
document.write("</br>" + " Filtered are " + arrNew);

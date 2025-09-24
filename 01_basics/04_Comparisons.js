// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)
// console.log("02">1)
//here js automatically convert 

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
//because equality check == and comparisons ><>=<=work differently.comparisons convert null to a number,treating it to 0

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined<0)//false
//===
console.log("2"===1)

/*but it requires for good practise to avoid this type of conversions*/
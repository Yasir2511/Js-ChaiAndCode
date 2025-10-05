//primitive datatype
//7 types-string,number,Boolean,null,undefined,symbol,BigInt

const score=76.3//number
const name="abc"//string
const num=false//Boolean
const number=null//null
let undefinedNumber//Undefined

const Id=Symbol('123')//symbol
const anotherId=Symbol('123')//symbol

// console.log(Id===anotherId)//check it is equal or not

const BigNumber=32736893826n//BigInt

//non primitive(reference) datatype
//arrays,objects,functions

const Arr=["abs","abc","abv"];
let myObj={
    name:"yaser",
    age:22,
}
 let myFunction=function(){
    console.log("hello");
    
 }
//  console.log(typeof myFunction)
//  console.log(typeof myObj)
//  console.log(typeof Arr)

 //++++++++++++++++++++++++++++++++++
 let myYoutubeName="acheiving goals";

let anothername=myYoutubeName
   console.log(anothername)
   anothername="chaiorcode"
   console.log(myYoutubeName)
   console.log(anothername)

let userone={
    name:"yaser",
    age:"18"
}
let usertwo=userone
usertwo.name="yaser viqar"
console.log(userone);
console.log(usertwo);

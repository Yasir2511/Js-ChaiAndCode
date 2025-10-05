const name ="hitesh"
const sirname="chaudhary"
//console.log(name+sirname)//not advisable to used

console.log(`hello my firstname is ${name} and sir_name is ${sirname}`)

const gamename=new String('yaser-viqar  ')

console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(0))
console.log(gamename.indexOf('a'))

let sub=gamename.substring(2,7)
console.log(sub)
console.log(gamename.slice(1,3))
console.log(gamename.trim())
console.log(gamename.replace('-',' '))

console.log(gamename.includes('v'))
console.log(gamename.split('-'))

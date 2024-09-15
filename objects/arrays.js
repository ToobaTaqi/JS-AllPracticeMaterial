const arr1=[1,2,3,4]
const arr2=[5,6,7,8]

const merged=arr1.concat(arr2)
console.log(merged.join(','))

const sprdOp= [...arr1,...arr2]
console.log(sprdOp)
const arr3=[1,2,3,[4,5,6],7,[6,[7,8]]]
const arr4=arr3.flat(Infinity)
console.log(arr4)

const str="tooba"
console.log(Array.isArray(str))
console.log(Array.from(str))
const obj={name:"tooba"}
console.log(Array.from(Object.values(obj)))

const a=100, b=200,c=300
console.log(Array.of(a,b,c))
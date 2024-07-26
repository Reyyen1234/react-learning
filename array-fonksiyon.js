/* Push
   Map
   find
   includes
   filter
   some: true yada false donduruyor
   every: some in kardesi
 */
//push
const users =["reyyen","mohamed","isam","rene"]
users.push("ragid");
console.log(users)
//map

//mapsiz
/* for(let i=0;i<users.length;i++){
 console.log(users[i])
} */
//mapli
users.map((users)=>{
    console.log(users)
})
//find
const list =[
    {name:"reyyen",
    age:27},
    {name:"mohamed",
    age:30},
    {name:"rene",
    age:18}

]
const user = list.find((item)=> item.name ==="reyyen");
console.log(user)
//filter
const users1= list.filter((item)=> item.name === "rene");
console.log(users1)
//some
const users2=list.some((item)=> item.name === "ragid")
console.log(users2)
//every
//herkes 20den buyuk mu diye bakacak
const users3 = list.every((item)=> item.age>20)
console.log(users3)
//includes
const meyveler= ["muz","kiraz","karpuz"]
const meyve = meyveler.includes("portakal")
console.log(meyve)
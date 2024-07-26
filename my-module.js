
//npm instal kutuphanin-adi
//npm i kutuphanin-adi
//birinci yöntem
/* function topla(b,c){
    return b+c;
}
export default topla; */
//ikinci yöntem
/* const topla= function topla(b,c){
    return b+c;
} 
//üçüncü yöntem
const topla = (b,c)=>{
    return b+c;
}*/
//dörduncu yöntem
const topla =(b,c)=> b+c;

const cikar =(d,f)=> d-f;

const hello = (name) =>{console.log("hello " + name)}
//yeni modulumuz indexte gorunmesi icin disarya aktarmam lazim
export {topla,cikar,hello};
const merhaba = (name)=>{
    console.log("merhaba " + name)
}
export default merhaba;
/* export default merhaba = (name)=>{
    console.log("merhaba " + name)
} */
 
//string
export const text = "text"
//obj
export const user ={
    name :"reyyen",
    surname : "almasri"
}
//array
export const users=[
    {
        name :"reyyen",
        pasword: 1236
    },
    {
        name :"mohamed",
        pasword: 1246
    }
]

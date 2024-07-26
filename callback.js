//verecginiz paramatere suresi tamamladiktan sonra bir kere calisiyor olmasi
//javada oldukce onemli bir fonksiyoun
//setTimeout(birinci paramaterede fonksiyon, ikincisinde saniye cinsinden yer aliyor)
/* setTimeout( ()=>{
    console.log("merhaba");},
     2000
);
setInterval(()=>{
    console.log("beni her iki saniyede calistir");},
     2000

) */
// burada once users sonra post sirayile koydumki post userden once gelmesin diye
/*import fetch from "node-fetch"
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=> data.json())
.then((users)=> {console.log("users yuklendi",users)

fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=> data.json())
.then((posts)=>console.log("postlar yuklendi" ,posts))
})
 boyle yazarsak once post sonra users gelebilir komutu her calistigimizda
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=> data.json())
.then((users)=> {console.log("users yuklendi",users)
}) 
fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=> data.json())
.then((posts)=>console.log("postlar yuklendi" ,posts))

//async 
async function getData(){
    //await koymasak beklemeden bir sonraki satira iner
    const users = await(
        // iki tane await kullanmam sebebi json dondurmasi
        await fetch("https://jsonplaceholder.typicode.com/users")).json(); 
    const post = await(
            await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    console.log("users",users)
    console.log("post1",post)
}
getData()

// fonksiyon ismi olmadan async yazmak istesm
(async()=>{
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post = await(
            await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log("users",users)
    console.log("post1",post)

})();*/
//simdi axios kutuphanesi indirecegim reactte cok kullaniliyor
import axios from "axios";
(async()=>{
    //axios bir obj dondugu icin ve altinda bir data oldugu icin obj kullaniyoruz
    //ES6 yararlanarak yeniden bu data adlandiriyoruz, cunku birden fazla data kullanamayiz
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users");
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log("users",users)
    console.log("post", post)
    //reyyen burada en sonda () koymayi unutma
})();
// eyyen promise konusu pek anlamadin tekrar konuya bakman lazim 

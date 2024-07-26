//slugify
import slugify from "slugify";
/* merhabayi default olarak aktardigim icin parantez icine yazamayiz 
birde fonksiyounu adi aktardigim istedigim adi ile cagirabilirim  */
import hi, {topla,cikar,hello,text,user,users} from "./my-module.js";
const title= slugify('hello reyyen')
console.log(title)
console.log(text)
console.log(user)
console.log(users)
console.log(topla(4,2))
console.log(cikar(10,5))
hello("reyyen");
hi("ben burdayim beni kayibetme, cunku ayiri bir fonkiyon adim varrrrr lolll")
 
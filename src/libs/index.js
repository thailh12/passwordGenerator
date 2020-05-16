
import md5 from 'md5'

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
 const generate = (key, salt ='anhthaideptrai',target) => {
  
    key = key.replace(/[\s]+/gi, '').toLowerCase() 
    let hashed = md5(key + salt + target)
    // const rounds = options.rounds >= 1 ? Math.trunc(options.rounds) : 10
    const rounds =  10
    for (let i = 0; i <= rounds; i++) {
      hashed = md5(hashed)
    }
   hashed= hashed.substring(hashed.length-15)

     const specialCharacters = '!#$%&()*+,-.:;<=>?@[]^_{|}~'
    let special = Math.abs(parseInt(key.length ^ target.length ,10)) % 16
    let specialPos = Math.abs(parseInt(target.length <<salt.length^2)) % 15
    // console.log(specialPos, specialCharacters[special]);
    
    hashed = replaceAt(hashed,specialPos,specialCharacters[special])

    let upper = Math.abs(parseInt(salt.length  ^ key.length,10) % 26 + 65)
    let upperPos =Math.abs(parseInt(key.length  << target.length, 10)) % 15 
    console.log(upperPos,specialPos);
    
    // console.log(upperPos, String.fromCharCode(upper));

     hashed =  replaceAt(hashed,upperPos,String.fromCharCode(upper))

    // console.log(hashed);
    
    // magicString = `${String.fromCharCode(97 + validUsername.length % 26)}${String.fromCharCode(65 + validApplication.length % 26)}${validSalt.length % 10}${specialCharacters[validSalt.length % 10]}${magicString}`

    return hashed
}


export {generate}

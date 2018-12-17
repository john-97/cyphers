//short hand
const arg = process.argv
const argArray = [];
const morse = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
}
const cCipher= {
    plain: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    cipher: "XYZABCDEFGHIJKLMNOPQRSTUVW"
}

//encode
function caesarEncode() {
    let encode = [];
    argArray.forEach(function(ele,num){
        for(let i = 0; i < ele.length; i++){
            for(let key in morse){
                if(ele.charAt(i) === key){
                    encode.push(morse[key]);
                }
            }
        }
        encode.push("    ");
    });
    encode = encode.join(" ");
    return encode;
}
function morseDecode() {
    let decode = "";
    argArray.forEach(function(ele, num){
        let word = argArray[num].split("    ");
        for(let i = 0; i < word.length; i++){
            let letter = word[i].split(" ");
            for(let j = 0; j < letter.length; j++){
                for(let key in morse){
                    if(letter[j] === morse[key]){
                        decode += key;
                    }
                }
            }
            decode += " ";
        }
    })
    return decode;
}

//ceasar encode
// function caesare() {
//     let encode = [];
//     argArray.forEach(function(ele,num){
//         for(let i = 0; i < ele.length; i++){
//             let letter = ele.
//         }
//         encode.push("    ");
//     });
//     encode = encode.join(" ");
//     return encode;
// }
//processing input
arg.forEach(function(ele, num){
    if(num > 1){
        argArray.push(ele);
    }
});
// calls
morseDecode();
caesarEncode();
// caesare();
// caesard();
if (arg[2] === "caesar-e"){
    console.log(caesarEncode)
} else if (arg[2] === "caesar-d"){
    console.log(caesarEncode)
}else{
    if(morseDecode() !== undefined){
        console.log(morseDecode());
    }
    if(caesarEncode() !== undefined){
        console.log(caesarEncode());
    }
}

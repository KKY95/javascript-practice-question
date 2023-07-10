function anagram(s1,s2){
    return (s1.split("").sort().join(""))=== (s2.split("").sort().join(""));
}

const str1= "elegant man";
const str2="a gentleman";
console.log(anagram(str1,str2));
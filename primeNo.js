 function xyz(A){
        return A.concat(A).split("").filter(char=>!(char.charCodeAt()>=65 && char.charCodeAt()<=90))
        .map(char=>['a','e','i','o','u'].includes(char)? '#': char).join("");
        }



console.log(xyz("AbcaZeo"))
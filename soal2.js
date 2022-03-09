const checkTypeNumber = (givenNumber) => {

    /* 
        Deklarasi
        jika giveNumber !== "number" {
            tampilkan "ERROR : Invalid data type";
        }
        jika givenNumber % 2 === 0 {
            tampilkan "GENAP"
        }

        jika tidak {
            tampilkan "GANJIL"
        }
    */

    if (typeof givenNumber !== "number") {
        return "ERROR : Invalid data type";
    }
    if (givenNumber % 2 === 0) {
        return "GENAP";
    } else {
        return "GANJIL";
    }
}



console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber());
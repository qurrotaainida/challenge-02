const isValidPassword = (givenPassword) => {
    /*
        Deklarasi 
        jika givenPassword === undefined {
            tampilkan "ERROR : givenPassword is empty";
        }
        jika tipe givenPassword !== "string"{
            tampilkan "Invalid data type";
        }

        deklarasi isUpperCase,isLowerCase,isNumber = false

        jika givenPassword.length < 8 {
            tampilkan false;
        }

        loop for (let i = 0; i < givenPassword.length; i++) {
            jika givenPassword memiliki abjad A-Z
            {
                isUpperCase = true;
            }

            jika givenPassword memiliki abjad a-z
            {
                isLowerCase = true;

            jika givenPassword memiliki angka 0-89         
            {
                isNumber = true;
            }
        }
        

        return true;
    */



    if (givenPassword === undefined) {
        return "ERROR : givenPassword is empty";
    }
    if (typeof givenPassword !== "string") {
        return "ERROR : Invalid data type";
    }

    let isUpperCase = false;
    let isLowerCase = false;
    let isNumber = false;

    if (givenPassword.length < 8) {
        return false;
    }
    for (let i = 0; i < givenPassword.length; i++) {
        if (
            givenPassword[i].charCodeAt(0) >= 65 &&
            givenPassword[i].charCodeAt(0) <= 90
        ) {
            isUpperCase = true;
        }
        if (
            givenPassword[i].charCodeAt(0) >= 97 &&
            givenPassword[i].charCodeAt(0) <= 122
        ) {
            isLowerCase = true;
        }
        if (
            givenPassword[i].charCodeAt(0) >= 48 &&
            givenPassword[i].charCodeAt(0) <= 57
        ) {
            isNumber = true;
        }
    }

    if (!isUpperCase) {
        return false
    }
    if (!isLowerCase) {
        return false;
    }
    if (!isNumber) {
        return false;
    }

    return true;
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
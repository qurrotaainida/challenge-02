const checkEmail = (email) => {

      /* 
        Deklarasi 
        jika email === undefined {
            tampilkan "ERROR : Email is empty"
        }
        jika email !== "string" {
            tampilkan "Invalid data type"
        }
        jika !email.includes("@") {
            tampilkan "ERROR : Bukan email";
        }

        Deklarasi regex 
        -- regex untuk mengenali atau mendeteksi suatu pola tertentu pada suatu string --

        jika email.toLowerCase().match(regex) {
            tampilkan "VALID"
        } 
        jika tidak{
            tampilkan "INVALID"
        }
    */

    if (email === undefined) {
        return "ERROR : Email is empty";
    }
    if (typeof email !== "string") {
        return "Invalid data type";
    }
    if (!email.includes("@")) {
      return "ERROR : Bukan email";
    }

    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.toLowerCase().match(regex)) {
        return "VALID";
    } 
    else {
        return "INVALID";
    }
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkEmail(3322));
console.log(checkEmail());
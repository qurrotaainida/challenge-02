const getAngkaTerbesarKedua = (dataNumbers) => {
    /*
      Deklarasi
      jika dataNumbers === undefined {
          Tampilkan  "ERROR : dataNumbers is empty";
      }
      jika tipe dataNumbers !== "object" {
          tampilkan "Invalid data type";
      }
      jika dataNamber panjangnya kurang dari 2 {
          tampilkan "ERROR : Harus terdiri dari 2 angka atau lebih";
      }
      
      menggunakan fungsi set() agar data dalam objek tersebut hanya ada satu nilai saja
      menggunakan fungsi sort() dan method reverse() 

      tampilkan dataNumbers
      
    */
    if (dataNumbers === undefined) {
        return "ERROR : dataNumbers is empty";
    }
    if (typeof dataNumbers !== "object") {
        return "ERROR : Invalid data type";
    }
    if (dataNumbers.length < 2) {
        return "ERROR : Harus terdiri dari 2 angka atau lebih";
    }
    dataNumbers = [...new Set(dataNumbers)];
    dataNumbers.sort().reverse();
    return dataNumbers[1];
};

console.log(getAngkaTerbesarKedua([9, 4, 7, 7, 4, 3, 2, 2, 8]));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

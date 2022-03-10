const getSplitName = (personName) => {
      /*
        Deklarasi 
        jika personName === undefined {
            tampilkan "ERROR : personName is empty";
        }
        jika tipe personName !== "string" {
            tampilkan "Invalid data type";
        }

        const name = personName.split(" ");
        -- Split digunakan untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli.--
        
        jika name.length > 3 {
            tampilkan "Error : This function is only for 3 character name"
        }

        tampilkan {
            firstName: name[0],
            middleName: name[1],
            lastname: name[2]
        }
    */
    if (personName === undefined) {
      return "ERROR : personName is empty";
    }
    if (typeof personName !== "string") {
      return "ERROR : Invalid data type";
    }

    const name = personName.split(" ");
    if (name.length > 3) {
      return "ERROR : This function is only for 3 character name";
    }

    let middleName = name[1];
    let lastName = name[2];

    if (!name[2]) {
      middleName = null;
      lastName = name[1] ? name[1] : null;
    }

    return {
      firstName: name[0],
      middleName,
      lastName,
    };
  };

  console.log(getSplitName("Aldi Daniela Pranata"));
  console.log(getSplitName("Dwi Kuncoro"));
  console.log(getSplitName("Aurora"));
  console.log(getSplitName("Aurora Aureliya Sukma Darma"));
  console.log(getSplitName(0));
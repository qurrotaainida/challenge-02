const dataPenjualanNovel = [
    {
        idProduct: "BOOK002421",
        namaProduk: "Pulang - Pergi",
        penulis: "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: "BOOK002351",
        namaProduk: "Selamat Tinggal",
        penulis: "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Garis Waktu",
        penulis: "Fiersa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
};

const getInfoPenjualan = (dataPenjualan) => {
    const infoPenjualan = {
        totalKeuntungan: 0,
        totalModal: 0,
        totalJual: 0,
        produkBukuTerlaris: "",
        totalTerjual: 0,
    };

    const infoPenulis = [];

    dataPenjualan.forEach((data) => {
        // Menghitung total keuntungan
        infoPenjualan.totalKeuntungan +=
            data.hargaJual * data.totalTerjual -
            (data.totalTerjual + data.sisaStok) * data.hargaBeli;
        // Menghitung total modal
        infoPenjualan.totalModal +=
            data.hargaBeli * (data.totalTerjual + data.sisaStok);

        infoPenjualan.totalJual += data.hargaJual * data.totalTerjual;

        // Mencari Produk Buku Terlaris
        if (data.totalTerjual > infoPenjualan.totalTerjual) {
            infoPenjualan.produkBukuTerlaris = data.namaProduk;
            infoPenjualan.totalTerjual = data.totalTerjual;
        }

        // Mencari total buku yang terjual pada setiap penulis
        if (infoPenulis[data.penulis]) {
            infoPenulis[data.penulis] += data.totalTerjual;
        } else {
            infoPenulis[data.penulis] = data.totalTerjual;
        }
    });

    // Mencari penulis dengan total buku yang paling banyak terjual
    let totalTerjual = 0;
    let penulisTerlaris = "";
    for (var penulis in infoPenulis) {
        if (infoPenulis[penulis] > totalTerjual) {
            penulisTerlaris = penulis;
            totalTerjual = infoPenulis[penulis];
        }
    }

    return {
        totalKeuntungan: rupiah(infoPenjualan.totalKeuntungan),
        totalModal: rupiah(infoPenjualan.totalModal),
        persentaseKeuntungan: `${(
            (infoPenjualan.totalKeuntungan / infoPenjualan.totalModal) *
            100
        ).toFixed(2)}%`,
        produkBukuTerlaris: infoPenjualan.produkBukuTerlaris,
        penulisTerlaris,
    };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
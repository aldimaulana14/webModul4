function updateBarang() {
    var kode = document.getElementById("kodeBarang").value;
    var namaBarang = "";
    var harga = 0;

    switch (kode) {
        case "B001":
            namaBarang = "Buku";
            harga = 5000;
            break;
        case "B002":
            namaBarang = "Penggaris";
            harga = 1500;
            break;
        case "B003":
            namaBarang = "Pulpen";
            harga = 2000;
            break;
        default:
            namaBarang = "";
            harga = 0;
    }

    document.getElementById("namaBarang").value = namaBarang;
    document.getElementById("harga").value = harga;
    hitungNota();
}

function hitungNota() {
    var harga = parseInt(document.getElementById("harga").value) || 0;
    var jumlahBeli = parseInt(document.getElementById("jumlahBeli").value) || 0;

    if (harga === 0 || jumlahBeli <= 0) {
        return;
    }

    var jumlahBayar = harga * jumlahBeli;

    var potonganPersen = jumlahBeli > 20 ? 15 : jumlahBeli > 10 ? 10 : 5;
    var potongan = (potonganPersen / 100) * jumlahBayar;
    var totalBayar = jumlahBayar - potongan;

    document.getElementById("jumlahBayar").value = "Rp " + jumlahBayar.toLocaleString();
    document.getElementById("potongan").value = "Rp " + potongan.toLocaleString() + " (" + potonganPersen + "%)";
    document.getElementById("totalBayar").value = "Rp " + totalBayar.toLocaleString();
}

function hasilAkhir() {
    var kode = document.getElementById("kodeBarang").value;
    var jumlahBeli = parseInt(document.getElementById("jumlahBeli").value);

    if (!kode) {
        alert("Pilih kode barang terlebih dahulu!");
        return;
    }

    if (isNaN(jumlahBeli) || jumlahBeli <= 0) {
        alert("Jumlah beli harus lebih dari 0!");
        return;
    }

    document.getElementById("nota").style.display = 'block';
    document.getElementById("nota").innerHTML =
        "<h3>Nota Penjualan</h3>" +
        "<p><strong>Kode Barang:</strong> " + kode + "</p>" +
        "<p><strong>Nama Barang:</strong> " + document.getElementById("namaBarang").value + "</p>" +
        "<p><strong>Harga:</strong> " + document.getElementById("harga").value + "</p>" +
        "<p><strong>Jumlah Beli:</strong> " + jumlahBeli + "</p>" +
        "<hr>" +
        "<p><strong>Jumlah Bayar:</strong> " + document.getElementById("jumlahBayar").value + "</p>" +
        "<p><strong>Potongan:</strong> " + document.getElementById("potongan").value + "</p>" +
        "<hr>" +
        "<p><strong>Total Bayar:</strong> " + document.getElementById("totalBayar").value + "</p>";
}
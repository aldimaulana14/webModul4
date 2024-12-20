function hitungGaji() {
    const golongan = document.getElementById('golongan').value;
    const jumlahAnak = parseInt(document.getElementById('jumlahAnak').value);

    let gajiPokok, persenTunjangan;
    // Menentukan gaji pokok dan persentase tunjangan berdasarkan golongan
    switch(golongan) {
        case '1':
            gajiPokok = 250000;
            persenTunjangan = 5;
            break;
        case '2':
            gajiPokok = 300000;
            persenTunjangan = 10;
            break;
        case '3':
            gajiPokok = 350000;
            persenTunjangan = 15;
            break;
    }

    // Hitung tunjangan berdasarkan jumlah anak
    const tunjangan = (jumlahAnak * gajiPokok) * (persenTunjangan / 100);

    // Hitung gaji bersih
    const gajiBersih = gajiPokok + tunjangan;

    // Tampilkan hasil pada kolom input readonly
    document.getElementById('gajiPokok').value = `Rp ${gajiPokok.toLocaleString()}`;
    document.getElementById('tunjangan').value = `Rp ${tunjangan.toLocaleString()}`;
    document.getElementById('gajiBersih').value = `Rp ${gajiBersih.toLocaleString()}`;
}

function hitungLuas() {
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    console.log(alas);
    console.log(tinggi);
    let luas = 0.5 * alas * tinggi;
    document.getElementById("hasilLuas").innerHTML = "Luas segitiga: " + luas;
}

function hitungKeliling() {
    let sisiSatu = parseFloat(document.getElementById("sisiSatu").value);
    let sisiDua = parseFloat(document.getElementById("sisiDua").value);
    let sisiTiga = parseFloat(document.getElementById("sisiTiga").value);
    console.log(sisiSatu);
    console.log(sisiDua);
    console.log(sisiTiga);
    let keliling = sisiSatu + sisiDua + sisiTiga;
    document.getElementById("hasilKeliling").innerHTML =
        "Keliling segitiga: " + keliling;
}

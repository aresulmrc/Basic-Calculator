// Html İçindeki Elementleri Tanımlama
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const result = document.getElementById("result");
const sumBtn = document.getElementById("sum-btn");
const subBtn = document.getElementById("sub-btn");
const mulBtn = document.getElementById("mul-btn");
const divBtn = document.getElementById("div-btn");
const clearBtn = document.getElementById("clear-btn");

// Toplama İşlemi
function toplam() {
  const sayi1 = parseInt(n1.value);
  const sayi2 = parseInt(n2.value);

  // Girilen Değerleri Kontrol Etme.  ||(Veya)
  if (isNaN(sayi1) || isNaN(sayi2)) {
    (result.textContent = "Lütfen Sayı Giriniz."),
      (result.style.color = "green");
  } else {
    const sonuc = sayi1 + sayi2;
    result.textContent = sonuc;
    result.style.color = sonuc < 0 ? "red" : "green";
  }
}

// Çıkarma İşlemi
function cıkarma() {
  const sayi1 = parseInt(n1.value);
  const sayi2 = parseInt(n2.value);

  // Girilen Değerleri Kontrol Etme.  ||(Veya)
  if (isNaN(sayi1) || isNaN(sayi2)) {
    (result.textContent = "Lütfen Sayı Giriniz."),
      (result.style.color = "green");
  } else {
    const sonuc = sayi1 - sayi2;
    result.textContent = sonuc;
    result.style.color = sonuc < 0 ? "red" : "green";
  }
}

// Çarpma İşlemi
function carpma() {
  const sayi1 = parseInt(n1.value);
  const sayi2 = parseInt(n2.value);

  // Girilen Değerleri Kontrol Etme.  ||(Veya)
  if (isNaN(sayi1) || isNaN(sayi2)) {
    (result.textContent = "Lütfen Sayı Giriniz."),
      (result.style.color = "green");
  } else if (sayi1 === 0 || sayi2 === 0) {
    (result.textContent = "Hata: Sayılar 0 İle Çarpılamaz!"),
      (result.style.color = "red");
  } else {
    const sonuc = sayi1 * sayi2;
    result.textContent = sonuc;
    result.style.color = sonuc < 0 ? "red" : "green";
  }
}

// Bölme İşlemi
function bolme() {
  const sayi1 = parseInt(n1.value);
  const sayi2 = parseInt(n2.value);

  // Girilen Değerleri Kontrol Etme.  ||(Veya)
  if (isNaN(sayi1) || isNaN(sayi2)) {
    (result.textContent = "Lütfen Sayı Giriniz."),
      (result.style.color = "green");
  } else if (sayi1 === 0 || sayi2 === 0) {
    (result.textContent = "Hata: Sayılar 0'a Bölünemez!"),
      (result.style.color = "red");
  } else {
    const sonuc = sayi1 / sayi2;
    result.textContent = sonuc;
    result.style.color = sonuc < 0 ? "red" : "green";
  }
}

// Değerleri Temizleme
function temizle() {
  n1.value = "";
  n2.value = "";
  result.textContent = "";
}

// Butonlara Tıklama Olaylarını Atama
divBtn.addEventListener("click", bolme);
mulBtn.addEventListener("click", carpma);
sumBtn.addEventListener("click", toplam);
subBtn.addEventListener("click", cıkarma);
clearBtn.addEventListener("click", temizle);

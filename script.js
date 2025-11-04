console.log("✅ Script.js berhasil terhubung.");

const NamaPemilik = document.querySelector('#owner-name');
const TampilanNamaPemilik = document.querySelector('#preview-owner-name');

console.log(NamaPemilik);
console.log(TampilanNamaPemilik);

NamaPemilik.addEventListener('input', function() {
    const teksInputan = NamaPemilik.value;
    
    if (teksInputan === "") {
        TampilanNamaPemilik.textContent = "Pemilik Mobil belum mengisi Formulir";
    } else {
        TampilanNamaPemilik.textContent = teksInputan;
    }
});

const PlatMobil = document.querySelector('#car-plate');
const TampilkanPlatMobil = document.querySelector('#preview-car-plate');

PlatMobil.addEventListener('input', function() {
    const platinputan = PlatMobil.value;
    
    if (platinputan === "") {
        TampilkanPlatMobil.textContent = "Belum di input";
    } else {
        TampilkanPlatMobil.textContent = platinputan;
    }
});

const NamaMobil = document.querySelector('#car-name');
const TampilkanNamaMobil = document.querySelector('#preview-car-name');

NamaMobil.addEventListener('input', function() {
    const namainputan = NamaMobil.value;
    
    if (namainputan === "") {
        TampilkanNamaMobil.textContent = "Data Tidak ditemukan";
    } else {
        TampilkanNamaMobil.textContent = namainputan;
    }
});

const TahunMobil = document.querySelector('#car-year');
const TampilkanTahunMobil = document.querySelector('#preview-car-year');

TahunMobil.addEventListener('input', function() {
    const tahuninputan = TahunMobil.value;
    
    if (tahuninputan === "") {
        TampilkanTahunMobil.textContent = "Data Tidak ditemukan";
    } else {
        TampilkanTahunMobil.textContent = tahuninputan;
    }
});

const MesinMobil = document.querySelector('#car-engine');
const TampilkanMesinMobil = document.querySelector('#preview-car-engine');

MesinMobil.addEventListener('input', function() {
    const mesininputan = MesinMobil.value;
    
    if (mesininputan === "") {
        TampilkanMesinMobil.textContent = "Data Tidak ditemukan";
    } else {
        TampilkanMesinMobil.textContent = mesininputan;
    }
});

const CCMobil = document.querySelector('#engine-cc');
const TampilkanCCMobil = document.querySelector('#preview-engine-cc');

CCMobil.addEventListener('input', function() {
    const ccinputan = CCMobil.value;
    
    if (ccinputan === "") {
        TampilkanCCMobil.textContent = "Data Tidak ditemukan";
    } else {
        TampilkanCCMobil.textContent = ccinputan;
    }
});

const ColorMobil = document.querySelector('#car-color');
const TampilkanColorMobil = document.querySelector('#preview-car-color');

ColorMobil.addEventListener('input', function() {
    const colorinputan = ColorMobil.value;
    
    if (colorinputan === "") {
        TampilkanColorMobil.textContent = "Data Tidak ditemukan";
    } else {
        TampilkanColorMobil.textContent = colorinputan;
    }
});

const GambarInput = document.getElementById('car-photo'); 
const previewGambar = document.getElementById('preview-car-photo');

GambarInput.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
        const pembaca = new FileReader();
        
        pembaca.onload = function(e) { 
            previewGambar.src = e.target.result;
            previewGambar.alt = "Gambar baru diunggah";
            previewGambar.style.display = 'block'; 
        };
        
        pembaca.readAsDataURL(event.target.files[0]);
    } else {
        previewGambar.src = "";
        previewGambar.alt = "Gambar Mobil";
        previewGambar.style.display = 'none'; 
    }
});
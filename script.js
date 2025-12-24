document.addEventListener('DOMContentLoaded', () => {
    
    // --- ELEMEN DOM ---
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const inputJudul = document.getElementById('inputJudul');
    
    // Input Spesifikasi
    const inputBed = document.getElementById('inputBed');
    const inputBath = document.getElementById('inputBath');
    const inputCar = document.getElementById('inputCar');
    
    // Checkbox Transaksi
    const chkJual = document.getElementById('chkJual');
    const chkSewa = document.getElementById('chkSewa');

    const canvas = document.getElementById('resultCanvas');
    const ctx = canvas.getContext('2d');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const btnDownload = document.getElementById('btnDownload');
    const uploadText = document.querySelector('.upload-text');

    let currentImageObj = null;

    


    // --- CONFIG ICON (FontAwesome Unicode) ---
    const icons = {
        bed: '\uf236',
        bath: '\uf2cd',
        car: '\uf1b9',
        buy: '\uf4c0', 
        rent: '\uf084'
    };

    // --- EVENT LISTENERS ---
    uploadBox.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith('image/')) return;

        uploadText.textContent = file.name;
        loadingSpinner.style.display = 'block';
        canvas.style.display = 'none';

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                currentImageObj = img;
                document.fonts.ready.then(() => {
                    renderCanvas();
                    loadingSpinner.style.display = 'none';
                    canvas.style.display = 'block';
                });
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });

    const allInputs = [inputJudul, inputBed, inputBath, inputCar, chkJual, chkSewa];
    allInputs.forEach(el => {
        if(el) {
            el.addEventListener('input', renderCanvas);
            el.addEventListener('change', renderCanvas);
        }
    });

    // --- FUNGSI UTAMA RENDER ---
    function renderCanvas() {
        // 1. Reset & Gambar Foto Background
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (currentImageObj) {
            drawImageProp(ctx, currentImageObj, 0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = "#333";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Konfigurasi Dimensi
        const margin = 40;
        const barHeight = 98;
        const barBottomY = canvas.height - 50; 
        const barTopY = barBottomY - barHeight;

        drawShadow(); 
        // 2. Gambar JUDUL LISTING
        drawMainTitle(inputJudul.value, margin, barTopY - 20);

        // 3. Gambar FLOATING BAR (Rata Tengah)
        drawCenteredFloatingBar(margin, barTopY, canvas.width - (margin * 2), barHeight);

        
    }

    // B. Gambar Gradient Hitam di Bawah (Supaya teks putih terbaca)
        // Gradient dari transparan (atas) ke hitam (bawah)
    function drawShadow(){
        const gradientHeight = 400; // Tinggi area bayangan
        const yStart = canvas.height - gradientHeight;
        
        const gradient = ctx.createLinearGradient(0, yStart, 0, canvas.height);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");       // Transparan
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)");     // Hitam pekat

        ctx.fillStyle = gradient;
        ctx.fillRect(0, yStart, canvas.width, gradientHeight);
    }
    // --- FUNGSI 1: Render Judul ---
    function drawMainTitle(text, x, y) {
        ctx.save();
        ctx.font = "bold 70px 'Inter', sans-serif";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        
        ctx.shadowColor = "rgba(0,0,0,0.8)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;

        ctx.fillText(text, x, y);
        ctx.restore();
    }

    // --- FUNGSI 2: Render Floating Bar (CENTERED CONTENT) ---
    function drawCenteredFloatingBar(barX, barY, barWidth, barHeight) {
        ctx.save();

        // A. Gambar Background Bar Hitam (Tetap Lebar Penuh)
        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 10;
        ctx.fillStyle = "#1f1f1f"; // Dark Grey
        
        if (ctx.roundRect) {
            ctx.beginPath();
            ctx.roundRect(barX, barY, barWidth, barHeight, 20);
            ctx.fill();
        } else {
            ctx.fillRect(barX, barY, barWidth, barHeight);
        }
        
        // Reset shadow untuk konten
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        // --- LOGIKA PERHITUNGAN TENGAH (CENTERING) ---
        
        // 1. Definisikan Ukuran Item
        const specItemWidth = 220; // Lebar per item spesifikasi (ikon + teks)
        const btnWidth = 130;      // Lebar tombol
        const btnGap = 10;         // Jarak antar tombol
        const sectionGap = 20;     // Jarak antara grup Spesifikasi dan grup Tombol

        // 2. Hitung Lebar Grup Spesifikasi
        // Kita punya 3 item fix: Bed, Bath, Car
        const totalSpecsWidth = (specItemWidth * 3);

        // 3. Hitung Lebar Grup Tombol
        let activeBtnCount = 0;
        if (chkJual.checked) activeBtnCount++;
        if (chkSewa.checked) activeBtnCount++;

        let totalBtnWidth = 0;
        if (activeBtnCount > 0) {
            totalBtnWidth = (activeBtnCount * btnWidth) + ((activeBtnCount - 1) * btnGap);
        }

        // 4. Hitung Total Lebar Isi (Content)
        // Jika ada tombol, tambahkan sectionGap. Jika tidak, hanya lebar specs.
        let totalContentWidth = totalSpecsWidth;
        if (activeBtnCount > 0) {
            totalContentWidth += sectionGap + totalBtnWidth;
        }

        // 5. Hitung Posisi Awal X (startX) agar Rata Tengah
        // Pusat Bar - Setengah Lebar Konten
        const barCenterX = barX + (barWidth / 2);
        let currentDrawX = barCenterX - (totalContentWidth / 2);
        const centerY = barY + (barHeight / 2);


        // --- PENGGAMBARAN ELEMEN (Urut dari Kiri ke Kanan) ---

        // B. Gambar Spesifikasi
        const specs = [
            { icon: icons.bed, label: 'Kamar Tidur', val: inputBed.value + ' Kamar' },
            { icon: icons.bath, label: 'Kamar Mandi', val: inputBath.value + ' Kamar' },
            { icon: icons.car, label: 'Garasi/carport', val: inputCar.value + ' Mobil' }
        ];

        specs.forEach(spec => {
            // Gambar satu item spesifikasi di currentDrawX
            drawSpecItem(spec, currentDrawX, centerY);
            currentDrawX += specItemWidth; // Geser X untuk item berikutnya
        });

        // C. Gambar Tombol (Jika ada)
        if (activeBtnCount > 0) {
            currentDrawX += sectionGap; // Tambah jarak pemisah grup

            // Gambar tombol Buy dulu (jika aktif)
            if (chkJual.checked) {
                drawButton("Buy", icons.buy, "#fbbf24", "#0f172a", currentDrawX, centerY);
                currentDrawX += btnWidth + btnGap;
            }

            // Gambar tombol Rent (jika aktif)
            if (chkSewa.checked) {
                drawButton("Rent", icons.rent, "#dc2626", "#FFFFFF", currentDrawX, centerY);
                // currentDrawX += btnWidth + btnGap; // Tidak perlu utk item terakhir
            }
        }

        ctx.restore();
    }

    // --- Helper: Draw Single Spec Item ---
    function drawSpecItem(spec, x, y) {
        // Icon
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `900 35px "Font Awesome 6 Free"`; 
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(spec.icon, x, y);

        // Text Group Offset
        const textX = x + 50; 
        
        // Label
        ctx.font = "600 22px 'Inter', sans-serif";
        ctx.fillStyle = "#ffffff"; 
        ctx.textBaseline = "bottom";
        ctx.fillText(spec.label, textX, y - 2);

        // Value
        ctx.font = "400 19px 'Inter', sans-serif";
        ctx.fillStyle = "#FFFFFF"; 
        ctx.textBaseline = "top";
        ctx.fillText(spec.val, textX, y + 2);
    }

    // --- Helper: Draw Button ---
    function drawButton(text, icon, bgColor, textColor, x, centerY) {
        const w = 130;
        const h = 55;
        const y = centerY - (h / 2); // Adjust Y supaya center vertical

        // Button Shape
        ctx.fillStyle = bgColor;
        if (ctx.roundRect) {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, 5);
            ctx.fill();
        } else {
            ctx.fillRect(x, y, w, h);
        }

        // Icon + Text centering inside button
        ctx.fillStyle = textColor;
        ctx.textAlign = "center"; // Center horizontal relative to button center
        ctx.textBaseline = "middle";
        
        const btnCenterX = x + (w / 2);
        
        // Kita gambar manual supaya presisi icon di kiri teks
        // Hitung lebar total isi tombol (icon + space + text) untuk centering di dalam tombol
        ctx.font = "600 20px 'Inter', sans-serif";
        const textWidth = ctx.measureText(text).width;
        const iconWidth = 41; // estimasi
        const gap = 0;
        const totalContentW = iconWidth + gap + textWidth;
        
        let contentStartX = btnCenterX - (totalContentW / 2)-8;

        // Draw Icon
        ctx.textAlign = "left";
        ctx.font = `900 24px "Font Awesome 6 Free"`;
        ctx.fillText(icon, contentStartX, centerY);

        // Draw Text
        ctx.font = "bold 26px 'Inter', sans-serif";
        ctx.fillText(text, contentStartX + iconWidth + gap, centerY + 2);
    }

    // --- Helper: Download & Crop (Sama seperti sebelumnya) ---
    btnDownload.addEventListener('click', () => {
        if (!currentImageObj) { alert("Upload foto dulu!"); return; }
        const link = document.createElement('a');
        link.download = `property-listing.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
    });

    function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
        if (arguments.length === 2) { x = y = 0; w = ctx.canvas.width; h = ctx.canvas.height; }
        offsetX = 0.5; offsetY = 0.5;
        var iw = img.width, ih = img.height, r = Math.min(w / iw, h / ih),
            nw = iw * r, nh = ih * r, cx, cy, cw, ch, ar = 1;
        if (nw < w) ar = w / nw;                             
        if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
        nw *= ar; nh *= ar; cw = iw / (nw / w); ch = ih / (nh / h);
        cx = (iw - cw) * offsetX; cy = (ih - ch) * offsetY;
        if (cx < 0) cx = 0; if (cy < 0) cy = 0;
        if (cw > iw) cw = iw; if (ch > ih) ch = ih;
        ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
    }
});
/* ==========================================================================
   TKJ 1 ANYER - CORPORATE LOGIC (SHELL THEME)
   ========================================================================== */

// 1. DATA WALI KELAS (Styled as Corporate Managers)
const teacherData = [
  {
    id: "t1",
    name: "Bpk. Rahmat Santoso, S.Kom",
    role: "Head of Grade 10 & 11 (Wali Kelas)",
    quote:
      "Membangun fondasi jaringan yang kuat sama pentingnya dengan membangun karakter siswa yang tangguh.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Ibu Dian Pertiwi, M.T",
    role: "Senior Director Grade 12 (Wali Kelas)",
    quote:
      "Menghubungkan setiap potensi siswa menuju dunia industri dan profesional masa depan.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
];

// 2. DATA MEMORI (Corporate Milestones)
const memoryData = [
  {
    id: "m1",
    grade: "10",
    title: "Pelatihan Dasar Infrastruktur",
    desc: "Momen pengenalan perangkat keras keras komputer dan praktik instalasi sistem operasi pertama di laboratorium utama.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m2",
    grade: "10",
    title: "Proyek Terminasi Kabel",
    desc: "Pelaksanaan praktik pembuatan kabel UTP Straight dan Cross-over dengan tingkat akurasi konektivitas 100%.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m3",
    grade: "11",
    title: "Implementasi Topologi Jaringan",
    desc: "Konfigurasi routing statis dan dinamis antar gedung menggunakan perangkat Cisco dan Mikrotik.",
    image:
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m4",
    grade: "11",
    title: "Manajemen Server Linux",
    desc: "Instalasi dan konfigurasi layanan web server, database, dan DNS server berbasis Debian.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m5",
    grade: "12",
    title: "Ujian Kompetensi Keahlian (UKK)",
    desc: "Evaluasi akhir standar industri meliputi perancangan VLAN, Hotspot, dan sistem keamanan firewall.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m6",
    grade: "12",
    title: "Kunjungan Industri",
    desc: "Melihat langsung penerapan teknologi jaringan skala Enterprise pada data center di Jakarta.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
  },
];

// 3. RENDER WALI KELAS
function renderTeachers() {
  const container = document.getElementById("teachers-grid");
  container.innerHTML = "";

  teacherData.forEach((teacher) => {
    const card = document.createElement("div");
    card.className = "teacher-card";
    card.innerHTML = `
            <img src="${teacher.image}" alt="${teacher.name}" class="teacher-img">
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <h4>${teacher.role}</h4>
                <p>"${teacher.quote}"</p>
            </div>
        `;
    container.appendChild(card);
  });
}

// 4. RENDER GALERI
function renderGallery(filterGrade) {
  const container = document.getElementById("gallery-grid");
  container.innerHTML = "";

  const filtered =
    filterGrade === "all"
      ? memoryData
      : memoryData.filter((m) => m.grade === filterGrade);

  if (filtered.length === 0) {
    container.innerHTML = `<p>Tidak ada data untuk kategori ini.</p>`;
    return;
  }

  filtered.forEach((mem) => {
    const card = document.createElement("div");
    card.className = "shell-card";
    card.onclick = () => openModal(mem.id);

    card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${mem.image}" alt="${mem.title}">
            </div>
            <div class="card-content">
                <span class="badge">Kelas ${mem.grade}</span>
                <h3>${mem.title}</h3>
                <p>${mem.desc}</p>
                <div class="card-link">Lihat Detail <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        `;
    container.appendChild(card);
  });
}

// 5. FILTER TABS LOGIC
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      // Hapus class active dari semua
      tabs.forEach((t) => t.classList.remove("active"));
      // Tambah ke yang diklik
      e.target.classList.add("active");

      // Render ulang
      const filterValue = e.target.getAttribute("data-filter");
      renderGallery(filterValue);
    });
  });
}

// 6. MODAL / LIGHTBOX LOGIC
function openModal(id) {
  const mem = memoryData.find((m) => m.id === id);
  if (!mem) return;

  document.getElementById("modal-img").src = mem.image;
  document.getElementById("modal-grade").textContent =
    `Dokumentasi Kelas ${mem.grade}`;
  document.getElementById("modal-title").textContent = mem.title;
  document.getElementById("modal-desc").textContent = mem.desc;

  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Stop background scroll
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restore scroll

  setTimeout(() => {
    document.getElementById("modal-img").src = "";
  }, 300);
}

// Close by Escape Key or clicking outside
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

// 7. INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  renderTeachers();
  renderGallery("all");
  setupTabs();
});

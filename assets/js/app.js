/* ==========================================================================
   TKJ 1 ANYER - CORPORATE LOGIC (SHELL THEME)
   ========================================================================== */

// 1. DATA MANAJEMEN (WALI KELAS)
const leadershipData = [
  {
    id: "L1",
    name: "Bpk. Rahmat Santoso, S.Kom",
    role: "Head of Operations (Grade 10 & 11)",
    quote:
      "Membangun fondasi infrastruktur jaringan yang presisi, sama halnya dengan mendidik integritas teknisi masa depan.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "L2",
    name: "Ibu Dian Pertiwi, M.T",
    role: "Senior Director (Grade 12)",
    quote:
      "Tujuan akhir kami bukan sekadar konektivitas, melainkan mempersiapkan SDM unggul untuk memimpin di era industri 4.0.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
];

// 2. DATA ARSIP / MEMORI
const archiveData = [
  {
    id: "A1",
    grade: "10",
    title: "Perakitan Infrastruktur Dasar",
    desc: "Langkah awal pengenalan hardware server dan PC. Siswa melakukan audit komponen dan merakit perangkat keras sesuai standar keamanan industri IT.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "A2",
    grade: "10",
    title: "Implementasi Terminasi UTP",
    desc: "Proyek instalasi kabel jaringan LAN berskala lab. Mencapai akurasi crimping 99% dalam pengujian Quality Control melalui LAN Tester.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "A3",
    grade: "11",
    title: "Konfigurasi Topologi Routing",
    desc: "Penerapan konsep OSPF dan BGP pada router Cisco dan Mikrotik. Menghubungkan 4 sub-jaringan berbeda tanpa adanya packet loss.",
    image:
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "A4",
    grade: "11",
    title: "Manajemen Server Linux",
    desc: "Instalasi dan pemeliharaan server berbasis Debian CLI. Meliputi pembuatan Web Server, Database, dan sistem manajemen DNS lokal.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "A5",
    grade: "12",
    title: "Ujian Kompetensi Keahlian (UKK)",
    desc: "Evaluasi akhir standar BNSP. Siswa diuji secara independen untuk membangun sistem hotspot, manajemen bandwidth, dan firewall eksternal.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "A6",
    grade: "12",
    title: "Kunjungan Industri Data Center",
    desc: "Studi banding operasional ke salah satu penyedia layanan Data Center di Jakarta, mempelajari sistem cooling, power backup, dan rack management.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", // Reused network img
  },
];

// 3. RENDER FUNGSI

function renderLeadership() {
  const container = document.getElementById("leadership-container");
  container.innerHTML = "";

  leadershipData.forEach((leader) => {
    const card = document.createElement("div");
    card.className = "leader-card";
    card.innerHTML = `
            <div class="leader-img">
                <img src="${leader.image}" alt="${leader.name}">
            </div>
            <div class="leader-info">
                <h3>${leader.name}</h3>
                <h4>${leader.role}</h4>
                <p>"${leader.quote}"</p>
            </div>
        `;
    container.appendChild(card);
  });
}

function renderGallery(filterGrade) {
  const container = document.getElementById("gallery-container");
  container.innerHTML = "";

  const filtered =
    filterGrade === "all"
      ? archiveData
      : archiveData.filter((item) => item.grade === filterGrade);

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">Tidak ada data operasional di fase ini.</p>`;
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "shell-card";
    card.onclick = () => openModal(item.id);

    card.innerHTML = `
            <div class="card-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="card-body">
                <span class="card-tag">Fase / Kelas ${item.grade}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc.substring(0, 80)}...</p>
                <div class="card-action">Baca Selengkapnya <i class="fa-solid fa-chevron-right"></i></div>
            </div>
        `;
    container.appendChild(card);
  });
}

// 4. INTERAKSI & ANIMASI

// Pengaturan Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Animasi Angka Berjalan (Counter)
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Semakin kecil semakin lambat

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + (target > 500 ? "+" : "");
      }
    };

    // Trigger animasi jika elemen terlihat di layar
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.disconnect(); // Hanya dijalankan sekali
      }
    });
    observer.observe(counter);
  });
}

// Filter Tab Galeri
function setupTabs() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      buttons.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      renderGallery(e.target.getAttribute("data-filter"));
    });
  });
}

// Modal / Lightbox System
function openModal(id) {
  const data = archiveData.find((item) => item.id === id);
  if (!data) return;

  document.getElementById("modal-image").src = data.image;
  document.getElementById("modal-tag").textContent =
    `Dokumentasi Fase ${data.grade}`;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-desc").textContent = data.desc;

  const modal = document.getElementById("archive-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("archive-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  setTimeout(() => {
    document.getElementById("modal-image").src = "";
  }, 300);
}

// Close Modal Events
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("archive-modal").addEventListener("click", (e) => {
  if (e.target.id === "archive-modal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// 5. INISIALISASI
document.addEventListener("DOMContentLoaded", () => {
  renderLeadership();
  renderGallery("all");
  setupTabs();
  animateCounters();
});

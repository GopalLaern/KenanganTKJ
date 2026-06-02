/* ==========================================================================
   TKJ 1 ANYER - CORPORATE LOGIC (SHELL THEME) + ANIMATION + MANUAL IMAGES
   ========================================================================== */

// 1. DATA MANAJEMEN / GURU (Menggunakan Foto Lokal)
const leadershipData = [
  {
    id: "L1",
    name: "Bpk. Rahmat Santoso, S.Kom",
    role: "Head of Operations (Grade 10 & 11)",
    quote:
      "Membangun fondasi infrastruktur jaringan yang presisi, sama halnya dengan mendidik integritas teknisi masa depan.",
    image: "assets/img/guru1.jpg", // <- Taruh foto di assets/img/guru1.jpg
  },
  {
    id: "L2",
    name: "Ibu Dian Pertiwi, M.T",
    role: "Senior Director (Grade 12)",
    quote:
      "Tujuan akhir kami bukan sekadar konektivitas, melainkan mempersiapkan SDM unggul untuk memimpin di era industri 4.0.",
    image: "assets/img/guru2.jpg", // <- Taruh foto di assets/img/guru2.jpg
  },
];

// 2. DATA ARSIP / MEMORI KENANGAN (18 SLOT - MASING-MASING KELAS 6 SLOT)
const archiveData = [
  // === KELAS 10 (6 SLOT FOTO) ===
  {
    id: "A1",
    grade: "10",
    title: "Masa Orientasi Kejuruan",
    desc: "Hari pertama memasuki laboratorium TKJ. Pengenalan budaya keselamatan kerja (K3LH) dan orientasi perangkat keras komputer.",
    image: "assets/img/memori1.jpg",
  },
  {
    id: "A2",
    grade: "10",
    title: "Perakitan PC & Audit Hardware",
    desc: "Praktik bongkar pasang CPU pertama kalinya. Mengenal motherboard, prosesor, RAM, dan mengatasi error pada proses booting awal.",
    image: "assets/img/memori2.jpg",
  },
  {
    id: "A3",
    grade: "10",
    title: "Instalasi Sistem Operasi",
    desc: "Membuat bootable flashdisk dan melakukan instalasi dual-boot Windows dan Linux (Ubuntu) di workstation masing-masing.",
    image: "assets/img/memori3.jpg",
  },
  {
    id: "A4",
    grade: "10",
    title: "Proyek Terminasi UTP (Crimping)",
    desc: "Momen jari-jari terluka demi menyusun urutan kabel Straight dan Cross-over. Berhasil lulus tes konektivitas 100%.",
    image: "assets/img/memori4.jpg",
  },
  {
    id: "A5",
    grade: "10",
    title: "Pengenalan Topologi Fisik",
    desc: "Praktik mengenali tata letak perangkat jaringan aktif seperti switch, hub, router, dan penataan kabel di area rack server.",
    image: "assets/img/memori5.jpg",
  },
  {
    id: "A6",
    grade: "10",
    title: "Audit Kelayakan Jaringan Lab",
    desc: "Melakukan penelusuran port switch yang aktif dan melakukan pelabelan kabel LAN secara sistematis untuk kemudahan identifikasi.",
    image: "assets/img/memori6.jpg",
  },

  // === KELAS 11 (6 SLOT FOTO) ===
  {
    id: "A7",
    grade: "11",
    title: "Konfigurasi Mikrotik Dasar",
    desc: "Pengenalan Winbox pertama kali. Mengatur IP Address, DHCP Server, dan NAT agar seluruh komputer lab bisa terkoneksi ke internet.",
    image: "assets/img/memori7.jpg",
  },
  {
    id: "A8",
    grade: "11",
    title: "Pemasangan Access Point",
    desc: "Praktik lapangan memasang dan mengonfigurasi jaringan nirkabel (Wi-Fi) di area koridor sekolah untuk akses fasilitas e-learning.",
    image: "assets/img/memori8.jpg",
  },
  {
    id: "A9",
    grade: "11",
    title: "Routing OSPF dan BGP",
    desc: "Proyek kelompok mensimulasikan jaringan antar kota. Menganalisis packet tracer dan menyelesaikan masalah looping jaringan.",
    image: "assets/img/memori9.jpg",
  },
  {
    id: "A10",
    grade: "11",
    title: "Prakerin (Praktik Kerja Industri)",
    desc: "Pelepasan siswa/i menuju perusahaan IT dan ISP. Membawa nama baik sekolah dan belajar menghadapi pelanggan secara langsung.",
    image: "assets/img/memori10.jpg",
  },
  {
    id: "A11",
    grade: "11",
    title: "Instalasi Fiber Optic (Splicing)",
    desc: "Praktik menyambung core serat optik menggunakan fusion splicer dengan ketelitian mikro dan mengukur redaman kabel menggunakan OTDR.",
    image: "assets/img/memori11.jpg",
  },
  {
    id: "A12",
    grade: "11",
    title: "Manajemen Bandwidth Sekolah",
    desc: "Melakukan pembatasan kecepatan download dan upload menggunakan metode Simple Queue agar koneksi internet sekolah terbagi adil.",
    image: "assets/img/memori12.jpg",
  },

  // === KELAS 12 (6 SLOT FOTO) ===
  {
    id: "A13",
    grade: "12",
    title: "Membangun Server Linux (Debian)",
    desc: "Begadang di lab mengonfigurasi Apache, MariaDB, PHP, dan DNS Server. Membangun fondasi web hosting mandiri untuk sekolah.",
    image: "assets/img/memori13.jpg",
  },
  {
    id: "A14",
    grade: "12",
    title: "Ujian Kompetensi Keahlian (UKK)",
    desc: "Ujian paling menegangkan! Membangun arsitektur jaringan VLAN, Hotspot Login, dan Firewall dari nol diawasi penguji eksternal.",
    image: "assets/img/memori14.jpg",
  },
  {
    id: "A15",
    grade: "12",
    title: "Lomba Kompetensi Siswa (LKS)",
    desc: "Perwakilan TKJ 1 Anyer bertanding di tingkat provinsi, menunjukkan keahlian Network System Administration kelas atas.",
    image: "assets/img/memori15.jpg",
  },
  {
    id: "A16",
    grade: "12",
    title: "Audit Keamanan Firewall Server",
    desc: "Praktik membangun pertahanan server dari serangan luar menggunakan konfigurasi iptables dan memblokir port-port rentan.",
    image: "assets/img/memori16.jpg",
  },
  {
    id: "A17",
    grade: "12",
    title: "Presentasi Proyek Tugas Akhir",
    desc: "Menyusun laporan hasil rancang bangun jaringan berskala industri menengah di hadapan tim penguji dan guru kejuruan.",
    image: "assets/img/memori17.jpg",
  },
  {
    id: "A18",
    grade: "12",
    title: "Shutdown: Momen Perpisahan",
    desc: "Mencabut kabel patch cord untuk terakhir kalinya. Meninggalkan laboratorium dengan sejuta ilmu, siap menyambut dunia profesional.",
    image: "assets/img/memori18.jpg",
  },
];

// 3. OBSERVER ANIMASI SCROLL (Staggered Fade-In)
const scrollObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

function observeElements() {
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    scrollObserver.observe(el);
  });
}

// 4. RENDER FUNGSI (Galeri & Manajemen)
function renderLeadership() {
  const container = document.getElementById("leadership-container");
  leadershipData.forEach((leader) => {
    container.innerHTML += `
            <div class="leader-card animate-on-scroll">
                <div class="leader-img"><img src="${leader.image}" alt="${leader.name}"></div>
                <div class="leader-info">
                    <h3>${leader.name}</h3>
                    <h4>${leader.role}</h4>
                    <p>"${leader.quote}"</p>
                </div>
            </div>
        `;
  });
}

function renderGallery(filterGrade) {
  const container = document.getElementById("gallery-container");
  container.innerHTML = "";

  const filtered =
    filterGrade === "all"
      ? archiveData
      : archiveData.filter((item) => item.grade === filterGrade);

  filtered.forEach((item, index) => {
    const delay = index * 0.1;
    const card = document.createElement("div");
    card.className = "shell-card animate-on-scroll";
    card.style.transitionDelay = `${delay}s`;
    card.onclick = () => openModal(item.id);

    card.innerHTML = `
            <div class="card-img"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
            <div class="card-body">
                <span class="card-tag">Fase / Kelas ${item.grade}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc.substring(0, 75)}...</p>
                <div class="card-action">Selengkapnya <i class="fa-solid fa-chevron-right"></i></div>
            </div>
        `;
    container.appendChild(card);
  });

  observeElements();
}

// 5. INTERAKSI & SISTEM

// Sticky Header
window.addEventListener("scroll", () => {
  document
    .getElementById("header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Counter Animasi
function animateCounters() {
  document.querySelectorAll(".counter").forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target + (target > 100 ? "+" : "");
      }
    };
    new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        updateCount();
        obs.disconnect();
      }
    }).observe(counter);
  });
}

// Filter Tabs Logic
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

// Modal Logic
function openModal(id) {
  const data = archiveData.find((item) => item.id === id);
  if (!data) return;
  document.getElementById("modal-image").src = data.image;
  document.getElementById("modal-tag").textContent =
    `Dokumentasi Fase ${data.grade}`;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-desc").textContent = data.desc;

  document.getElementById("archive-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("archive-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
  setTimeout(() => {
    document.getElementById("modal-image").src = "";
  }, 300);
}

document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("archive-modal").addEventListener("click", (e) => {
  if (e.target.id === "archive-modal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Local Audio Music Player
function setupMusicPlayer() {
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");
  const equalizer = document.getElementById("equalizer");

  music.volume = 0.4;

  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music
        .play()
        .then(() => {
          toggleBtn.classList.add("playing");
          equalizer.classList.remove("hidden");
        })
        .catch((err) => {
          console.log("Browser block auto-play. Click again.", err);
        });
    } else {
      music.pause();
      toggleBtn.classList.remove("playing");
      equalizer.classList.add("hidden");
    }
  });
}

// Mobile Menu Hamburger
function setupMobileMenu() {
  const menuBtn = document.querySelector(".btn-menu");
  const closeBtn = document.getElementById("close-drawer");
  const drawer = document.getElementById("mobile-drawer");

  const overlay = document.createElement("div");
  overlay.className = "drawer-overlay";
  document.body.appendChild(overlay);

  function toggleMenu() {
    drawer.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = drawer.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  menuBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  drawer.querySelectorAll("ul a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
}

// 7. INISIALISASI UTAMA
document.addEventListener("DOMContentLoaded", () => {
  observeElements();
  renderLeadership();
  renderGallery("all");
  setupTabs();
  animateCounters();
  setupMusicPlayer();
  setupMobileMenu();
});

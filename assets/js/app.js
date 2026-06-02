/* ==========================================================================
   TKJ 1 ANYER - CORPORATE LOGIC (SHELL THEME) + ANIMATION + MANUAL IMAGES
   ========================================================================== */

// 1. DATA MANAJEMEN / GURU (Menggunakan Foto Lokal)
const leadershipData = [
  {
    id: "L1",
    name: "Nurulaini, S.Pd",
    role: "Walikelas (Kelas 10)",
    quote: "Nothing is impossible",
    image: "assets/img/guru1.jpeg", // <- Taruh foto di assets/img/guru1.jpg
  },
  {
    id: "L2",
    name: "Kamal Maulana, S.Kom ",
    role: "Walikelas (Kelas 11 & 12)",
    quote:
      "Aku bagikan ilmu ini semampuku dan pengalaman belajar ku dan itu pun hanya sebagian saja, sisa bagian lainnya adalah tanggung jawab kalian",
    image: "assets/img/guru2.jpeg", // <- Taruh foto di assets/img/guru2.jpg
  },
];

// 2. DATA ARSIP / MEMORI KENANGAN (18 SLOT - MASING-MASING KELAS 6 SLOT)
const archiveData = [
  // === KELAS 10 (6 SLOT FOTO) ===
  {
    id: "A1",
    grade: "10",
    title: "MPLS",
    desc: "Hari pertama masuk smk dan ketemu satu sama lain masih malu malu🤭.",
    image: "assets/img/memori1.jpg",
  },
  {
    id: "A2",
    grade: "10",
    title: "MOP",
    desc: "Huh grasak gerusuk nyebur ke endut sawah wkwk memorable banget.",
    image: "assets/img/memori2.jpg",
  },
  {
    id: "A3",
    grade: "10",
    title: "FIRST TIME JADI PETUGAS UPACARA",
    desc: "Kangen upacara ga sih guys :)",
    image: "assets/img/memori3.jpg",
  },
  {
    id: "A4",
    grade: "10",
    title: "PILKETOS PERTAMA",
    desc: "Kalian inget ga nih milih siapa waktu itu",
    image: "assets/img/memori4.jpg",
  },
  {
    id: "A5",
    grade: "10",
    title: "BUKBER PERTAMA",
    desc: "First time bukber nih yee.",
    image: "assets/img/memori5.jpeg",
  },
  {
    id: "A6",
    grade: "10",
    title: "BAGI RAPORT KELAS 10",
    desc: "Bu Nurul selesai jadi walikelas 10 tkj 1 :(",
    image: "assets/img/memori6.jpeg",
    video: "assets/video/BuNurul.mp4",
  },

  // === KELAS 11 (6 SLOT FOTO) ===
  {
    id: "A7",
    grade: "11",
    title: "FIRST TIME DIAJAR PA KAMAL",
    desc: "Tegang banget nih kayaknya🤭",
    image: "assets/img/memori7.jpeg",
  },
  {
    id: "A8",
    grade: "11",
    title: "Maulid Nabi",
    desc: "Fotbar pertama sama Pa Kamal nih yee",
    image: "assets/img/memori8.jpeg",
  },
  {
    id: "A9",
    grade: "11",
    title: "STUDYTOUR",
    desc: "Asik ya jalan-jalannn hihi",
    image: "assets/img/memori9.jpeg",
    video: "assets/video/StudyTour.mp4",
  },
  {
    id: "A10",
    grade: "11",
    title: "BUKBER KEDUA",
    desc: "Pada mokel ga nih pas lagi PKL hahaha.",
    image: "assets/img/memori10.jpeg",
    video: "assets/video/trendbukber.mp4",
  },
  {
    id: "A11",
    grade: "11",
    title: "NORMAL DAY WITH THE BOYS",
    desc: "Jadi kangen bercanda bareng deh :)",
    image: "assets/img/memori11.jpeg",
    video: "assets/video/hujannnn.mp4",
  },
  {
    id: "A12",
    grade: "11",
    title: "Classmeet",
    desc: "RUSUH BANGETTT HAHAHA",
    image: "assets/img/memori12.jpeg",
    video: "assets/video/classmeet.mp4",
  },

  // === KELAS 12 (6 SLOT FOTO) ===
  {
    id: "A13",
    grade: "12",
    title: "JADI PETUGAS UPACARA TERAKHIR",
    desc: "Abis jadi petugas upacara lanjut foto 3x4 untuk ijazah ga kerasa ya :)",
    image: "assets/img/memori13.jpeg",
  },
  {
    id: "A14",
    grade: "12",
    title: "LAST PHOTO TOGETHER IN A CLASSROOM",
    desc: "no komen sedih banget jujur :(",
    image: "assets/img/memori14.jpeg",
  },
  {
    id: "A15",
    grade: "12",
    title: "MBG TERAKHIR",
    desc: "Bakal kangen makan mbg bareng sama kalian :(",
    image: "assets/img/memori15.jpg",
    video: "assets/video/lastmbg.mp4",
  },
  {
    id: "A16",
    grade: "12",
    title: "UKOM",
    desc: "Sukses yeee done ukommm, ga seserem yang dibayangin kok ternyata guys :)",
    image: "assets/img/memori16.jpeg",
    video: "assets/video/ukomdone.mp4",
  },
  {
    id: "A17",
    grade: "12",
    title: "FOTO YEARBOOK",
    desc: "GAYA DULUU CEKREKK😎",
    image: "assets/img/memori17.jpeg",
  },
  {
    id: "A18",
    grade: "12",
    title: "PERPISAHAN",
    desc: "Selamat semoga sukses dan sehat terus kalian semua di mana pun kalian berada :(",
    image: "assets/img/memori18.jpeg",
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

    // Render Ikon Play jika item tersebut memiliki berkas Video lokal
    const playIconHTML = item.video
      ? `<div class="card-play-icon"><i class="fa-solid fa-play"></i></div>`
      : "";

    card.innerHTML = `
            <div class="card-img">
                ${playIconHTML}
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
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

// Modal Logic (Mendukung Deteksi Gambar & Video Secara Hibrida)
function openModal(id) {
  const data = archiveData.find((item) => item.id === id);
  if (!data) return;

  const modalImage = document.getElementById("modal-image");
  const modalVideo = document.getElementById("modal-video");

  document.getElementById("modal-tag").textContent =
    `Dokumentasi Fase ${data.grade}`;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-desc").textContent = data.desc;

  if (data.video) {
    modalImage.classList.add("hidden");
    modalVideo.classList.remove("hidden");
    modalVideo.src = data.video;
    modalVideo.play();
  } else {
    modalVideo.classList.add("hidden");
    modalImage.classList.remove("hidden");
    modalImage.src = data.image;
  }

  document.getElementById("archive-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modalVideo = document.getElementById("modal-video");

  // Pause video agar audio tidak bocor saat modal ditutup
  modalVideo.pause();
  modalVideo.src = "";

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

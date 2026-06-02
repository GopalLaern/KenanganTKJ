/* ==========================================================================
   TKJ 1 ARCHIVE - SHELL LOGIC
   ========================================================================== */

// 1. DATA: Sysadmins (Wali Kelas)
const teacherData = [
  {
    id: "sys-01",
    name: "Bpk. Rahmat Santoso, S.Kom",
    role: "root / Wali Kelas 10 & 11",
    quote: "# sudo systemctl restart motivasi",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "sys-02",
    name: "Ibu Dian Pertiwi, M.T",
    role: "admin / Wali Kelas 12",
    quote: "# ping 127.0.0.1 - Tidak ada tempat sebaik rumah (kelas)",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=400&auto=format&fit=crop",
  },
];

// 2. DATA: Memories
const memoryData = [
  {
    id: "mem-10-1",
    grade: "10",
    filename: "crimping_fail.jpg",
    title: "Tragedi Kabel Cross",
    desc: "Satu kelas gagal ping karena salah urutan kabel. Tester kabel menyala acak.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "mem-10-2",
    grade: "10",
    filename: "ip_conflict.png",
    title: "IP Conflict Masal",
    desc: "Uji coba DHCP Server malah bikin satu lab bentrok IP Address.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "mem-11-1",
    grade: "11",
    filename: "mikrotik_loop.jpg",
    title: "Looping Jaringan",
    desc: "Salah seting bridge di Winbox, seluruh switch hang dan lampu indikator kedip bersamaan.",
    image:
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "mem-11-2",
    grade: "11",
    filename: "subnetting.jpg",
    title: "Mabuk Subnetting",
    desc: "Menghitung VLSM di papan tulis sampai penuh, hasil akhirnya tetep salah broadcast.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "mem-12-1",
    grade: "12",
    filename: "ukk_proxy.jpg",
    title: "UKK Proxy Server",
    desc: "Ujian Kompetensi Keahlian, deg-degan blokir situs via proxy sambil diawasi asesor.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "mem-12-2",
    grade: "12",
    filename: "shutdown_now.jpg",
    title: "Perpisahan Lab",
    desc: "Melepas kabel patch cord terakhir sebelum lulus. init 0.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
  },
];

// 3. RENDER FUNCTIONS

function renderTeachers() {
  const container = document.getElementById("teachers-container");
  container.innerHTML = "";

  teacherData.forEach((teacher) => {
    const item = document.createElement("div");
    item.className = "admin-item";
    item.innerHTML = `
            <img src="${teacher.image}" alt="${teacher.name}">
            <div class="admin-details">
                <span class="admin-name">${teacher.name}</span>
                <span class="admin-role">[${teacher.role}]</span>
                <span class="admin-quote">${teacher.quote}</span>
            </div>
        `;
    container.appendChild(item);
  });
}

function renderGallery(filterGrade) {
  const container = document.getElementById("gallery-container");
  container.innerHTML = "";

  const filtered =
    filterGrade === "all"
      ? memoryData
      : memoryData.filter((m) => m.grade === filterGrade);

  if (filtered.length === 0) {
    container.innerHTML = `<span style="color: var(--text-muted)">ls: no records found</span>`;
    return;
  }

  filtered.forEach((mem) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.onclick = () => openViewer(mem.id);

    item.innerHTML = `
            <div class="img-box">
                <img src="${mem.image}" alt="${mem.filename}" loading="lazy">
            </div>
            <span class="file-name">./${mem.filename}</span>
            <span class="file-meta">-rw-r--r-- Grade ${mem.grade}</span>
        `;
    container.appendChild(item);
  });
}

// 4. INTERACTION & MODAL LOGIC

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove active class from all
      buttons.forEach((b) => b.classList.remove("active"));
      // Add active to clicked
      e.target.classList.add("active");
      // Render gallery
      const filterValue = e.target.getAttribute("data-filter");
      renderGallery(filterValue);
    });
  });
}

function openViewer(id) {
  const mem = memoryData.find((m) => m.id === id);
  if (!mem) return;

  document.getElementById("modal-filename").textContent = mem.filename;
  document.getElementById("modal-img").src = mem.image;
  document.getElementById("modal-title").textContent = mem.title;
  document.getElementById("modal-grade").textContent = mem.grade;
  document.getElementById("modal-desc").textContent = mem.desc;

  const viewer = document.getElementById("image-viewer");
  viewer.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeViewer() {
  const viewer = document.getElementById("image-viewer");
  viewer.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restore scrolling

  // Clear image src so it doesn't flash old image next time
  setTimeout(() => {
    document.getElementById("modal-img").src = "";
  }, 200);
}

// Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeViewer();
});

// Set current date for "Last login"
function setCurrentDate() {
  const dateSpan = document.getElementById("current-date");
  const now = new Date();
  dateSpan.textContent = now.toString().split(" GMT")[0]; // Simple format string
}

// 5. INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  setCurrentDate();
  renderTeachers();
  renderGallery("all");
  setupFilters();
});

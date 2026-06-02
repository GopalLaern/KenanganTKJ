/* ==========================================================================
   TKJ 1 - DIGITAL ARCHIVE SYSTEM - CORE LOGIC
   ========================================================================== */

// 1. Data Structure: System Administrators (Homeroom Teachers)
const teacherData = [
  {
    id: "sysadmin-1",
    name: "Bpk. Rahmat Santoso, S.Kom",
    role: "SYSADMIN / WALI KELAS 10 & 11",
    quote: '"sudo rm -rf /kemalasan && apt-get install semangat"',
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "root-1",
    name: "Ibu Dian Pertiwi, M.T",
    role: "ROOT / WALI KELAS 12",
    quote: '"Koneksi putus bisa disambung, harapan putus routingnya kemana?"',
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=600&auto=format&fit=crop",
  },
];

// 2. Data Structure: Memory Archive (Grades 10 - 12)
const memoryData = [
  {
    id: "mem-001",
    classLevel: "10",
    title: "Crimping Cable Disaster",
    desc: "Momen bersejarah: Susunan kabel Cross dan Straight tertukar massal. Ping Request Timed Out seharian penuh 1 Lab.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mem-002",
    classLevel: "10",
    title: "IP Conflict Momen",
    desc: "DHCP Server bentrok karena ada router siluman yang diam-diam dinyalakan di pojok kelas. Tracert jadi pusing.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mem-003",
    classLevel: "11",
    title: "Instalasi Mikrotik",
    desc: "Pertama kali pegang Winbox. Berakhir dengan Looping Jaringan 1 lab, switch hang, dan lampu indikator kedip-kedip disko.",
    image:
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mem-004",
    classLevel: "11",
    title: "Subnetting Pusing",
    desc: "Ujian tertulis menghitung prefix /27 dan /29. Pakai jari sampai keriting, ujung-ujungnya broadcast address salah.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mem-005",
    classLevel: "12",
    title: "Ujikom Tegang",
    desc: "Ujian Kompetensi Keahlian (UKK). Konfigurasi OSPF, VLAN, dan Proxy Server sambil tremor diawasi asesor eksternal.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mem-006",
    classLevel: "12",
    title: "Perpisahan Server",
    desc: "Shutdown system for the last time. Melepas kabel UTP terakhir, mematikan rack server, dan siap menghadapi realita.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", // Reused aesthetic tech img
  },
];

// 3. Render Functions

// Render Homeroom Teachers
function renderTeachers() {
  const container = document.getElementById("teachers-grid");
  container.innerHTML = ""; // Clear existing

  teacherData.forEach((teacher) => {
    const card = `
            <div class="term-box-cyan flex flex-col sm:flex-row p-4 gap-4 items-center">
                <div class="w-24 h-24 shrink-0 rounded-sm overflow-hidden border border-cyan relative">
                    <div class="absolute inset-0 bg-cyan/20 z-10 mix-blend-overlay"></div>
                    <img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover grayscale brightness-125">
                </div>
                <div class="flex flex-col gap-1 w-full">
                    <div class="text-cyan font-bold border-b border-gray-700 pb-1 text-lg">
                        <i class="fa-solid fa-user-shield mr-2"></i>${teacher.name}
                    </div>
                    <div class="text-xs text-matrix bg-matrix/10 inline-block px-2 py-1 mt-1 border border-matrix self-start">
                        [ ${teacher.role} ]
                    </div>
                    <div class="text-gray-400 text-sm mt-2 italic">
                        > ${teacher.quote}
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += card;
  });
}

// Render Gallery Cards Based on Filter
function renderGallery(filterLevel) {
  const container = document.getElementById("photo-grid");
  container.innerHTML = ""; // Clear existing

  const filteredData =
    filterLevel === "all"
      ? memoryData
      : memoryData.filter((mem) => mem.classLevel === filterLevel);

  if (filteredData.length === 0) {
    container.innerHTML = `<p class="text-red-500">> Error: No directories found for this query.</p>`;
    return;
  }

  filteredData.forEach((item) => {
    const card = `
            <div class="term-box group cursor-pointer flex flex-col" onclick="openLightbox('${item.id}')">
                <div class="term-img-container h-48 w-full">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                </div>
                <div class="p-4 flex flex-col flex-1 bg-black/50 group-hover:bg-matrix/5 transition-colors">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-cyan text-sm font-bold">./${item.title.replace(/\s+/g, "-").toLowerCase()}</span>
                        <span class="text-xs border border-matrix px-1 text-matrix">GR-${item.classLevel}</span>
                    </div>
                    <p class="text-gray-400 text-xs mt-2 flex-1 line-clamp-3">> ${item.desc}</p>
                    <div class="mt-4 text-xs text-matrix opacity-0 group-hover:opacity-100 transition-opacity">
                        [ Click to execute view ] <span class="blinking-cursor">_</span>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += card;
  });
}

// 4. Interaction Functions

// Handle Filter Button Clicks
function filterGallery(level) {
  // Update active class on buttons
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    // Match string content logic for setting active state
    if (
      (level === "all" && btn.textContent.includes("all-memories")) ||
      (level === "10" && btn.textContent.includes("kelas-10")) ||
      (level === "11" && btn.textContent.includes("kelas-11")) ||
      (level === "12" && btn.textContent.includes("kelas-12"))
    ) {
      btn.classList.add("active");
    }
  });

  // Re-render gallery
  renderGallery(level);
}

// Open Lightbox (Vim Modal)
function openLightbox(id) {
  const memory = memoryData.find((mem) => mem.id === id);
  if (!memory) return;

  document.getElementById("lightbox-img").src = memory.image;
  document.getElementById("lightbox-title").innerText = memory.title;
  document.getElementById("lightbox-level").innerText = memory.classLevel;
  document.getElementById("lightbox-desc").innerText = memory.desc;

  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");

  // Prevent background scrolling
  document.body.style.overflow = "hidden";
}

// Close Lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");

  // Restore background scrolling
  document.body.style.overflow = "auto";
}

// Close Lightbox via Escape Key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// 5. Initialize System
document.addEventListener("DOMContentLoaded", () => {
  renderTeachers();
  renderGallery("all");
});

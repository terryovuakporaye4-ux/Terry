const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");
const demoModal = document.getElementById("demoModal");
const demoFrame = document.getElementById("demoFrame");
const demoTitle = document.getElementById("demoTitle");
const closeDemo = document.getElementById("closeDemo");
const previewButtons = document.querySelectorAll(".preview-btn");

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

if (demoModal && demoFrame && demoTitle && closeDemo) {
  const openPreview = (url, title) => {
    demoFrame.src = url;
    demoTitle.textContent = title;
    demoModal.classList.add("open");
    demoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    demoModal.classList.remove("open");
    demoModal.setAttribute("aria-hidden", "true");
    demoFrame.src = "";
    document.body.style.overflow = "";
  };

  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.dataset.demo || "";
      const title = button.dataset.title || "Project preview";
      openPreview(url, title);
    });
  });

  closeDemo.addEventListener("click", closePreview);
  demoModal.addEventListener("click", (event) => {
    if (event.target === demoModal) closePreview();
  });
}

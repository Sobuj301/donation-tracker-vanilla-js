const buttonRow = document.getElementById("buttonRow");

function toggleButtonRowBg() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 50) {
    buttonRow.classList.add("bg-white/30", "backdrop-blur-md", );
    buttonRow.classList.remove("bg-transparent");
  } else {
    buttonRow.classList.remove("bg-white/30", "backdrop-blur-md",);
    buttonRow.classList.add("bg-transparent");
  }
}

// Scroll event
document.addEventListener("scroll", toggleButtonRowBg);
// Page load check
document.addEventListener("DOMContentLoaded", toggleButtonRowBg);

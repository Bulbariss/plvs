window.onload = function() {
  const screenWidth = window.matchMedia("(min-width: 640px)");

  function toggleNav() {
    document.getElementById("menu").classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("scroll-lock");
  }

  function disableNav() {
    if (
      screenWidth.matches &&
      document.getElementById("menu").classList.contains("active")
    ) {
      document.getElementById("checkbox").click();
      document.getElementById("menu").classList.remove("active");
      document.getElementsByTagName("body")[0].classList.remove("scroll-lock");
    }
  }
  document.getElementById("checkbox").addEventListener("click", toggleNav);
  window.addEventListener("resize", disableNav);

  (function() {
    // d
  })();
};

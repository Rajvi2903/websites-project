document.addEventListener("DOMContentLoaded", function() {
    var missionButton = document.querySelector(".btn");
    var missionSection = document.querySelector(".third");
  
    missionButton.addEventListener("click", function() {
      // Toggle the visibility of the 'third' section and background image
      if (missionSection.style.display === "none") {
        missionSection.style.display = "block";
        document.querySelector(".img3").style.display = "block";
      } else {
        missionSection.style.display = "none";
        document.querySelector(".img3").style.display = "none";
      }

      missionSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
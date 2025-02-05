// F&Q JS starts
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".plus-icon");

    // Toggle the answer visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "+";
    } else {
      answer.style.display = "block";
      icon.textContent = "-";
    }
  });
});

// Select all stars
const stars = document.querySelectorAll(".star");

// Add click event listener to each star
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // Reset all stars to regular and gray before marking
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.remove("fa-regular");
        s.classList.add("fa-solid", "gold");
      } else {
        s.classList.remove("fa-solid", "gold");
        s.classList.add("fa-regular");
      }
    });
  });
});
// F&Q JS Ends

// about us starts
  // our Story 
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const totalItems = timeline.children.length;
  const visibleItems = 4;
  let currentIndex = 0;

  function updateTimeline() {
    const offset = -(currentIndex * 25); // Each item takes 25% of the width
    timeline.style.transform = `translateX(${offset}%)`;
  }

  function autoScrollTimeline() {
    currentIndex = (currentIndex + 1) % (totalItems - visibleItems + 1);
    updateTimeline();
  }

  setInterval(autoScrollTimeline, 3010); // Automatically scroll every 3 seconds
});
// about us ends

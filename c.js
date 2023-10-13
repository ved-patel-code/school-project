const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides[slideIndex].style.display = "block";
}

function hideSlide(slideIndex) {
  slides[slideIndex].style.display = "none";
}

function nextSlide() {
  hideSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Set an interval to switch slides (e.g., every 5 seconds)
setInterval(nextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)


const sub = document.getElementById("ss");

function submit() {
  var unit = document.getElementById("unit").value;
  var bill = document.getElementById("bill").value;
  var area = document.getElementById("area").value;
  var y = area * 130; //gives area req for plant
  var x = area * 4; // give units produced by palnt in day
  var b = x * unit; //gives 1 day money produced by solar
  var a = b * 30 - bill;

  let north = document.getElementById("north");
  let south = document.getElementById("south");
  if (north.checked) {
    document.getElementById("out").innerHTML =
      "total units in 1 day produce by plant = " +
      x +
      "<br>" +
      "area req to set up solar plant = " +
      y +  " sq feet"+
      "<br>" +
      "your savings = " +
      a +
      "<br>" +
      "solar panel should face in south direction during installing ";
  } else if (south.checked) {
    document.getElementById("out").innerHTML =
      "total units in 1 day produce by plant = " +
      x +
      "<br>" +
      "area req to set up solar plant = " +
      y +  " sq feet"+
      "<br>" +
      "your savings = " +
      a +
      "<br>" +
      "solar panel should face in north direction during installing";
  } else {
    document.getElementById("out").innerHTML = "please select location";
  }
}
sub.addEventListener("click", submit);





function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // When the section is in the viewport, animate it in from the left
      const statisticsSection = document.querySelector(".statistics");
      statisticsSection.style.transform = "translateX(0)";
    }
  });
}

// Create an Intersection Observer to watch for when the statistics section enters the viewport
const observer = new IntersectionObserver(handleIntersection);

// Target the statistics section
const statisticsSection = document.querySelector(".statistics");

// Observe the statistics section
observer.observe(statisticsSection);

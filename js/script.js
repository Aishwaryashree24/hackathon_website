document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});
fetch("/hackathon/home/")
  .then((response) => response.json())
  .then((data) => {
    const eventName = data.name;
    const eventStartDate = data.start_date;
    const eventEndDate = data.end_date;
    const contactNumber = data.contact_number;
    const rounds = data.rounds;
    const announcements = data.announcements;
    const organizers = data.organizers;

  
    document.getElementById("event-name").textContent = eventName;
    document.getElementById("event-start-date").textContent = eventStartDate;
    document.getElementById("event-end-date").textContent = eventEndDate;
    document.getElementById("contact-number").textContent = contactNumber;

  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


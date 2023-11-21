// Sample data for enrolled courses (replace with dynamic data later)
const enrolledCourses = [
    { name: "Computer Science 101", description: "Introduction to Programming" },
    { name: "Mathematics 201", description: "Calculus and Analytical Geometry" },
    { name: "History 150", description: "World History: Ancient to Modern" },
];

// Function to dynamically create course cards
function createCourseCard(course) {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = `
        <h2>${course.name}</h2>
        <p>${course.description}</p>
    `;
    
    // Add a click event to navigate to the course page (will be implemented later)
    card.addEventListener("click", () => {
        // Implement navigation to the course page
        console.log(`Clicked on ${course.name} card`);
    });

    return card;
}

// Function to display enrolled courses on the homepage
function displayEnrolledCourses() {
    const coursesContainer = document.getElementById("courses-container");

    // Clear existing content
    coursesContainer.innerHTML = "";

    // Create and append course cards
    enrolledCourses.forEach(course => {
        const card = createCourseCard(course);
        coursesContainer.appendChild(card);
    });
}

// Display enrolled courses on page load
window.onload = displayEnrolledCourses;

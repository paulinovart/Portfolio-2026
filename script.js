const projects = document.querySelectorAll(".home-page-project");

projects.forEach(project => {
  project.addEventListener("click", () => {
    const id = project.dataset.id;

    window.location.href = `project.html?id=${id}`;
  });
});



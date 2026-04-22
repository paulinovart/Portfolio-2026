const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

fetch("projects.json")
  .then(res => res.json())
  .then(data => {

    const project = data[projectId];
    if (!project) return;

    // TITLE
    document.getElementById("project-title").textContent = project.title;

    // TAGS
    const tagsContainer = document.getElementById("project-tags");

    project.tags.forEach(tag => {
      const p = document.createElement("p");
      p.className = "project-page-projct-tag";
      p.textContent = "#" + tag;
      tagsContainer.appendChild(p);
    });

    // STEPS
    const container = document.getElementById("project-steps");
    function renderFull(step) {

      const div = document.createElement("div");
      div.className = "project-page-step-full";
      div.className = "project-page-step";
    
      div.innerHTML = `
        <div class="project-page-step-full-cover">
          <img src="${step.image}">
        </div>
    
        <div class="project-page-step-full-text">
          <h5>${step.title}</h5>
          <h6>${step.description}</h6>
        </div>
      `;
    
      return div;
    }
    function renderDouble(step) {

      const wrapper = document.createElement("div");
      wrapper.className = "project-page-step-double-container";


    
      step.items.forEach(item => {
    
        const div = document.createElement("div");
        div.className = "project-page-step-double";
    
        div.innerHTML = `
          <div class="project-page-step-double-cover">
            <img src="${item.image}">
          </div>
    
          <div class="project-page-step-double-text">
            <h5>${item.title}</h5>
            <h6>${item.description}</h6>
          </div>
        `;
    
        wrapper.appendChild(div);
      });
    
      return wrapper;
    }
    project.steps.forEach(step => {

      if (step.type === "full") {
        container.appendChild(renderFull(step));
      }

      if (step.type === "double") {
        container.appendChild(renderDouble(step));
      }

    });

  });
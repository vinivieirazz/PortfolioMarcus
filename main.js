const userData = {
    name: "Marcus Vinicius Vieira",
    designation: "Estudante de Ciência da Computação - IFSC",
    about: "Sou estudante de Ciência da Computação no IFSC campus Lages. Apaixonado por tecnologia e desenvolvimento de soluções criativas, atualmente estou focado em aprender e aplicar conceitos de programação, desenvolvimento web e lógica computacional, sempre buscando evoluir minhas habilidades técnicas e pessoais. Gosto de desafios e acredito que a prática constante é o caminho para transformar conhecimento em resultado.",
    projects: [
        { title: "Projeto de Templates", link: "https://github.com/seuGit/site-simples" }
    ],
    contact: {
        email: "marcus.vv20@aluno.ifsc.edu.br"
    }
};

//adiciona as informações no HTML
document.getElementById("name").innerText = userData.name;
document.getElementById("designation").innerText = userData.designation;
document.querySelector("#about p").innerText = userData.about;
document.getElementById("email").innerText = userData.contact.email;

// Adiciona os projetos
const projectsDiv = document.getElementById("projects-list");
userData.projects.forEach(project => {
    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.innerText = project.title;
    projectsDiv.appendChild(link);
});

// Lógica de troca de tema com Bootstrap Icons
const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    // Alternar ícone
    if (document.body.classList.contains("light")) {
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");
    } else {
        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");
    }
});


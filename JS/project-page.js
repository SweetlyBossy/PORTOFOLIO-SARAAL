import { projects } from './projects.js';

function displayProjectCards () {
    const displayArea = document.querySelector('.display-area');
    displayArea.innerHTML = '';

    projects.forEach(projects => {
        const projectCards = document.createElement('article');
        projectCards.classList.add('project-card');
        projectCards.innerHTML = `
        <h2 class="project-name">${projects.title}</h2>
        <h5 class="project-name-smaller">${projects.subTitle}</h5>
        <img src="${projects.media.url}" alt="${projects.media.alt}" class="project-img"/>
        <p class="short-description">${projects.description.short}</p>
        <p class="short-tech">${projects.description.techShort}</p>


        <div class="button-container">
        <a href="${projects.link.githubRepoLink}"><button class="project-button">GITHUB REPO</button></a>
        <a href="${projects.link.deploymentLink}"><button class="project-button">DEPLOYMENT LINK</button></a>
        </div>
        `;
        displayArea.appendChild(projectCards);

        projectCards.addEventListener('click', (event) => {
            if(!event.target.closest('.project-button')){
                window.location.href = `project-specific.html?id=${projects.id}`;
            }
        });
    })
}
displayProjectCards();
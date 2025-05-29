import { projects } from './projects.js';

const params = new URLSearchParams(window.location.search)
const projectId = params.get('id');

const specificPost = projects.find(projects => projects.id === Number (projectId));



function displayProject () {
    const displayArea = document.querySelector('.display-area');
    displayArea.innerHTML = '';

        const projectCards = document.createElement('article');
        projectCards.classList.add('project-card');
        projectCards.innerHTML = `
        <h2 class="project-name">${projects.title}</h2>
        <h5 class="project-name-smaller">${projects.subTitle}</h5>
        <img src="${projects.media.url}" alt="${projects.media.alt}" class="project-img"/>
        <p class="short-description">${projects.description.main}</p>
        <p class="short-tech">${projects.description.techMain}</p>


        <div class="button-container">
        <a href="${projects.link.githubRepoLink}"><button class="project-button">GITHUB REPO</button></a>
        <a href="${projects.link.deploymentLink}"><button class="project-button">DEPLOYMENT LINK</button></a>
        </div>
        `;
}
displayProject();
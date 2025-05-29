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
        <h2 class="project-name">${specificPost.title}</h2>
        <h5 class="project-name-smaller">${specificPost.subTitle}</h5>
        <img src="${specificPost.media.url}" alt="${specificPost.media.alt}" class="project-img"/>
        <p class="short-description">${specificPost.description.main}</p>
        <p class="short-tech">${specificPost.description.techMain}</p>


        <div class="button-container">
        <a href="${specificPost.link.githubRepoLink}"><button class="project-button">GITHUB REPO</button></a>
        <a href="${specificPost.link.deploymentLink}"><button class="project-button">DEPLOYMENT LINK</button></a>
        </div>
        `;
        displayArea.appendChild(projectCards);
}
displayProject();
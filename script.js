let currentPoemIndex = 0;
const poems = [
    'poem1.html',
    'poem2.html',
    'poem3.html',
    'poem4.html',
    'poem5.html',
    'poem6.html',
    'poem7.html',
    'poem8.html',
    'poem9.html',
    'poem10.html',
    'poem11.html',
];

async function loadPoem(index) {
    const container = document.getElementById('poems-container');

    try {
        const response = await fetch(`poems/${poems[index]}`);
        const poemHtml = await response.text();
        container.innerHTML = poemHtml;
        updateNavigationState();
    } catch (error) {
        console.error('Error loading poem:', error);
        container.innerHTML = '<p>Error loading poem</p>';
    }
}

function updateNavigationState() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const poemCounter = document.getElementById('poem-counter');

    prevButton.disabled = currentPoemIndex === 0;
    nextButton.disabled = currentPoemIndex === poems.length - 1;
    poemCounter.textContent = `${currentPoemIndex + 1} / ${poems.length}`;
}

function nextPoem() {
    if (currentPoemIndex < poems.length - 1) {
        currentPoemIndex++;
        loadPoem(currentPoemIndex);
    }
}

function prevPoem() {
    if (currentPoemIndex > 0) {
        currentPoemIndex--;
        loadPoem(currentPoemIndex);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPoem(currentPoemIndex);
});

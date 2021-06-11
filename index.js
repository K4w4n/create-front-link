const createLinkButton = document.querySelector('#criar-link');
const inputFile = document.querySelector('#input-arquivo');

createLinkButton.addEventListener('click', createFileUrl);

function createFileUrl() {
    const file = inputFile.files[0];
    const fileLink = URL.createObjectURL(file);
    window.open(fileLink);
}

//futue update using URL.revokeObjectURL
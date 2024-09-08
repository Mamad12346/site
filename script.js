// script.js

const urlInput = document.getElementById('url-input');
const getHtmlButton = document.getElementById('get-html-button');
const output = document.getElementById('output');

getHtmlButton.addEventListener('click', async () => {
    const url = urlInput.value;
    try {
        const response = await fetch(url);
        const html = await response.text();
        output.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
});
});
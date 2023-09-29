// Function to apply document formatting commands
function formatDoc(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

// Function to add a hyperlink
function addLink() {
    const url = prompt('Insert url');
    formatDoc('createLink', url);
}

// Get references to HTML elements
const content = document.getElementById('content');
const showCode = document.getElementById('show-code');
let active = false;

// Toggle between WYSIWYG and HTML view
showCode.addEventListener('click', function () {
    showCode.dataset.active = !active;
    active = !active;

    if (active) {
        // Switch to HTML view
        content.textContent = content.innerHTML;
        content.setAttribute('contenteditable', false);
    } else {
        // Switch back to WYSIWYG view
        content.innerHTML = content.textContent;
        content.setAttribute('contenteditable', true);
    }
});

// Function to toggle HTML view
function toggleHtmlView() {
    const content = document.getElementById('content');
    const showCode = document.getElementById('show-code');
    const htmlCodeContainer = document.getElementById('html-code-container');
    const htmlCodeTextarea = document.getElementById('html-code');

    if (htmlCodeContainer.style.display === 'none') {
        // Show HTML code
        const htmlCode = content.innerHTML;
        htmlCodeTextarea.value = htmlCode;
        content.style.display = 'none';
        htmlCodeContainer.style.display = 'block';
        showCode.textContent = 'WYSIWYG VIEW';
    } else {
        // Show WYSIWYG view
        const htmlCode = htmlCodeTextarea.value;
        content.innerHTML = htmlCode;
        htmlCodeContainer.style.display = 'none';
        content.style.display = 'block';
        showCode.textContent = 'HTML VIEW';
    }
}

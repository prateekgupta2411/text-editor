// Function to format text content or apply formatting to selected text
function formatDoc(cmd, value = null) {
    if (value) {
        // Check if there is a selected text range
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement(value); // Create an element based on the chosen format
            span.textContent = range.toString(); // Set the content of the element
            span.style.display = 'inline-block';
            range.deleteContents(); // Delete the selected text
            range.insertNode(span); // Insert the new element with the chosen format
        }
    } else {
        document.execCommand(cmd); // Execute the specified command (e.g., bold, italic)
    }
}

// Add an event listener to the select element for choosing text formatting
const selectFormat = document.querySelector('select');
selectFormat.addEventListener('change', function () {
    const selectedFormat = selectFormat.value;
    formatDoc('formatBlock', selectedFormat); // Call the formatDoc function with the chosen format
});

// Toggle between rich text editor and code view
const content = document.getElementById("content");
const showCode = document.getElementById("show-code");
let active = false;

showCode.addEventListener("click", function () {
    showCode.dataset.active = !active;
    active = !active;
    if (active) {
        content.textContent = content.innerHTML;
        content.setAttribute("contenteditable", false);
    } else {
        content.innerHTML = content.textContent;
        content.setAttribute("contenteditable", true);
    }
});

// Function to toggle between rich text editor and HTML code view
function toggleHtmlView() {
    const content = document.getElementById("content");
    const showCode = document.getElementById("show-code");
    const htmlCodeContainer = document.getElementById("html-code-container");
    const htmlCodeTextarea = document.getElementById("html-code");

    if (htmlCodeContainer.style.display === "none") {
        const htmlCode = content.innerHTML;
        htmlCodeTextarea.value = htmlCode;
        content.style.display = "none";
        htmlCodeContainer.style.display = "block";
    } else {
        const htmlCode = htmlCodeTextarea.value;
        content.innerHTML = htmlCode;
        htmlCodeContainer.style.display = "none";
        content.style.display = "block";
    }
}

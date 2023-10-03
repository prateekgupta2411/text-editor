function formatDoc(cmd, value = null) {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = range.toString();

        if (value) {
            const headingElement = document.createElement(value);
            headingElement.innerHTML = text;
            headingElement.style.display = 'inline-block';
            range.deleteContents();
            range.insertNode(headingElement);
        } else {
            const span = document.createElement('span');
            span.textContent = text;
            const format = {
                bold: 'font-weight: bold;',
                underline: 'text-decoration: underline;',
                italic: 'font-style: italic;',
            }[cmd];

            if (format) {
                span.style.cssText = format;
            }

            range.deleteContents();
            range.insertNode(span);
        }
    }
}

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




// Create a "close" button and append it to each list item
const myNodelist: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");

myNodelist.forEach((item) => {
    const span: HTMLSpanElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
});

// Click on a close button to hide the current list item
const closeButtons: NodeListOf<HTMLElement> = document.querySelectorAll(".close");

closeButtons.forEach((button) => {
    button.onclick = function (ev: MouseEvent) {
        const target = ev.target as HTMLElement;
        const div: HTMLElement | null = target.parentElement;
        if (div) {
            div.style.display = "none";
        }
    }
});

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');

if (list) {
    list.addEventListener('click', function (ev: MouseEvent) {
        const target = ev.target as HTMLElement;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    const li: HTMLElement = document.createElement("li");
    const inputValue: string = (document.getElementById("myInput") as HTMLInputElement).value;
    const t: Text = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const myUL = document.getElementById("myUL");
        if (myUL) {
            myUL.appendChild(li);
        }
    }
    (document.getElementById("myInput") as HTMLInputElement).value = "";

    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Re-bind event handlers for new close buttons
    const newCloseButtons: NodeListOf<HTMLElement> = document.querySelectorAll(".close");
    newCloseButtons.forEach((button) => {
        button.onclick = function (ev: MouseEvent) {
            const target = ev.target as HTMLElement;
            const div: HTMLElement | null = target.parentElement;
            if (div) {
                div.style.display = "none";
            }
        }
    });
}

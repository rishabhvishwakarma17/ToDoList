const inputTag = document.querySelector("input");
const buttonTag = document.querySelector("button");
const taskContainer = document.querySelector(".taskContainer");


inputTag.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key == "Enter") {
        addTask();
    }
})

buttonTag.addEventListener("click", addTask);

function addTask() {
    const task = inputTag.value.trim();
    inputTag.value = "";
    if (task.length == 0) {
        alert("Task Cannot be empty");
        return;
    }
    const boxEle = document.createElement("div");
    boxEle.classList.add("task");
    boxEle.innerHTML = `<h2 id="taskText"> ${task}</h2>
            <div><svg id="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path
                        d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z">
                    </path>
                </svg>
                <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z">
                    </path>
                </svg>
            </div> `;
    console.log(boxEle);


    const deleteButton = boxEle.querySelector(".deleteIcon");
    const editButton = boxEle.querySelector("#edit");
    const taskText = boxEle.querySelector("#taskText");

    let isEditable = false;
    editButton.addEventListener("click", function () {
        if (isEditable) {
            editButton.setAttribute("fill", "white");
            taskText.setAttribute("contentEditable", "false");
        } else {
            editButton.setAttribute("fill", "red");
            taskText.setAttribute("contentEditable", "true");
        }
        isEditable = !isEditable;
    })

    deleteButton.addEventListener("click", function () {
        taskContainer.removeChild(boxEle);
    })

    taskContainer.appendChild(boxEle);

}

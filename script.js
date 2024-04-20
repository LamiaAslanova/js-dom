const inp = document.getElementById("input")
const addTodoBtn = document.getElementById("addTodo")
const list = document.getElementById("list")

addTodoBtn.addEventListener("click", () => {
    if (inp.value.trim() == "") return
    let newLi = document.createElement("li")
    let newBtn = document.createElement("button")
    let p = document.createElement("p")
    let icon = document.createElement("i")
    let checkbox = document.createElement("input")
    let div = document.createElement("div")
    icon.classList.add("fa-solid", "fa-trash")
    p.innerHTML = inp.value
    list.append(newLi)
    newLi.append(div, newBtn)
    newBtn.appendChild(icon)
    div.append(checkbox, p)
    inp.value = ""
    checkbox.type = "checkbox"

    newBtn.addEventListener("click", () => {
        let confirmDelete = confirm("Are you sure you want to delete this item?")
        if (confirmDelete) {
            newBtn.parentElement.style.display = "none"
        }
    })

    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            newLi.classList.add("completed")
            newLi.style.opacity = "0.7"
        }
        else {
            newLi.classList.remove("completed")
            newLi.style.opacity = "1"
        }
    })
})
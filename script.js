const inp = document.getElementById("input")
const addTodoBtn = document.getElementById("addTodo")
const list = document.getElementById("list")

addTodoBtn.addEventListener("click", (e) => {
    let newLi = document.createElement("li")
    let newBtn = document.createElement("button")
    let p = document.createElement("p")
    let icon = document.createElement("i")
    let checkbox = document.createElement("input")
    let div = document.createElement("div")
    icon.classList.add("fa-solid", "fa-trash")
    p.innerHTML= inp.value
    list.append(newLi)
    newLi.append(div, newBtn)
    newBtn.append(icon)
    div.append(checkbox, p)
    inp.value=""
    checkbox.type="checkbox"
})
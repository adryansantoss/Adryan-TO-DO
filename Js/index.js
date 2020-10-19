window.onload = function() {
    var title = document.getElementById('toDo-title')
    var time = document.getElementById('time')
    var content = document.getElementById('toDo-content')
    var container = document.getElementById('toDo-container')
    var add = document.getElementById('todDo-add')

    add.addEventListener('click', () => {
        if (title.value != "" && content.value != "") {
            var toDoDiv = document.createElement('div')
            var toDoParagraph = document.createElement('p')
            var toDoTitle = document.createElement('h1')
            var toDoRemove = document.createElement('button')
            var toDoMarked = document.createElement('button')
            toDoRemove.innerText = 'DELETE'
            toDoRemove.id = 'toDo-remove'
            toDoMarked.innerText = 'FINALIZED'
            toDoMarked.id = 'toDo-marked'
            toDoRemove.classList.add('toDo-remove')
            toDoMarked.classList.add('toDo-finalized')
            toDoTitle.innerText = title.value
            toDoTitle.style.textTransform = 'uppercase'
            toDoTitle.style.fontSize = '22px'
            toDoParagraph.innerText = content.value
            toDoDiv.classList.add('to-dos')
            container.appendChild(toDoDiv)
            toDoDiv.appendChild(toDoTitle)
            toDoDiv.appendChild(toDoParagraph)
            toDoDiv.appendChild(toDoRemove)
            toDoDiv.appendChild(toDoMarked)
            title.value = ''
            content.value = ''
        }
        toDoRemove.addEventListener('click', () => {
            container.removeChild(toDoDiv)
        })

        toDoMarked.addEventListener('click', () => {
            toDoTitle.style.textDecoration = 'line-through'
            toDoParagraph.style.textDecoration = 'line-through'
        })

    })

    var toDotime = new Date();
    var dia = toDotime.getDate()
    var mes = toDotime.getMonth() + 1
    var ano = toDotime.getFullYear()
    time.innerText = `Dia:${dia}  Mês:${mes}  Ano:${ano} `
}
const TTDataArchitectureApp = {

    init(selectors) {

        //array to keep projects on so there is a reference to them
        this.projectArr = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        // this.template = document.querySelector(selectors.templateSelector)
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.addprojectViaForm.bind(this))

        this.load()

    },

    addproject(project) {

        // project.image = this.getImage(project.name)

        //add project to kept array
        this.projectArr.push(project)
        const listItem = this.renderListItem(project)
        // this.list.appendChild(listItem)
        ++this.max

        const buttonList = listItem.childNodes

        buttonList[1].addEventListener('click', this.deleteproject.bind(this))
        // buttonList[2].addEventListener('click', this.favproject.bind(this))
        // buttonList[3].addEventListener('click', this.moveDownproject.bind(this, project))
        // buttonList[4].addEventListener('click', this.moveUpproject.bind(this, project))

        this.save()

    },

    addprojectViaForm(ev) {
        ev.preventDefault()
        const f = ev.target
        console.log(f)
        const project = {
            id: this.max + 1,
            name: f.projectName.value,
            // Make fav persist!
            fav: false,
            // TODO: add the type of project to sort by
        }

        this.addproject(project)

        f.reset()

    },

    save() {
        localStorage
            .setItem('projects', JSON.stringify(this.projectArr))

    },

    load() {
        // Get the JSON string out of localStorage
        const projectsJSON = localStorage.getItem('projects')

        // Turn that into an array
        const projectsArray = JSON.parse(projectsJSON)

        // Set this.flicks to that array
        if (projectsArray) {
            projectsArray
                .map(this.addproject.bind(this))
        }

    },

    deleteproject(ev) {
        ev.preventDefault()
        const m = ev.target.parentElement
        const listItem = m.parentElement
        const index = m.className
        this.projectArr.splice(index, 1)

        listItem.outerHTML = ''

    },

    renderListItem(project) {
        const item = document.createElement('li')
        item.className = project.id
        item.textContent = project.name
        item.dataset.id = project.id

        //buttons
        const delButton = document.createElement('button')
        delButton.className = 'deleteButton'
        // const favButton = document.createElement('button')
        // favButton.className = 'favButton'
        // const downButton = document.createElement('button')
        // downButton.className = 'downButton'
        // const upButton = document.createElement('button')
        // upButton.className = 'upButton'

        //icons
        delButton.innerHTML = '<img src="icons/cancel.png" alt="Delete" />'
        // favButton.innerHTML = '<img src="icons/heart.png" alt="Favorite" />'
        // downButton.innerHTML = '<img src="icons/down-arrow.png" alt="DownArrow" />'
        // upButton.innerHTML = '<img src="icons/up-arrow.png" alt="UpArrow" />'


        // const imageToApp = document.createElement('img')
        // imageToApp.src = project.image
        // imageToApp.className = 'prdImage'

        //adding buttons to list item
        item.appendChild(delButton)
        // item.appendChild(favButton)
        // item.appendChild(downButton)
        // item.appendChild(upButton)


        // item.appendChild(imageToApp)


        return item
    }


}

TTDataArchitectureApp.init({
    formSelector: '#project-form',
    listSelector: '#project-list',
    
})
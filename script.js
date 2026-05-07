const projet = document.querySelectorAll('a')

const tab = ["left", "right", "bottom", "top"]

projet.forEach(element => {

    let direction = Math.floor(Math.random()* 4)

    let number = Math.random()* 1

    let dirTab = tab[direction]

    let dirNb = number * 100
    let dirInt = parseInt(dirNb)

    element.addEventListener("mouseenter", (e) =>{
        e.preventDefault()
        element.style.position = 'absolute'
        switch (dirTab) {
            case left:
                element.style.left = `${dirInt}px`
                break;
            case right:
                element.style.right = `${dirInt}px`
                break;
            case bottom:
                element.style.bottom = `${dirInt}px`
                break;
            case top:
                element.style.top = `${dirInt}px`
                break;
        
            default:
                element.style.left = `${dirTab}px`
                break;
        }
        // element.style.dirTab = `${dirInt} px`
    })

});

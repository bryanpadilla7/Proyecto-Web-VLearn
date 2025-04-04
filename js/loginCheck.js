const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')


export const loginCheck = user => {
    if (user) {
        loggedInLinks.forEach(link => link.style.display = 'block')
        loggedOutLinks.forEach(link => link.style.display = 'none')
    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')
    }

}
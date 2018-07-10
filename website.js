
document.addEventListener("DOMContentLoaded", function() {

    let myPhoto = document.getElementById("image")
    myPhoto.addEventListener("click", changeAppear)

    function changeAppear() {
        if (myPhoto.src == "about-me/hiking.jpg") {
            myPhoto.src = "about-me/beach.jpg"
            document.body.style.backgroundColor = "#f6c9ca"
        }
        else {
            myPhoto.src = "about-me/hiking.jpg"
            document.body.style.backgroundColor = "#badbe7"
        }
    }

}) //end of DOM content loaded

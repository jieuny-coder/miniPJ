<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

Kakao.init('6fd43d72297abe13d4858bc6f861eda4');
function loginWithKakao() {
    Kakao.Auth.authorize({
        redirectUri: 'http://127.0.0.1:5500/'
    });
}
<script src="https://apis.google.com/js/platform.js" async defer></script>

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

}

function startGoogleSignIn() {
    gapi.auth2.init({
        client_id: 'AIzaSyCL2cGhIYmrVGVVl1QtnQMznQaAtW72vgY.apps.googleusercontent.com'
    }).then(function () {
        var GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.signIn().then(function (googleUser) {
            onSignIn(googleUser);
        });
    });
}

const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = document.getElementById('username').value
    const passWord = document.getElementById('passWord').value

    if (username === "" || passWord === "") {
        alert('입력하세요')
    } else {
        loginForm.submit()
    }

})

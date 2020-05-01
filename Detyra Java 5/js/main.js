function login() {
    document.getElementById("input__login").style.display='block';
    document.getElementById("input__register").style.display='none';
}

function register() {
    document.getElementById("input__login").style.display='none';
    document.getElementById("input__register").style.display='block';
}

function registerButton() {
    var input1 = document.getElementById('regusername').value;
    var input2 = document.getElementById('regpassword').value;
    var input3 = document.getElementById('conpassword').value;
    if(input1 == '' || input2 == '' || input3 == ''){
        alert('Please write a Username and a Password');
    }
}

function loginButton() {
    var input1 = document.getElementById('username').value;
    var input2 = document.getElementById('password').value;
    if(input1 == '' || input2 == ''){
        alert('Please write your Username and Password');
    }
}

function larger(clicked) {
    if(clicked == 'home'){
        document.getElementById('home').style.height='50px';
        document.getElementById('about').style.height='30px';
        document.getElementById('contact').style.height='30px';
    } else if(clicked == 'about') {
    document.getElementById('home').style.height='30px';
    document.getElementById('about').style.height='50px';
    document.getElementById('contact').style.height='30px';
    } else if(clicked == 'contact') {
        document.getElementById('home').style.height='30px';
        document.getElementById('about').style.height='30px';
        document.getElementById('contact').style.height='50px';
    }
}
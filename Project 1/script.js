"use strict";

let characters;
let passwordLength;
let password;

function getPassword() {
  characters = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY!@#$%^&*()_+?><:{}[]`;
  passwordLength = 15;
  password = ``;

  for (let i = 0; i < passwordLength; i++) {
    const randomNumbers = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumbers, randomNumbers + 1);
  }
  document.getElementById("password").value = password;
}


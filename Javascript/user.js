let username = prompt("Enter your name: ")
let sym = "@";
let len = username.length;
let fullname = sym.concat(username.concat(len));


console.log("Username: ",fullname);
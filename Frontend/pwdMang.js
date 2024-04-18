window.addEventListener('load', function() {
            var passwords = JSON.parse(localStorage.getItem('passwords')) || [];
            displayPasswords(passwords);
});

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var website = document.getElementById("website").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var newPasswordEntry = {
        website: website,
        username: username,
        password: password
};

var passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.push(newPasswordEntry);
    localStorage.setItem('passwords', JSON.stringify(passwords));
    displayPasswords(passwords);

    document.getElementById("website").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

function displayPasswords(passwords) {
    var passwordListDiv = document.getElementById("passwordList");
    passwordListDiv.innerHTML = "";

    var numColumns = Math.floor(passwordListDiv.clientWidth / 220);

    passwords.forEach(function(entry, index) {
        var newPasswordEntry = document.createElement("div");
        newPasswordEntry.classList.add("passwordEntry");
        newPasswordEntry.innerHTML = "<span class='material-icons btnDel' onclick='deletePassword(" + index + ")'>clear</span>" +
            "<strong>Website:</strong> " + entry.website + "<br>" +
            "<strong>Username:</strong> " + entry.username + "<br>" +
            "<strong>Password:</strong> " + "<span id='passwordValue" + index + "'></span><br>" +
            "<span class='material-icons' onclick='togglePasswordVisibility(" + index + ")' id='togglePassword" + index + "' style='cursor: pointer;'>visibility</span>";
        passwordListDiv.appendChild(newPasswordEntry);
        updatePasswordVisibility(index, entry.password); 
});

var rows = Math.ceil(passwords.length / numColumns);
passwordListDiv.style.height = rows * (passwordListDiv.firstChild.offsetHeight + 20) + 'px';
}

function updatePasswordVisibility(index, password) {
    var passwordSpan = document.getElementById('passwordValue' + index);
    var toggleIcon = document.getElementById('togglePassword' + index);
    if (passwordSpan && toggleIcon) {
        passwordSpan.textContent = "*".repeat(password.length); 
        toggleIcon.textContent = 'visibility'; 
    }
}

function togglePasswordVisibility(index) {
    var passwordSpan = document.getElementById('passwordValue' + index);
    var toggleIcon = document.getElementById('togglePassword' + index);
    var passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    if (passwordSpan && toggleIcon) {
        if (toggleIcon.textContent === 'visibility') {
            passwordSpan.textContent = passwords[index].password;
            toggleIcon.textContent = 'visibility_off';
        } else {
            passwordSpan.textContent = "*".repeat(passwords[index].password.length);
            toggleIcon.textContent = 'visibility';
        }
    }
}

function deletePassword(index) {
    var passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.splice(index, 1);
    localStorage.setItem('passwords', JSON.stringify(passwords));
    displayPasswords(passwords);
} 

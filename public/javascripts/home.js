document.getElementById('register-form').addEventListener('submit', function(event) {
    const username = document.getElementById('new-username').value.trim();
    const password = document.getElementById('new-password').value.trim();

    console.log(username)

    if (!username || !password) {
        event.preventDefault(); 
        alert('Нельзя оставлять поля открытыми😡');
        return;
    }

    if (username === "фисташковое") {
        event.preventDefault(); 
        alert('Password must be at least 8 characters long.');
        return;
    }

});

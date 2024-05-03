const loadUsersButton = document.getElementById('load-users');
const userList = document.getElementById('user-list');
loadUsersButton.addEventListener('click', () => {
    fetchUsers();
});
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}
function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.classList.add('user-item');
        listItem.innerHTML = `<strong>Name:</strong> ${user.name}<br><strong>Email:</strong> ${user.email}`;
        userList.appendChild(listItem);
    });
}
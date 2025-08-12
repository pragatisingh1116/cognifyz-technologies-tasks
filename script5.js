function loadUsers() {
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(data => {
      const userList = document.getElementById('userList');
      userList.innerHTML = ''; 
      
      data.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.log("Error fetching users:", error);
    });
}

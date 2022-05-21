const form = document.querySelector('form');

const getUser = () => {
  axios.get(`
  http://localhost:3001/api/getUsers/
  `)
  .then(({ data }) => {
    const container = document.getElementById('user-container');
    const user = document.createElement('ul');
    Object.keys(data).forEach((attr) => {
      const userAttr = document.createElement('li');
      userAttr.innerHTML = `${attr}: ${data[attr]}`
      user.appendChild(userAttr);
    });
    container.appendChild(user);
  })
  .catch((err) => {
    console.log(err)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => console.log(input.value));
  const [ name, age, lovesDogs, hasFriends ] = inputs;
  const body = { 
    name: name.value,
    age: age.value,
    lovesDogs: lovesDogs.value,
    hasFriends: hasFriends.value 
  };
  
  axios.post('http://localhost:3001/api/users', body)
  .then(() => {
    console.log('user Info has been updated');
  })
  .catch((err) =>  console.log(err));
});

const getUserButton = document.getElementById('get-user').addEventListener('click', getUser);


const editNameButton = document.getElementById('edit-name-button');

editNameButton.addEventListener('click', () => {
  const newName = document.getElementById('edit-name-input').value;
  axios.put(`http://localhost:3001/api/editName/${newName}`)
  .then(() => alert('name has been edited'))
  .catch((e) =>  console.log(e))
})

const deleteNameButton = document.getElementById('delete-button');

deleteNameButton.addEventListener('click', () => {
  axios.delete(`http://localhost:3001/api/deleteUser`)
  .then(() => alert('name has been deleted'))
  .catch((e) =>  console.log(e))
});
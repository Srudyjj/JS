const http = new EasyHTTP;

// Get users

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));


//User data
const date = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', date)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/5', date)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .delete("https://jsonplaceholder.typicode.com/users/4", date)
  .then(data => console.log(data))
  .catch(err => console.log(err));
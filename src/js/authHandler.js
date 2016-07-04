export default class AuthHandler {
  login(username, password, callback) {
    callback = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (callback) callback(true);
      this.onChange(true);
      return;
    }
    
    ajaxLogin(username, password, (response) => {
      console.log(response);
      if (response.authenticated) {
        localStorage.token = response.token;
        if (callback) { callback(true); }
        this.onChange(true);
      } else {
        if (callback) { callback(false); }
        this.onChange(false);
      }
    })
  }
    
  getToken() {
    return localStorage.token;
  }
  
  logout(callback) {
    delete localStorage.token;
    if (callback) { callback(); }
    this.onChange(false);
  }
  
  loggedIn() {
    return !!localStorage.token;
  }
  
  onChange() {}
}

function ajaxLogin(email, password, callback) {
  const method = 'post';
  const headers = new Headers({ 'Content-Type': 'application/json' });
  
  fetch('http://localhost:3000/api/v1/auth/sign_in', {
    method,
    headers,
    body: JSON.stringify({
      email,
      password,
    })
  }).then(function(response) {
    if (response.ok) {
      response.json().then(function(json) {
        callback({
          email: json.data.email,
          id: json.data.id,
          authenticated: true,
        });
      });
    } else {
      callback({authenticated: false});
    }
  }).catch(function(err) {
    callback({authenticated: false});
  });
}

// function pretendRequest(username, password, callback) {
//   
// 
//   setTimeout(() => {
//     if (username === 'admin' && password === 'password') {
//       callback({
//         authenticated: true,
//         token: Math.random().toString(36).substring(7),
//       });
//     } else {
//       callback({ authenticated: false });
//     }
//   }, 0);
// }
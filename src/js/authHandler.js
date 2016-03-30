export default class AuthHandler {
  login(username, password, callback) {
    callback = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (callback) callback(true);
      this.onChange(true);
      return;
    }
    pretendRequest(username, password, (response) => {
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

function pretendRequest(username, password, callback) {
  setTimeout(() => {
    if (username === 'admin' && password === 'password') {
      callback({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      });
    } else {
      callback({ authenticated: false });
    }
  }, 0);
}
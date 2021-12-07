// use this to decode a token and get the user's information out of it
// 🔑 When a token is returned to our front end after a user is successfully logged in, it must be stored and decoded. We import the jwt-decode library to decode the data a token holds as well as when it expires:
import decode from 'jwt-decode';

// create a new class to instantiate for a user
// we create a new class AuthService and add the functionality needed to store our token so we can easily retrieve it and include it with a request to the server:
class AuthService {
  // get user data from JSON web token by decoding it
  // 🔑 getProfile method that decodes the retrieved token and returns a string so the expiration date and the data in the token can be used:
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  // 🔑 We then call the getToken method in the loggedIn method to check if a token has been returned. If a user has been successfully logged in, a token will be returned from local storage. If not, no user is logged in:
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }
  // 🔑 Inside this class, we use the getToken method to retrieve an existing token from local storage, if it exists:
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  // 🔑 When a user logs in, we store the token in local storage. Then, when a user logs out, we remove the token. 
  // This makes sure our token is only held in storage while a user remains logged in:
  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', idToken);
    window.location.assign('/dashboard');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

// We then export our AuthService so we can use this functionality in our Login page:
export default new AuthService();

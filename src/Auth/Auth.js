import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-liwqe3n4.eu.auth0.com",
      audience: "https://dev-liwqe3n4.eu.auth0.com/userinfo",
      clientID: "pZMP6kCB0b7YOqc1aZrtd5vsMIW1J9Uc",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
  }

  getProfile = () => {
    return this.profile;
  };

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        console.log(authResult);

        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  silentAuth() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) {
          return reject(err)
        };
        this.setSession(authResult);
        resolve();
      });
    });
  }

  isAuthenticated = () => {
    return new Date().getTime() < this.expiresAt;
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    this.idToken = null;
    this.expiresAt = null;
  };

  setSession = authResult => {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  };
}

const auth = new Auth();

export default auth;

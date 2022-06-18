import axios from "axios";

const API_URL_Add = process.env.REACT_APP_API_URL_Add;

const API_URL = `${API_URL_Add}/auth/`;

class AuthService {

  login(username, password) {

    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {

        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
        
      });

  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {

    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });

  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

}

export default new AuthService();

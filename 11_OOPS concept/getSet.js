// Getter ani setter he object chya properties var control
//  thevayla upyogi ahet, jithe tu logic, security, ani validation lavu shakto.

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Getter for username
  get username() {
    return this._username;
  }

  // Setter for username
  set username(newUsername) {
    if (newUsername.length < 3) {
      console.log("Username must be at least 3 characters");
    } else {
      this._username = newUsername;
    }
  }

  // Getter for password (optional - sometimes we don't give it)
  get password() {
    return "********"; // We don't show real password
  }

  // Setter for password
  set password(newPassword) {
    if (newPassword.length < 6) {
      console.log("Password must be at least 6 characters");
    } else {
      this._password = newPassword;
    }
  }
}

// ➤ Create user object
const user1 = new User("tejas", "abc123");

// ➤ Get values using getter
console.log(user1.username);  // "tejas"
console.log(user1.password);  // "********" (hidden for safety)

// ➤ Try setting invalid username
user1.username = "ab"; // "Username must be at least 3 characters"

// ➤ Try setting valid username
user1.username = "amit";
console.log(user1.username);  // "amit"

// ➤ Try setting short password
user1.password = "123"; // "Password must be at least 6 characters"

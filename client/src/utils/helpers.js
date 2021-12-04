export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
    const pass = /^[A-Za-z]\w{7,14}$/;
    
    if (input.match(pass)) {
      return true;
    }
    return false;
}

export function checkPasswordsMatch(password, confirmPassword) {
    if (password === confirmPassword) {
      return true;
    }
    return false;
}
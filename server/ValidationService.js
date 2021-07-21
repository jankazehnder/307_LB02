// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) { return result; }
    //last Name
    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) { return result; }
    //email adress
    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }
    //mobile
    result = validateLib.checkRequired("mobile", userObj.mobile);
    if (result.isNotValid) { return result; }
    //password
    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }
    //password repeat
    /*result = validateLib.checkRequired("pwdr", userObj.pwdr);
    if (result.isNotValid) { return result; }*/

    //check length
    //first Name
    result = validateLib.checkLength("firstname",userObj.firstname, 3, 15);
    if (result.isNotValid) { return result; }
    //last Name
    result = validateLib.checkLength("lastname",userObj.lastname, 3, 15);
    if (result.isNotValid) { return result; }
    //password
    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }
    //mobile
    result = validateLib.checkRequired("mobile", userObj.mobile);
    if (result.isNotValid) { return result; }
    //check password
  /*  result = validateLib.checkPassword("password", userObj.password, "pwdr", userObj.pwdr);
    if (result.isNotValid) { return result; }*/

    return false;
}

module.exports = {
    validateUser
}

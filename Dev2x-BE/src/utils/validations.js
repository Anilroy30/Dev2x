const validator = require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName || !emailId || !password) {
        throw new Error("All fields (firstName, lastName, emailId, password) are required.");
    }
    if (firstName.length < 4 || firstName.length > 20) {
        throw new Error("First Name must be between 4 and 20 characters.");
    }
    if (lastName.length < 4 || lastName.length > 20) {
        throw new Error("Last Name must be between 4 and 20 characters.");
    }
    if (!validator.isEmail(emailId)) {
        throw new Error("Invalid Email.");
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error("Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.");
    }
};

const validateEditProfileData = (req) => {
    const allowedEditFields = ["firstName", "lastName", "age", "about", "skills", "gender", "photoUrl"];

    const isEditAllowed = Object.keys(req.body).every((field) => 
        allowedEditFields.includes(field)
    );

    return isEditAllowed;
}

module.exports = {
    validateSignUpData,
    validateEditProfileData 
}
function isValidStudentNumber(value) {
if (typeof value !== "string") {
return false;
}
var trimmed = value.trim();
var pattern = /^\d{2}-\d{4}-\d{3}$/;
return pattern.test(trimmed);
}

function isValidPassword(value) {
if (typeof value !== "string") {
return false;
}
if (/\s/.test(value)) {
return false;
}
if (value.length < 8) {
return false;
}
if (!/[A-Z]/.test(value)) {
return false;
}
if (!/[0-9]/.test(value)) {
return false;
}
if (!/[@$!]/.test(value)) {
return false;
}
return true;
}

function isValidEmail(value) {
var email = value.trim();
var pattern = /^\S+@\S+\.\S+$/;
return pattern.test(email);
}

function isValidMobile(value) {
var mobile = value.trim();
var pattern = /^(09\d{9}|\+639\d{9})$/;
return pattern.test(mobile);
}

if (typeof document !== "undefined") {

document.addEventListener("DOMContentLoaded", function () {

var form = document.getElementById("registrationForm");
var fullName = document.getElementById("fullName");
var studentNumber = document.getElementById("studentNumber");
var email = document.getElementById("email");
var mobileNumber = document.getElementById("mobileNumber");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var course = document.getElementById("course");
var terms = document.getElementById("terms");

var successMessage = document.getElementById("successMessage");
var registrationSummary = document.getElementById("registrationSummary");
var passwordFeedback = document.getElementById("passwordFeedback");

function setError(field, errorId, message) {
document.getElementById(errorId).textContent = message;
if (message === "") {
field.setAttribute("aria-invalid", "false");
} else {
field.setAttribute("aria-invalid", "true");
}
}

function checkFullName() {
var name = fullName.value.trim();
if (name === "") {
setError(fullName, "fullNameError", "Please enter your full name.");
return false;
}
if (name.length < 2) {
setError(fullName, "fullNameError", "Name must be at least two characters.");
return false;
}
setError(fullName, "fullNameError", "");
return true;
}

function checkStudentNumber() {
if (!isValidStudentNumber(studentNumber.value)) {
setError(studentNumber, "studentNumberError", "Enter a student number in the format 24-1234-123.");
return false;
}
setError(studentNumber, "studentNumberError", "");
return true;
}

function checkEmail() {
if (email.value.trim() === "") {
setError(email, "emailError", "Please enter your email address.");
return false;
}
if (!isValidEmail(email.value)) {
setError(email, "emailError", "Enter a valid email address.");
return false;
}
setError(email, "emailError", "");
return true;
}

function checkMobile() {
if (mobileNumber.value.trim() === "") {
setError(mobileNumber, "mobileNumberError", "Please enter your mobile number.");
return false;
}
if (!isValidMobile(mobileNumber.value)) {
setError(mobileNumber, "mobileNumberError", "Use 09xxxxxxxxx or +639xxxxxxxxx.");
return false;
}
setError(mobileNumber, "mobileNumberError", "");
return true;
}

function checkPassword() {
if (!isValidPassword(password.value)) {
setError(password, "passwordError", "Password needs 8+ characters, an uppercase letter, a digit, and one of @ $ !.");
return false;
}
setError(password, "passwordError", "");
return true;
}

function checkConfirmPassword() {
if (confirmPassword.value === "") {
setError(confirmPassword, "confirmPasswordError", "Please confirm your password.");
return false;
}
if (confirmPassword.value !== password.value) {
setError(confirmPassword, "confirmPasswordError", "Passwords do not match.");
return false;
}
setError(confirmPassword, "confirmPasswordError", "");
return true;
}

function checkCourse() {
if (course.value !== "BSIT" && course.value !== "BSCS") {
setError(course, "courseError", "Please select your course.");
return false;
}
setError(course, "courseError", "");
return true;
}

function checkTerms() {
if (!terms.checked) {
setError(terms, "termsError", "You must agree to the terms.");
return false;
}
setError(terms, "termsError", "");
return true;
}

form.addEventListener("submit", function (event) {
event.preventDefault();

var r1 = checkFullName();
var r2 = checkStudentNumber();
var r3 = checkEmail();
var r4 = checkMobile();
var r5 = checkPassword();
var r6 = checkConfirmPassword();
var r7 = checkCourse();
var r8 = checkTerms();

if (r1 && r2 && r3 && r4 && r5 && r6 && r7 && r8) {
document.getElementById("summaryName").textContent = fullName.value.trim();
document.getElementById("summaryStudentNumber").textContent = studentNumber.value.trim();
document.getElementById("summaryEmail").textContent = email.value.trim();
document.getElementById("summaryMobileNumber").textContent = mobileNumber.value.trim();
document.getElementById("summaryCourse").textContent = course.value;

registrationSummary.hidden = false;
successMessage.textContent = "Registration details validated successfully!";
}
});

password.addEventListener("input", function () {
if (password.value === "") {
passwordFeedback.textContent = "";
return;
}
if (isValidPassword(password.value)) {
passwordFeedback.textContent = "Password looks good.";
} else {
passwordFeedback.textContent = "Password must have 8+ characters, an uppercase letter, a digit, and one of @ $ !.";
}
});

fullName.addEventListener("blur", function () {
checkFullName();
});

course.addEventListener("change", function () {
checkCourse();
});

terms.addEventListener("change", function () {
checkTerms();
});

studentNumber.addEventListener("input", function () {
if (document.getElementById("studentNumberError").textContent !== "") {
checkStudentNumber();
}
});

email.addEventListener("input", function () {
if (document.getElementById("emailError").textContent !== "") {
checkEmail();
}
});

mobileNumber.addEventListener("input", function () {
if (document.getElementById("mobileNumberError").textContent !== "") {
checkMobile();
}
});

confirmPassword.addEventListener("input", function () {
if (document.getElementById("confirmPasswordError").textContent !== "") {
checkConfirmPassword();
}
});

form.addEventListener("reset", function () {
document.getElementById("fullNameError").textContent = "";
document.getElementById("studentNumberError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("mobileNumberError").textContent = "";
document.getElementById("passwordError").textContent = "";
document.getElementById("confirmPasswordError").textContent = "";
document.getElementById("courseError").textContent = "";
document.getElementById("termsError").textContent = "";

passwordFeedback.textContent = "";
successMessage.textContent = "";

document.getElementById("summaryName").textContent = "";
document.getElementById("summaryStudentNumber").textContent = "";
document.getElementById("summaryEmail").textContent = "";
document.getElementById("summaryMobileNumber").textContent = "";
document.getElementById("summaryCourse").textContent = "";

registrationSummary.hidden = true;

fullName.setAttribute("aria-invalid", "false");
studentNumber.setAttribute("aria-invalid", "false");
email.setAttribute("aria-invalid", "false");
mobileNumber.setAttribute("aria-invalid", "false");
password.setAttribute("aria-invalid", "false");
confirmPassword.setAttribute("aria-invalid", "false");
course.setAttribute("aria-invalid", "false");
terms.setAttribute("aria-invalid", "false");
});

});

}

if (typeof module !== "undefined" && module.exports) {
module.exports = { isValidStudentNumber: isValidStudentNumber, isValidPassword: isValidPassword };
}

//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

function formatPhoneNumber(s) {
    var s2 = (""+s).replace(/[^0-9]/, '');
    var s3 = s2.replace(/[{()}]/g, '');
    var s4 = s3.replace(/\./g,' ');
    var s5 = s4.match(/^(\d{3})(\d{3})(\d{4})$/);
    return s5;
}
const phoneNumber = (pNum) => {
    return formatPhoneNumber(pNum)
};

console.log(phoneNumber(''));

module.exports = phoneNumber;
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it

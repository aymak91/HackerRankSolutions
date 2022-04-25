// A counterfeit currency printer is operating in the country XYZ, and all of the banks must try to identify the bad currency. Every note has a serial number that can be used to determine whether it is valid. The serial number also can be used to determine the denomination of the note. A valid serial number will have the following characteristics:

// There are 10 to 12 characters.
// The first 3 characters are distinct uppercase English letters.
// The next 4 characters represent the year the note was printed and will always be between 1900 and 2019 inclusive.
// The next characters represent the currency denomination and may be any one of {10, 20, 50, 100, 200, 500, 1000}.
// The next character should be the last character of the serial number. The serial number must end with exactly one uppercase English letter only.
 

// Given an array of serial numbers, determine the value of the valid currency.

// For example, serial numbers for n = 8 notes are shown below.

// Serial No.      Test 1 Test 2 Test 3 Test 4  Test 5 Valid Amt
// AVG190420T        ✔      ✔      ✔      ✔       ✔        20
// RTF20001000Z      ✔      ✔      ✔      ✔       ✔      1000
// QWER201850G       ✔      ✔      ✗      ✔       ✔                there is an R where the year is supposed to start
// AFA199620E        ✔      ✗      ✔      ✔       ✔                first three characters are not distinct
// ERT1947200T       ✔      ✔      ✔      ✔       ✔       200
// RTY20202004       ✔      ✔      ✗      ✔       ✗                the year 2020 is out of bounds, the last character is not an uppercase letter
// DRV1984500Y       ✔      ✔      ✔      ✔       ✔       500
// ETB2010400G       ✔      ✔      ✔      ✗       ✔                there are no bills for 400 denomination
 

// In total, there are valid bills worth 20 + 1000 + 200 + 500 = 1720.

 

// Function Description
// Complete the function countCounterfeit in the editor below. The function must return an integer sum of values of valid currency.

// countCounterfeit has the following parameter(s):
//     serialNumber[serialNumber[0],...serialNumber[n-1]]:  an array of strings

 

// Constraints
// 0 < n ≤ 10^5
// 1 ≤ |serialNumber[i][ ]|≤ 14
 


/*
 * Complete the 'countCounterfeit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY serialNumber as parameter.
 */

function countCounterfeit(serialNumber) {
    const denoms = new Set(['10', '20', '50', '100', '200', '500', '1000']);
    let value = 0;
    for (let i = 0; i < serialNumber.length; i++) {
        let note = serialNumber[i];
        let year = note.slice(3, 7);
        let val = note.slice(7, note.length - 1);

        if (testOne(note) && testTwo(note) && testThree(year) && testFive(note) && testFour(val, denoms)) {
            value += parseInt(val);   
        }
    }
    return value;
}

function testOne(note) {
    return note.length >= 10 && note.length <= 12
}

function testTwo(note) {
    const allCapital = /[A-Z]/.test(note[0])  && /[A-Z]/.test(note[1]) && /[A-Z]/.test(note[2]);
    const distinct = note[0] !== note[1] && note[0] !== note[2] && note[1] !== note[2];
    return allCapital && distinct;
}

function testThree(year) {
    if (isNaN(year)) return false;
    return parseInt(year) <= 2019 && parseInt(year) >= 1900;
}

function testFour(val, denoms) {
    return denoms.has(val);
}

function testFive(note) {
    return /[A-Z]/.test(note[note.length - 1]);
}
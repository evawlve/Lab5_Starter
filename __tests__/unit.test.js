// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Testing isPhoneNumber
describe('isPhoneNumber', () => {
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone number with parenthesis and space', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone number with invalid characters', () => {
    expect(isPhoneNumber('123-#$7-8901')).toBe(false);
  });

  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

// Testing isEmail
describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('email@example.com')).toBe(true);
  });

  test('valid email with subdomain numbers', () => {
    expect(isEmail('email4432@example.com')).toBe(true);
  });

  test('invalid email with no domain', () => {
    expect(isEmail('username@')).toBe(false);
  });

  test('invalid email', () => {
    expect(isEmail('username@example')).toBe(false);
  });
});

// Testing isStrongPassword
describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('Abc123')).toBe(true);
  });

  test('valid strong password with underscore', () => {
    expect(isStrongPassword('Abc_123')).toBe(true);
  });

  test('invalid strong password too short', () => {
    expect(isStrongPassword('Ab1')).toBe(false);
  });

  test('invalid strong password with special character', () => {
    expect(isStrongPassword('Abc-123')).toBe(false);
  });
});

// Testing isDate
describe('isDate', () => {
  test('valid date format', () => {
    expect(isDate('12/25/2020')).toBe(true);
  });

  test('valid date format with one digit month and day', () => {
    expect(isDate('1/1/2021')).toBe(true);
  });

  test('invalid date with bad year', () => {
    expect(isDate('12/25/20')).toBe(false);
  });

  test('invalid date with extra characters', () => {
    expect(isDate('12/25/2020!')).toBe(false);
  });
});

// Testing isHexColor
describe('isHexColor', () => {
  test('valid hex color 6 characters', () => {
    expect(isHexColor('#1a1a1a')).toBe(true);
  });

  test('valid hex color 3 characters', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('invalid hex color with 6 characters but wrong symbols', () => {
    expect(isHexColor('#1a1z1a')).toBe(false);
  });

  test('invalid hex color too long', () => {
    expect(isHexColor('#1234567')).toBe(false);
  });
});

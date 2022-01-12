import {
  removeNonDigits,
} from "./common";

const PHONE_NUMBER_LENGTH = 11;

const FIRST_DIGITS_OF_RUSSIAN_PHONE_NUMBERS = {
  SEVEN: `7`,
  EIGHT: `8`,
  NINE: `9`,
};

const phoneNumberStructure = {
  countryCode: {
    firstDigitIndex: 0,
    length: 1,
  },
  operatorCode: {
    firstDigitIndex: 1,
    length: 3,
  },
  userNumber: {
    firstBlock: {
      firstDigitIndex: 4,
      length: 3,
    },
    secondBlock: {
      firstDigitIndex: 7,
      length: 2,
    },
    thirdBlock: {
      firstDigitIndex: 9,
      length: 2,
    },
  },
};

const checkIsRussianPhoneNumber = (number) =>
  Object.values(FIRST_DIGITS_OF_RUSSIAN_PHONE_NUMBERS).includes(number[0]);

export const formatPhoneNumber = (phoneNumber) => {
  const {
    countryCode,
    operatorCode,
    userNumber,
  } = phoneNumberStructure;

  let phoneNumberDigits = removeNonDigits(phoneNumber);
  let formattedNumber = ``;

  if (!phoneNumberDigits) {
    return phoneNumberDigits;
  }

  if (!checkIsRussianPhoneNumber(phoneNumberDigits)) {
    return formattedNumber;
  }

  if (phoneNumberDigits[countryCode.firstDigitIndex] === FIRST_DIGITS_OF_RUSSIAN_PHONE_NUMBERS.NINE) {
    phoneNumberDigits = `${FIRST_DIGITS_OF_RUSSIAN_PHONE_NUMBERS.SEVEN}${phoneNumberDigits}`;
  }

  if (phoneNumberDigits[countryCode.firstDigitIndex] === FIRST_DIGITS_OF_RUSSIAN_PHONE_NUMBERS.EIGHT) {
    phoneNumberDigits = `${FIRST_DIGITS_OF_RUSSIAN_PHONE_NUMBERS.SEVEN}${phoneNumberDigits.slice(operatorCode.firstDigitIndex)}`;
  }

  if (phoneNumberDigits.length > countryCode.firstDigitIndex) {
    const {
      firstDigitIndex,
      length,
    } = countryCode;

    formattedNumber = `+${formattedNumber}${phoneNumberDigits.slice(firstDigitIndex, firstDigitIndex + length)}`;
  }

  if (phoneNumberDigits.length > operatorCode.firstDigitIndex) {
    const {
      firstDigitIndex,
      length,
    } = operatorCode;

    formattedNumber = `${formattedNumber} (${phoneNumberDigits.slice(firstDigitIndex, firstDigitIndex + length)}`;
  }

  if (phoneNumberDigits.length > userNumber.firstBlock.firstDigitIndex) {
    const {
      firstDigitIndex,
      length,
    } = userNumber.firstBlock;

    formattedNumber = `${formattedNumber}) ${phoneNumberDigits.slice(firstDigitIndex, firstDigitIndex + length)}`;
  }

  if (phoneNumberDigits.length > userNumber.secondBlock.firstDigitIndex) {
    const {
      firstDigitIndex,
      length,
    } = userNumber.secondBlock;

    formattedNumber = `${formattedNumber}-${phoneNumberDigits.slice(firstDigitIndex, firstDigitIndex + length)}`;
  }

  if (phoneNumberDigits.length > userNumber.thirdBlock.firstDigitIndex) {
    const {
      firstDigitIndex,
      length,
    } = userNumber.thirdBlock;

    formattedNumber = `${formattedNumber}-${phoneNumberDigits.slice(firstDigitIndex, firstDigitIndex + length)}`;
  }

  return formattedNumber;
};

export const setPhoneInputInvalidity = (input) => {
  const phoneNumberDigits = removeNonDigits(input.value);

  if (input.value.length > 0 && phoneNumberDigits.length < PHONE_NUMBER_LENGTH) {
    input.setCustomValidity(`λ`);

    return;
  }

  input.setCustomValidity(``);
};

import { InputProduct } from '../interfaces/Product';
import statusCode from '../utils/statusCode';

const {
  nameIsRequired, nameIsString, nameLength,
  amountIsRequired, amountIsString, amountLength,
} = statusCode.errors;

const MIN_NAME_LENGTH = 2;

const validateName = (username: string) => {
  if (!username) {
    const { code, error } = nameIsRequired;
    return { code, error };
  }
  if (typeof (username) !== 'string') {
    const { code, error } = nameIsString;
    return { code, error };
  }
  if (username.length <= MIN_NAME_LENGTH) {
    const { code, error } = nameLength;
    return { code, error };
  }
  return null;
};

const validateAmount = (amount: string) => {
  if (!amount) {
    const { code, error } = amountIsRequired;
    return { code, error };
  }
  if (typeof (amount) !== 'string') {
    const { code, error } = amountIsString;
    return { code, error };
  }
  if (amount.length <= MIN_NAME_LENGTH) {
    const { code, error } = amountLength;
    return { code, error };
  }
  return null;
};

const productValidation = ({ name, amount }: InputProduct) => {
  const nameError = validateName(name);
  if (nameError) return nameError;
  const amountError = validateAmount(amount);
  if (amountError) return amountError;
  return null;
};

export default {
  productValidation,
};
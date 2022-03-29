import { InputUser, Login } from '../interfaces/User';
import statusCode from '../utils/statusCode';

const {
  userNameIsRequired, userNameIsString, userNameLength,
  classeIsRequired, classeIsString, classeLength,
  levelIsRequired, levelIsNumber, levelLength,
  passwordIsRequired, passwordIsString, passwordLength,
} = statusCode.errors;

const MIN_NAME_LENGTH = 2;
const ZERO = 0;
const MIN_PASSWORD_LENGTH = 7;

const validateName = (username: string) => {
  if (!username) {
    const { code, error } = userNameIsRequired;
    return { code, error };
  }
  if (typeof (username) !== 'string') {
    const { code, error } = userNameIsString;
    return { code, error };
  }
  if (username.length <= MIN_NAME_LENGTH) {
    const { code, error } = userNameLength;
    return { code, error };
  }
  return null;
};

const validateClasse = (classe: string) => {
  if (!classe) {
    const { code, error } = classeIsRequired;
    return { code, error };
  }
  if (typeof (classe) !== 'string') {
    const { code, error } = classeIsString;
    return { code, error };
  }
  if (classe.length <= MIN_NAME_LENGTH) {
    const { code, error } = classeLength;
    return { code, error };
  } 
  return null;
};

const validateLevel = (level: number) => {
  if (level === undefined) {
    const { code, error } = levelIsRequired;
    return { code, error };
  }
  if (typeof level !== 'number') {
    const { code, error } = levelIsNumber;
    return { code, error };
  }
  if (+level <= ZERO) {
    const { code, error } = levelLength;
    return { code, error };
  } 
  return null;
};

const validatePassword = (password: string) => {
  if (!password) {
    const { code, error } = passwordIsRequired;
    return { code, error };
  }
  if (typeof (password) !== 'string') {
    const { code, error } = passwordIsString;
    return { code, error };
  }
  if (password.length <= MIN_PASSWORD_LENGTH) {
    const { code, error } = passwordLength;
    return { code, error };
  } 
  return null;
};

const userValidation = ({ username, classe, level, password }: InputUser) => {
  const nameError = validateName(username);
  if (nameError) return nameError;
  const classeError = validateClasse(classe);
  if (classeError) return classeError;
  const levelError = validateLevel(level);
  if (levelError) return levelError;
  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;
  return null;
};

const loginValidation = ({ username, password }: Login) => {
  const nameError = validateName(username);
  if (nameError) return nameError;
  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;
  return null;
};

export default {
  userValidation,
  loginValidation,
};
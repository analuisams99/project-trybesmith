enum StatusCodes {
  OK = 200,
  Created,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity = 422,
}

const errors = {
  userNameIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Username is required',
  },
  userNameIsString: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Username must be a string',
  },
  userNameLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Username must be longer than 2 characters',
  },
  classeIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Classe is required',
  },
  classeIsString: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Classe must be a string',
  },
  classeLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Classe must be longer than 2 characters',
  },
  levelIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Level is required',
  },
  levelIsNumber: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Level must be a number',
  },
  levelLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Level must be greater than 0',
  },
  passwordIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Password is required',
  },
  passwordIsString: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Password must be a string',
  },
  passwordLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Password must be longer than 7 characters',
  },
  loginInvalid: {
    code: StatusCodes.Unauthorized,
    error: 'Username or password invalid',
  },
  tokenNotFound: {
    code: StatusCodes.Unauthorized,
    error: 'Token not found',
  },
  tokenInvalid: {
    code: StatusCodes.Unauthorized,
    error: 'Invalid token',
  },
  nameIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Name is required',
  },
  nameIsString: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Name must be a string',
  },
  nameLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Name must be longer than 2 characters',
  },
  amountIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Amount is required',
  },
  amountIsString: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Amount must be a string',
  },
  amountLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Amount must be longer than 2 characters',
  },
  productIsRequired: {
    code: StatusCodes.BadRequest,
    error: 'Products is required',
  },
  ProductIsArrayOfNumbers: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Products must be an array of numbers',
  },
  ProductLength: {
    code: StatusCodes.UnprocessableEntity,
    error: 'Products can\'t be empty',
  },
  orderNotFound: {
    code: StatusCodes.NotFound,
    error: 'Order not found',
  },
};

export default {
  StatusCodes,
  errors,
}; 
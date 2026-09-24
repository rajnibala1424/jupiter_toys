export const testData = {
  baseUrl: 'https://jupiter.cloud.planittesting.com/#/',
};

export const contactTestData = {
  invalidEmail: {
    forename: 'Test User',
    email: 'invalidemail',
    message: 'I need help.',
  },
  validSubmission: {
    forename: 'TestUser',
    email: 'test.user@example.com',
    message: 'I need help.',
  },
  longMessage: {
    forename: 'TestUser',
    email: 'test.user@example.com',
    message: 'x'.repeat(1000),
  },
  specialCharacters: {
    forename: 'Test !@#$%^&*()',
    email: 'test.user@example.com',
    message: 'Feedback !@#$%^&*()',
  },
  invalidTelephone: {
    forename: 'TestUser',
    email: 'test.user@example.com',
    message: 'I need help.',
    telephone: '12345',
  },
};

export const loginTestData = {
  invalidUsername: 'invalid-user',
  invalidPassword: 'invalid-password',
  emptyUsername: '',
  emptyPassword: '',
  invalidCredentialsError: 'Your login details are incorrect',
};

export const cartTestData = {
  updatedQuantity: 2,
  secondProductIndex: 1,
};

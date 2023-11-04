export const parseAuthorizationHeader = (header) => {
  const [, token] = header.split(' ');

  return token;
}

export const validateCredential = (token) => {
  console.log(process.env.CREDENTIALS, 'process.env.CREDENTIALS');
  console.log(atob(token), 'atob(token)');

  return process.env.CREDENTIALS === atob(token);
}

// FIXME
const getAuthUser = (payload) => {
  return new Promise((resolve, reject) => {
    resolve({
      iss: 'https://access.line.me', 
      sub: 'U1234567890abcdef1234567890abcdef ',
      aud: '1234567890', 
      exp: 1504169092, 
      iat: 1504263657, 
      nonce: '0987654asdf', 
      name: 'Taro Line', 
      picture: 'https://sample_line.me/aBcdefg123456', 
    });
  });
};

module.exports = {
  getAuthUser
};

export const constants = {

   // ________________ API ________________
   authApiV1: 'http://localhost/auth/api/v1',
   postApiV1: 'http://localhost/post/api/v1',
   userApiV1: 'http://localhost/user/api/v1',

   // ________________ REGEX ________________
   loginRegex:/^[a-zA-Z0-9]{3,52}$/,
   passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/,
}
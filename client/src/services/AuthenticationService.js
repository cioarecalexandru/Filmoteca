import Api from '@/services/Api'

export default {
  register(credentials) {
    console.log('register from client with ', credentials);
    return Api().post('user/addUser/', credentials);
  },
  login(credentials){
    return Api().post('user/logIn/', credentials);
  }
}

// AuthenticationService.register({
//     Email: 'testing@gmail.com',
//     Password: '123456'
// })

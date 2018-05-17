import Api from '@/services/Api'

export default {
    register(credentials){
        return Api().post('register/', credentials)
    }
}

// AuthenticationService.register({
//     Email: 'testing@gmail.com',
//     Password: '123456'
// })
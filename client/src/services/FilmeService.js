import Api from '@/services/Api'

export default {
  index() {
    return Api().get('/filme/filme');
  },

  adauga(film){
    return Api().post('/filme/adauga',film);
  }
}
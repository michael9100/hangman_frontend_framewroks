import Api from '@/services/api'

export default {
  register (payload) {
    return Api().post('auth', payload)
  }
}
import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api'
export default {
  name: 'login',

  mounted() {
    if (localStorage.getItem("User")) {
      this.$router.push({
        path: '/home'
      })
    }
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      api.post('/users/login', this.user).then((Response) => {
        console.log(Response.data)
        if (Response.data) {
          localStorage.setItem('User', JSON.stringify(Response.data));
          this.$router.push({
            path: '/home'
          })
        }
      })
    }
  },
}
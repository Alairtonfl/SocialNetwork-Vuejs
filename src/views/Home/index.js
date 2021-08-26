import 'bootstrap/dist/css/bootstrap.css'
import api from '../..//services/api'

export default {
  name: 'Home',
  components: {
  },
  mounted() {
    if (!localStorage.getItem("User")) {
      this.$router.push({
        path: '/'
      })
    }
    this.user = JSON.parse(localStorage.getItem("User"));
    api.get('/posts').then((Response) => {
      this.posts = Response.data;
    })
  },
  data() {
    return {
      user: [],
      posts: [],
      post: {
        title: '',
        body: '',
        user_id: '',
        image: ''
      },
      comment: {
        user_id: '',
        post_id: '',
        body: ''
      }
    }
  },
  methods: {
    insertPost() {
      this.post.user_id = this.user.id
      api.post('/posts', this.post).then((Response) => {
        console.log(Response.data);
      })
      this.$router.go();
    },
    insertComment(id) {
      this.comment.user_id = this.user.id;
      this.comment.post_id = id;
      api.post('/comments', this.comment).then((Response) => {
        console.log(Response.data)
      })
    }
  },
}
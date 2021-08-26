<template>
  <div class="container container-fluid border">
    <div>
      <h3>Usuario: {{ this.user.name }}</h3>
    </div>
    <form @submit.prevent="insertPost">
      <div class="form-floating mt-3">
        <textarea
          class="form-control"
          v-model="post.title"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          required
        ></textarea>
        <label for="floatingTextarea">Titulo</label>
      </div>
      <div class="form-floating mt-1 mb-1">
        <textarea
          class="form-control"
          v-model="post.body"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
        <label for="floatingTextarea2">Postagem</label>
      </div>
      <input
        type="text"
        name="image"
        v-model="post.image"
        class="form-control"
        placeholder="Link da imagem"
        required
      />
      <div class="text-center text-lg-start pt-2">
        <button
          type="submit"
          class="btn btn-primary"
          style="padding-left: 2.5rem; padding-right: 2.5rem"
        >
          Postar
        </button>
      </div>
    </form>
    <div class="mt-2" v-for="(post, index) in posts" :key="index">
      <div class="card mb-3">
        <img
          :src="post.image"
          class="card-img-top mx-auto d-block mt-2 mb-1"
          style="max-height: 300px; width: auto"
        />
        <div class="card-body text-start border">
          <h5 class="card-title">Titulo: {{ post.title }}</h5>
          <span><strong>Usuario: {{post.User.name}}</strong></span>
          <p class="card-text">{{ post.body }}</p>
          <div class="container container-fluid border">
            <h6 class="text-start"><strong>Comentarios:</strong></h6>
            <div
              v-for="(comment, index) in post.Comments"
              :key="index"
              class="text-start border mt-1 mb-1 p-1"
            >
              <span
                ><strong>{{ comment.User.name }}: </strong
                >{{ comment.body }}</span
              >
            </div>
            <form @submit="insertComment(post.id)">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="comment.body"
                  placeholder="Comente aqui"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Comentar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>


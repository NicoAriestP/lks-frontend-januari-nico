<template>
  <div class="home">
    <div class="container">
        <div class="row justify-content-center">
<div class="col d-none d-lg-block"></div>
            <div class="col">
    <div id="vue-app" class="card p-3 shadow-lg" style="
    margin-top: 20vh;
    background-color: #E0E0E0;">
        <div class="card-body">
            <h5 class="card-title">
                <center>
                    Login
                </center>
                <hr>
            </h5>
            <!-- <form> -->
            <div class="">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Masukkan Email Anda">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="">
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input v-model="password" type="password" placeholder="Masukkan Password Anda" class="form-control">
            </div><br>
            <center>
            <button class="btn btn-primary btn-user me-2 btn-block" @click="doLogin">Masuk</button>
            <!-- <a href="/daftar" class="btn btn-info btn-dark btn-block">Daftar</a> -->
            </center>
            <!-- </form> -->   
                                </div>
        </div>
    </div>
    <div class="col d-none d-lg-block"></div>
    </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
    }
  }
</script>
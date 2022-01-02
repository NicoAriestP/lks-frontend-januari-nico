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
                    Daftar
                </center>
                <hr>
            </h5>
            <!-- <form> -->
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Masukkan Email Anda">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input v-model="password" type="password" placeholder="Masukkan Password Anda" class="form-control">
            </div>
            <div class="">
                <label for="exampleInputPassword1" class="form-label">Konfirmasi Password:</label>
                <input v-model="conpassword" type="password" placeholder="Masukkan Konfirmasi Password Anda" class="form-control">
            </div>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label float-start" for="flexCheckDefault">
    Jadikan Anda sebagai Admin
  </label>
</div>
            <center>
            <button class="btn btn-success text-light btn-block">Daftar</button>
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
    name: 'daftar',
    components: {
      // HelloWorld
    }
  }
</script>
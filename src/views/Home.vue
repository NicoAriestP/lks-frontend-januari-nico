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
import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data(){
        return {
            email:'',
            password:'',
        }

    },
    methods:{
        doLogin(){
            axios.post(`http://127.0.0.1:8000/api/auth/login`,{
                email:this.email,
                password:this.password
            })
            .then(response => {
                if (response.data.success==true) {
                    console.log(response)
                    localStorage.setItem('user', JSON.stringify(response.data.data))
                    localStorage.setItem('token', JSON.stringify(response.data.token))
                    localStorage.setItem('LoggedUser', true)
                    window.location.href = "http://127.0.0.1:8080/barang"
                }
            })
            .catch(error => {
                alert("Username atau Password anda salah!")
                this.email = ''
                this.password = ''
                console.error(error);

            })
        },
    }
  }
</script>
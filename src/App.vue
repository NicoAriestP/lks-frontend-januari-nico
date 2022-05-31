<template>
  <div id="app">

    <Navbar />
    <Sidebar judul="Belajar Component" />
        <router-view/>
    <marquee class="bg-primary fixed-bottom text-light fw-bold">SELAMAT DATANG DI WEBSITE KAMI</marquee>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/barang/Author.vue'
export default {
  components:{
    Navbar,
    Sidebar
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

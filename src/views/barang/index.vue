<template>
    <div>
        <h3>Barang</h3>
        <center>
        <div style="width:60px;height:4px;" class="line bg-primary rounded mb-4"></div>
        </center>
        <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
  <div v-for="(brg,index) in dataBarang" :key="index" class="col">
     <card-barang :barangnya="brg" ></card-barang>
  </div>
</div>
</div>
    </div>
</template>
<script>
import CardBarang from '@/components/barang/CardBarang.vue'
import axios from 'axios'
export default {
    components:{
        'card-barang':CardBarang
    },
    created(){
        this.loadData()
    },
    data(){
        return {
            dataBarang:[]
        }
    },
    methods:{
        loadData(){
           axios.get(`http://127.0.0.1:8000/api/barang`)
            .then(response => {
                this.dataBarang = response.data
            })
            .catch(error => {
                console.error(error);
            })
        }, 
    }
}
</script>
<style>
</style>
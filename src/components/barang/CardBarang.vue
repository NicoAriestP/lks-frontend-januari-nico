<template>
    <div class="card h-100 shadow-lg ">
      <img width="200" height="200" src="" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{barangnya.nama}}</h5><hr>
        <p class="card-text">Harga: {{barangnya.harga}}</p>
        <p class="card-text">Stok: {{barangnya.stok}}</p>
      </div>
      <div class="card-footer d-flex justify-content-center ">
        <button class="btn"><i style="font-size:30px;padding:5px;" class="fas fa-search rounded bg-primary text-light "></i></button>
        <button @click="editData" class="btn"><i style="font-size:30px;padding:5px;" class="fas fa-edit rounded bg-warning text-light " aria-hidden="true"></i>
          </button>
        <button @click="hapusBarang" class="btn"><i style="font-size:30px;padding:5px;" class="fas fa-trash rounded bg-danger text-light" aria-hidden="true"></i></button>
      </div>
    </div>
</template>
<script>
export default {
    name:'CardBarang',
    props:{
        barangnya:{
            type:Object,
            required:true
        }
    },
    methods:{
        editData(){
            this.$emit('ceeditbarang', this.barangnya)
            
        },
        hapusBarang(){
          this.$emit('cehapusbarang', this.barangnya)
        }
    }
}
</script>
<style>
i {
  border-radius:50%;
}
</style>

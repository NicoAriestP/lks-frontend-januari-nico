<template>
    
    <div class="container bg-light">
        <div class="alert alert-success alert-dismissible fade show me-4" role="alert">
  <strong>Selamat Datang {{user.name}}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<center>
        <h3>Barang</h3>
        
        <div style="width:60px;height:4px;" class="line bg-primary rounded mb-4"></div>
        </center>
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-sm btn-success" @click="showFormTambah">
                    + Tambah
                </button>
                <button class="btn btn-sm btn-info mx-2 text-white" @click="tambahangka">+</button>
                <h5>{{ angka }}</h5>
                <h5>{{ namaBarang }}</h5>
                <div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
            </div>
        </div>
        <br>
        <div class="form" v-show="showForm" id="editform">
            <div style="border:2px solid blue;padding:5px;border-radius:3px;" class="">
                <h4>Form {{jenisForm}}</h4>
                <label>Nama Barang:</label>
                <input type="text" v-model="namaBarang" placeholder="Silakan input nama barang ...">
                <br>
                <label>Stok:</label>
                <input type="number" v-model="stokBarang" placeholder="Silakan stok  barang ...">
                <br>
                <label>Harga:</label>
                <input type="number" v-model="hargaBarang" placeholder="Silakan harga barang ...">
                <br>
                <br>
                <center>
                <button style="margin-right:5px;" type="button" @click="simpan">Simpan</button>
                <button type="button" @click="hideFormBarang">Batal</button>
                </center>
                <p v-show="loading">Loading....</p>
                <br>
            </div>
        </div>
        <h5>Latihan pengkondisian(if)</h5>
        <input type="text" v-model="type" placeholder="v-else-if coba" name="type">
        <div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
        <table border="1">
            <tr> <td>Looping array</td></tr>
            <tr v-for="hari in namaHari" :key="hari">

               <td>{{ hari }}</td> 
            </tr>
        </table>
        <br>
        <div v-if="success != ''" class="alert alert-success">
                            {{success}}
                        </div>
    <form @submit="formSubmit" enctype="multipart/form-data">
        <input type="file" id="foto" class="form-control" v-on:change="onChange">
        <button class="btn btn-sm btn-primary btn-block mb-2">Upload</button>
    </form>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="(brg,index) in dataBarang" :key="index" class="col mb-5">
            <card-barang :barangnya="brg" @cehapusbarang="hapusBarang" @ceeditbarang="showFormEdit"></card-barang>
            </div><br>
</div>
<div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="(file,index) in dataFoto" :key="index" class="col mb-5">
                    <img :src="'http://127.0.0.1:8000' + file.path" width="200" height="200"><p>{{file.name}}</p>
        </div>
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
        this.loadData();
        this.loadFoto();
    },
    data(){
        return {
            loading: false,

            dataBarang:[],
            dataFoto:[],
            showForm:false,
            modeForm:'tambah',
            namaBarang:'',
            stokBarang:'',
            hargaBarang:'',
            idBarang:'',
            user:'',
            angka:0,
            namaHari : ["Senin", "Selasa", "Rabu", "Kamis",
                        "Jumat", "Sabtu", "Minggu"
                        ],
            type:"",
            jenisForm:'',
            name: '',
            file: '',
            success: '',
            failed:''
        }
    },
        methods:{
        loadData(){
           axios.get(`http://127.0.0.1:8000/api/barang`)
            .then(response => {
                if(response.data.sukses==true){
                    this.dataBarang = response.data.barang
                    console.log(response.data.barang)
                }
            })
            .catch(error => {
                console.error(error);
            })
        }, 
        loadFoto(){
           axios.get(`http://127.0.0.1:8000/api/upload`)
            .then(response => {
                if(response.data.sukses==true){
                    this.dataFoto = response.data.foto
                    console.log(response.data.foto)//mengambil semua data di db dalam bentuk objek
                    console.log(response.data.foto[0])//mengambil object index ke 0
                }
            })
            .catch(error => {
                console.error(error);
            })
        }, 
        showFormTambah(){
            this.showForm = true
            this.modeForm = 'tambah'
            this.jenisForm = 'Tambah'
        },
        tambahangka(){
        let i = 0;
        while (i < 60) {
            this.angka += 1
            i++
            }
        },
        hideFormBarang(){
            this.showForm = false
            this.namaBarang=''
            this.stokBarang=''
            this.hargaBarang=''
        },
        simpan(){
            this.loading = true
            if(this.modeForm=='tambah'){
                this.prosesTambah()
            }else if(this.modeForm=='edit'){
                this.prosesEdit()
            }
        },
        prosesTambah(){
            axios.post('http://127.0.0.1:8000/api/barang',
            { 
                nama: this.namaBarang,
                harga: this.hargaBarang,
                stok: this.stokBarang,
            })
            .finally( ()=> {
                setTimeout(() => {
                    this.loading=false
                }, 1000);
            })
            .then((result)=>{
                if(result.data.success==true){
                    setTimeout(() => {
                        this.loading=false
                        alert("Berhasil input barang!")
                        this.loadData()
                        this.hideFormBarang()
                    }, 1000);
                }
            })
            .catch((err)=>console.log('error', err))
        },
        prosesEdit(){
            axios.put('http://127.0.0.1:8000/api/barang',
            { 
                id: this.idBarang,
                nama: this.namaBarang,
                stok: this.stokBarang,
                harga: this.hargaBarang,
                
            })
            .finally( ()=> {
                setTimeout(() => {
                    this.loading=false
                }, 1000);
            })
            .then((result)=>{
                if(result.data.success==true){
                    setTimeout(() => {
                        this.loading=false
                        this.loadData()
                        this.hideFormBarang()
                    }, 1000);
                }
            })
            .catch((err)=>console.log('error', err))
        },
        showFormEdit(barangnya){
            // console.log('barangnya', barangnya)
            this.showForm=true
            this.modeForm = 'edit'
            this.namaBarang=barangnya.nama
            this.stokBarang=barangnya.stok
            this.hargaBarang=barangnya.harga
            this.idBarang=barangnya.id
            this.jenisForm="Edit"
            window.location.href = "#editform"
        },
        hapusBarang(barangnya){
            this.namaBarang=barangnya.nama
            this.idBarang=barangnya.id
            if (confirm(`Anda Yakin Menghapus Barang: ` + this.namaBarang)) {
            axios.delete(`http://127.0.0.1:8000/api/barang/`+this.idBarang)
            .finally( ()=> {
                setTimeout(() => {
                    this.loading=false
                }, 1000);
            })
            .then((result)=>{
                if(result.data.success==true){
                    setTimeout(() => {
                        this.loading=false
                        this.loadData()
                        alert("Sukses")
                    }, 1000);
                }
            })
            .catch((err)=>console.log('error', err))
        }
        },
        onChange(e) {
                this.file = e.target.files[0];
            },
        formSubmit(e) {
            e.preventDefault();
            let existingObj = this;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            let data = new FormData();
            data.append('file', this.file);
            axios.post('http://127.0.0.1:8000/api/upload/', data, config)
                .then((result)=>{
                    existingObj.file = '';
                    existingObj.success = result.data.success;
                    document.getElementById("foto").value = "";
                    if (result.data.success=="File uploaded successfully.") {
                       this.loadFoto()
                    }
            })
                .catch(function (err) {
                    existingObj.output = err;
                    // alert("Gagal")
                    document.getElementById("foto").value = "";
                });
            }
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user)
    }

}
</script>
<style>
input{
    margin-bottom:2px;
    width:100%;
}
h4{
    border-bottom:2px solid blue;
}
.form{
    display:flex;
    justify-content:center;
    padding:5px;
}
label{
    float:left;
}
</style>
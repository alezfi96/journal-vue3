<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">20</span>
        <span class="mx-1 fs-3">Noviembre</span>
        <span class="mx-2 fs-4 fw-ligth">2023, Lunes</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Subir Foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>
<hr>
<div class="d-flex flex-column px-3 h-75">
 <textarea > Que sucedio hoy ?</textarea>
</div>

<FabButton
icon = 'fa-save' />

<img 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfiRzaPabE8EKNMM8DXBQl3N3Idcg01ZYPA&usqp=CAU" 
alt="entry-picture"
class="img-thumnail">
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        FabButton: defineAsyncComponent(()=> import ('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 1.0);
}
</style>
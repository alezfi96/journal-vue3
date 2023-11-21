<template>
  <div class="d-flex justify-content-center">
    <h2 class="aling-self-center">No hay nada selecionado</h2>
  </div>
  <FabButton />
</template>
<script>
import {defineAsyncComponent } from 'vue'
export default {
    components:{
        FabButton:defineAsyncComponent(()=> import('../components/FabButton.vue'))
    }
}
</script>


<style lang="scss" scoped>
div{
    height: 100%;
}
</style>
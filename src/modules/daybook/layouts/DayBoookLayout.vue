<template>
   <div>
    <MiNavbar />
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
   </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
    components:{
        MiNavbar:defineAsyncComponent(() => import('../components/MiNavbar.vue')),
        EntryList:defineAsyncComponent(() => import('../components/EntryList.vue'))
        
        
    }
}
</script>


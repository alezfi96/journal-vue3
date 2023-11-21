import { createStore } from 'vuex'


import jornalModule from '@/modules/daybook/store/journal'

const store = createStore({
    modules:{
        jornalModule
    }
})

export default store
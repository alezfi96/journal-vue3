import { createStore } from 'vuex'


import jornalModule from '../modules/daybook/store/journal/index'

const store = createStore({
    modules:{
       journal: jornalModule
    }
})

export default store
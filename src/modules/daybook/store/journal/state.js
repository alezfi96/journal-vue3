export default ()=> ({
    isLoanding : true,
    entries:[
    {
        id:new Date().getTime(),
        date: new Date().toDateString(),
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex illum nobis, libero consequuntur voluptatem minus optio dolore assumenda reprehenderit necessitatibus animi earum tempore ab omnis, sapiente id nesciunt! Doloribus?',
       picture:null,

    },
    {
        id:new Date().getTime()+1000,
        date: new Date().toDateString(),
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
       picture:null,
       
    },
    {
        id:new Date().getTime()+2000,
        date: new Date().toDateString(),
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing este es otro ejemplo de lorem',
       picture:null,
       
    }
]
})
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
const app = new Vue({
    el: '#app',
    data: {
    //creo un array vuoto di email
      emails: [],
    },
    //chiamo la funzione created
    created() {
        //ciclo per massimo 10 volte la lista di mail
        for (let i = 0; i < 10; i++) {
            //collego axios 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            //arrow function per richiamare il this.
            .then((res) => {
                //pusho le mail dentro il mio array vuoto
                this.emails.push(res.data.response)
            })
        }
    }
});



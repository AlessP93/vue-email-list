// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: '#app',
    data: {
        emails: [
            {
                "response":"mariorossi@hotmail.com"
            },
            {
                "response":"federicogialli@hotmail.com"
            },
            {
                "response":"luciano1@gmail.com"
            },
            {
                "response":"luisa99@hotmail.com"
            },
            {
                "response":"alesverdi@hotmail.com"
            },
            {
                "response":"marco55@libero.com"
            },
            {
                "response":"pasquale@hotmail.com"
            },
            {
                "response":"maria12@hotmail.com"
            },
            {
                "response":"alessiogialli@yahoo.com"
            },
            {
                "response":"franco100@hotmail.com"
            },
        ]
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            this.emails = res.success.response;
        })
});







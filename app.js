/**
 * Created by joeramone on 10/08/2016.
 */
var app = new Vue({
    el:"#app",
    data:{
        title:"Contas a pagar",
        bills:[{date_due:'20/08/2016', name: 'Conta de energia', value:127.99,done:1},
       {date_due:'21/08/2016', name: 'Conta de águra', value:40.99,done:0},
       {date_due:'22/08/2016', name: 'Conta de telefone', value:55.99,done:0},
       {date_due:'23/08/2016', name: 'Supermenrcado', value:625.99,done:0},
       {date_due:'24/08/2016', name: 'Cartão de crédito', value:1200.99,done:0},
       {date_due:'25/08/2016', name: 'Alimentação', value:25.99,done:1},
       {date_due:'26/08/2016', name: 'Conta de condomínio', value:155.99,done:0}]
    },
    computed:{
        status: function () {
            var count = 0;
            for(var i in this.bills){
                if(!this.bills[i].done){
                    count++;
                }
            }

            return !count?'Nenhuma conta a pagar':'Existem '+count+ ' linhas a pagar';
        }
    }
});
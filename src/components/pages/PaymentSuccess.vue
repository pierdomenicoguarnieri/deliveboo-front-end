<script>
import axios from 'axios';
import {store} from '../../store/store';
import {cart} from '../../js/cart.js';
import Loading from '../partials/Loading.vue';
export default {
  components: { Loading },
  name: 'PaymentSuccess',
  data() {
    return {
      store,
      cart,
      data: Array,
      transaction_id: String,
      neworder_id: Number,
    };
  },
  methods:{
    checkIfPaymentSuccess(){
      store.loaded = false;
      let data = {
        token: localStorage.getItem('token')
      };
      axios.post('http://127.0.0.1:8000/api/orders/check-payment', data)
      .then(response =>{
          if(response.data.success){
            cart.clearCart();
            store.loaded = true;
            this.data = response.data.data;
            this.transaction_id = response.data.transaction_id;
            this.transaction_id = response.data.transaction_id;
            this.neworder_id = response.data.neworder_id;
          }else{
            window.location.href = 'http://localhost:5174/error404'
          }
      })
    }
  },
  mounted(){
    store.loaded = false;
    this.checkIfPaymentSuccess();
  },
}
</script>

<template>
  <div class="page-wrapper">
  <Loading v-if="!store.loaded"/>
  <div class="content-wrapper" v-else>
    <h1 class="mb-3">Pagamento avvenuto con successo!</h1>
    <h5>Ti confermiamo che il tuo ordine presso il ristorante: "{{ data.restaurant_name }}" è andato a buon fine e verrà preparato al più presto!</h5>
    <span>Hai pagato: &euro; {{ data.total_price.toFixed(2) }}</span>
    <span>ID transazione: {{ transaction_id }}</span>
    <span>Il tuo ordine è il numero: <strong>{{ neworder_id }}</strong></span>
    <span>Per qualsiasi informazione contattaci alla mail di supporto <a class="mail-link" href="mailto:info@fooddelivery.it">info@deliveboo.it</a></span>
    <div class="btn-container">
      <router-link class="btn btn-primary boo-btn" :to="{name:'home'}">Torna alla home</router-link>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
  .page-wrapper{
    min-height: 600px;
    background-color: rgba(white, 0.6);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    .content-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .btn-container{
        margin-top: 30px;
        .mail-link{
          color: $tertiary-color !important;
        }
      }
    }
  }
</style>
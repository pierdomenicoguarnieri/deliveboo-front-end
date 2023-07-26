<script>
import axios from 'axios';
import {store} from '../../store/store';
import {cart} from '../../js/cart.js';
export default {
  name: 'PaymentSuccess',
  data() {
    return {
      store,
      cart,
    };
  },
  methods:{
    checkIfPaymentSuccess(){
      let data = {
        token: localStorage.getItem('token')
      };
      axios.post('http://127.0.0.1:8000/api/orders/check-payment', data)
      .then(response =>{
          if(response.data.success){
            localStorage.clear();
          }else{
            window.location.href = 'http://localhost:5174/error404'
          }
      })
    }
  },
  mounted(){
    this.checkIfPaymentSuccess();
  },
}
</script>

<template>
  <div class="page-wrapper">
    <h1>Pagamento avvenuto con successo!</h1>
    <div class="btn-container">
      <router-link class="btn btn-primary boo-btn" :to="{name:'home'}">Torna alla home</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-wrapper{
    min-height: 600px;
    background-color: rgba(white, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn-container{
      margin-top: 30px;
    }
  }
</style>
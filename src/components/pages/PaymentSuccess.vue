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
        console.log(response);
          if(response.data.success){
            cart.clearCart();
            store.loaded = true;
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
    <h1>Pagamento avvenuto con successo!</h1>
    <div class="btn-container">
      <router-link class="btn btn-primary boo-btn" :to="{name:'home'}">Torna alla home</router-link>
    </div>
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
    .content-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .btn-container{
        margin-top: 30px;
      }
    }
  }
</style>
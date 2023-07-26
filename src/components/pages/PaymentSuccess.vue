<script>
export default {
  name: 'PaymentSuccess',
  methods:{
    checkIfPaymentSuccess(){
      
    }
  },
  mounted(){
    localStorage.clear();
    this.checkIfPaymentSuccess()
  }
}
</script>

<template>
  <h1>Pagamento avvenuto con successo</h1>
  <router-link class="btn btn-primary" :to="{name:'home'}">Torna alla home</router-link>
</template>

<style lang="scss" scoped>

</style>
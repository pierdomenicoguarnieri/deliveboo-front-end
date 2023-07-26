
<script>
  import  {store} from '../../store/store';


export default {
  name: 'src/pages/Contacts.vue',

  setup() {
    return {
      
    };
  },
  data() {
    return {
      store
    }
  },

  mounted(){
  }
}
</script>

<template>
  <div class="page-wrapper">
    <h1>Error 404</h1>
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

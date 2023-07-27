
<script>
  import  {store} from '../../store/store';
import Loading from '../partials/Loading.vue';


export default {
  components: { Loading },
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
    store.loaded = true;
  }
}
</script>

<template>
  <div class="page-wrapper">
  <Loading v-if="!store.loaded"/>
  <div class="content-wrapper" v-else>
    <h1>Error 404</h1>
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

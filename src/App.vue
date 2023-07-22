<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AnimationHome from './components/partials/AnimationHome.vue';
import {store} from './store/store';

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components: {
    Header,
    Footer,
    AnimationHome
  },
  methods:{
    addPadding(){
      const body = document.querySelector('body');
      body.classList.add('padding')
    }
  },
  mounted(){
    this.addPadding()
  }
}
</script>

<template>

  <AnimationHome v-if="!store.animationFinished"/>
  <div class="content-wrapper rounded-5 overflow-hidden position-relative fadein" v-else>
    <Header/>
  
    <main>
      <router-view></router-view>
    </main>
  
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import './scss/app.scss';

  .fadein{
  animation: fade-in .4s;
  opacity: 1;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
</style>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AnimationHome from './components/partials/AnimationHome.vue';
import {store} from './store/store';
import Cart from './components/partials/Cart.vue';

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
    AnimationHome,
    Cart
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
    
    <Cart/>
  
    <main>
      <AnimationHome v-if="!store.animationFinished"/>
      <router-view v-else v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import './scss/app.scss';

  main{
    will-change: transform, opacity;
  }
  .fade-enter-from, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 0.3s ease-out;
  }

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

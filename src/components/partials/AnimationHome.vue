<script>
import {store} from '../../store/store';
export default {
  name: 'AnimationHome',
  data(){
    return{
      store
    }
  },
  methods:{
    finishAnimation(){
      setTimeout(() => {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('fadeout');
      }, 1600);
      setTimeout(() => {
        store.animationFinished = true;
      }, 1800);
    }
  },
  mounted(){
    this.finishAnimation();
  }
}
</script>

<template>
  <div class="boo-container vh-100 px-5 d-flex align-items-center justify-content-center">
    <div class="wrapper rounded-5 overflow-hidden d-flex align-items-center justify-content-center">
      <img src="img/Ghost_Orange_Text_Orange_Large.png" class="scale-up-ver-bottom" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  padding: 150px 0;
  height: 30%;
  background-color: rgba(white, 0.6);
  img{
    width: 85%;
    object-fit: cover;
  }
}
.fadeout{
  animation: fade-out .2s;
  opacity: 0;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
.scale-up-ver-bottom {
	-webkit-animation: scale-up-ver-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: scale-up-ver-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
}
@keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
}
</style>
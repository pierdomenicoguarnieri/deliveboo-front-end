<script>
import {store} from '../../store/store';
export default {
  name: 'Loading',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="loader-wrapper d-flex justify-content-center">
    <div class="custom-loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.custom-loader {
  width:50px;
  height:50px;
  border-radius:50%;
  background:conic-gradient(#0000 10%,#FC694C);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;
}
@keyframes s3 {to{transform: rotate(1turn)}}
</style>
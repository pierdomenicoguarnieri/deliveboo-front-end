<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<template>
  <Header/>

   <router-view></router-view>

</template>

<style lang="scss">
  @import './scss/app.scss';
</style>

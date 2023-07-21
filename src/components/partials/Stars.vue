<script>
export default {
  name: 'Stars',
  props:{
    rating: Number,
    originalRating: Number
  }
}
</script>

<template>
  <div class="d-flex align-items-center">
    <img src="img/Ghost_White_Chef_Hat_White.svg">
    <img src="img/Ghost_White_Chef_Hat_White.svg" v-for="number in  (rating - 1)"  v-show="rating > 0" :key="number">
    <img src="img/Ghost_White_Chef_Hat_White_Half.svg" v-if="originalRating !== rating" v-show="rating > 0">
    <span class="ms-3 text-dark">({{ originalRating.toFixed(2) }})</span>
  </div>
</template>

<style lang="scss" scoped>
  img{
    width: 30px;
    filter: saturate(500%) invert(100%) hue-rotate(203deg);
  }
</style>
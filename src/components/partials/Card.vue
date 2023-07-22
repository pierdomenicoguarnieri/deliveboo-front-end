<script>
export default {
  name: 'Card',
  props:{
    restaurant: Object
  }
}
</script>
<template>
  <div class="boo-card rounded-5">
    <div class="card-body">
      <div class="restaurant-image-wrapper">
        <img class="restaurant-image" :src="restaurant.image_path" :alt="restaurant.image_name">
      </div>
      <div class="text">
        <h3 class="restaurant-name">{{restaurant.name}}</h3>
        <span class="restaurant-address"><i class="fa-solid fa-location-dot"></i> {{ restaurant.address }}</span>
        <div class="typology-container my-2">
          <span v-for="typology in restaurant.types" :key="typology.id" class="badge text-bg-secondary me-2 text-capitalize mb-2">{{ typology.name }}</span>
        </div>
        <router-link :to="{name:'restaurant-detail', params: {slug: restaurant.slug}}"><span class="btn btn-primary d-block">Ordina</span></router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

  .boo-card{
    box-shadow: 5px 5px 20px rgba($custom_black, 0.5);
    color: $custom_black;
    overflow: hidden;
    height: 100%;
    .card-body{
      height: 100%;
      background-color: rgba($custom_white, 0.8);
      .text{
        padding: 10px;
        height: calc(100% - 200px);
        overflow-y: auto;
        .restaurant-address, .restaurant-name, .typology-container{
          white-space: nowrap;
          display: inline-block;
          padding: 0 10px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 35px;
          cursor: default;
          transition: all 1s;
          &:hover, &:hover, &:hover{
            white-space: break-spaces;
            max-width: none;
            max-height: 200px;
          }
        }
      }
      .restaurant-image-wrapper{
        height: 200px;
        .restaurant-image{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>
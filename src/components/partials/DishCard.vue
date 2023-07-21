<script>
export default {
  name: 'DishCard',
  props:{
    dish: Object
  }
}
</script>

<template>
  <div class="boo-card rounded-5">
    <div class="card-body">
      <div class="dish-image-wrapper">
        <img :src="dish.image_path" class="dish-image" :alt="dish.name" />
      </div>
      <div class="text d-flex flex-column">
        <h3 class="dish-name">{{ dish.name }}</h3>
        <p v-html="dish.description" class="dish-description mb-0"></p>
        <p class="dish-ingredients">Ingredienti: {{ dish.ingredients }}</p>
        <p>Prezzo: {{ dish.price.toFixed(2) }} &euro;</p>
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
        padding: 20px;
        height: calc(100% - 200px);
        overflow-y: auto;
        p{
          margin-bottom: 10px;
        }
        .dish-name, .dish-ingredients{
          white-space: nowrap;
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 35px;
          cursor: default;
          transition: all 1s;
          &:hover, &:hover{
            white-space: break-spaces;
            max-width: none;
            max-height: 200px;
          }
        }
      }
      .dish-image-wrapper{
        height: 200px;
        .dish-image{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>
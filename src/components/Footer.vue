<script>
export default {
  name:'Footer'

}
</script>

<template>
  <footer>
    <div class="container-fluid d-flex justify-content-center align-items-center h-100">
      <strong>Made by TEAM 5</strong>

    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
@use '../scss//partials//variables' as *;

footer{
  height: 80px;
  background-color: rgba($custom_white, 0.8);
  color: $tertiary_color;
}

</style>
<script>
  export default {
    name: 'Contacts',
    components:{
    },
    data() {
      return {
      }
    }
  }
</script>

<template>
  <div class="contacts-container-inner d-flex flex-column align-items-center">
    <h1 class="mb-5">Contattaci</h1>
    <div class=" info-container mb-5">
      <h4 class="mb-3">Domande sul tuo ordine?</h4>
      <p>Scrivici una email a 
        <a href="mailto:support@deliveboo.com">
          <strong>support@deliveboo.com</strong> 
        </a> verrai ricontattato al più presto!
      </p>
    
      <div class="text-start">
        <h4>Deliveboo S.r.l.</h4>
        <div>
          <p><strong>Email: </strong><a href="mailto:info@fooddelivery.it">info@deliveboo.it</a></p>
          <p><strong>Telefono: </strong><a href="tel:00390123456789">+39 0123456789</a></p>
          <p><strong>P. IVA:  </strong>12345678998</p>
          <p><strong>Sede legale: </strong><a href="https://goo.gl/maps/rEEeLo5VjbSSjJaV7" target="_blank" rel="noopener">Via Tommaso Marino n.7, 20121 - Milano (MI)</a></p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/partials/variables' as *;
.contacts-container-inner {
  padding: 2rem;
  background-color: rgba(white, 0.6);
  color: #65605F;
  text-align: center;
}
.info-container {
  width: 600px;
  background-color: $custom_white;
  padding: 50px 40px;
  border-radius: 20px;
  p{
    margin-bottom: 10px;
    a{
      color: inherit;
      text-decoration: none;
      &:hover,
      &:active {
        text-decoration: underline !important;
        color: $tertiary_color;
      }
    }
  }

}

@media screen and (max-width: 670px) {
  .info-container{
    max-width: 500px;
  }
}

@media screen and (max-width: 570px) {
  .info-container{
    max-width: 400px;
  }
}
</style>

<script>
import ContactForm from '../components/pages/Contacts.vue';

export default {
  name: 'Contacts',
  components: {
    ContactForm
  },
  data() {
    return {
      partners: [
        { id: 1, name: 'Partner 1', image: 'https://source.unsplash.com/random?partner1' },
        { id: 2, name: 'Partner 2', image: 'https://source.unsplash.com/random?partner2' },
      ]
    }
  }
}
</script>


<template>
  <div class="contacts-container-inner">
    <h1 class="contacts-title">Contatti</h1>

    <section class="form-section">
      <h2 class="section-title">Invia un messaggio</h2>
      <ContactForm />
    </section>

    <section class="info-section">
      <h2 class="section-title">Informazioni di contatto</h2>
      <div class="info-container">
        <div class="info-description">
          <p>Email: <a href="mailto:info@fooddelivery.it">info@fooddelivery.it</a></p>
          <p>Telefono: <a href="tel:0123456789">0123456789</a></p>
          <p>Indirizzo: <a href="https://goo.gl/maps/LuG3D8obE4R2" target="_blank" rel="noopener">Via Roma 22,
              Milano</a></p>
        </div>
        <div id="map"></div>
      </div>
    </section>

    <section class="partners-section">
      <h2 class="section-title">I nostri partner</h2>
      <div class="partners-grid">
        <div class="partner-card" v-for="partner in partners" :key="partner.id">
          <img :src="partner.image" :alt="'Logo di ' + partner.name" class="partner-image">
          <h3>{{ partner.name }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped lang="scss">
.contacts-container-inner {
  padding: 2rem;
  background-color: #f0ebe9;
  color: #65605F;
  text-align: center;
  font-family: Arial, sans-serif;
}

.contacts-title,
.section-title {
  margin-bottom: 1rem;
  font-size: 2em;
  color: #E37285;
}

.info-section,
.form-section,
.partners-section {
  margin-bottom: 4rem;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.info-description {
  font-size: 1.2em;
  margin-bottom: 2rem;

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
}

#map {
  width: 50%;
  height: 250px;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.partner-card {
  width: 300px;
  margin: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.partner-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

/* Styles for the form - replace with the actual form styles */
input[type=text],
input[type=email],
textarea,
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #E37285;
  }
}

/* Responsive adjustments */
@media screen and (max-width: 1024px) {

  .contacts-title,
  .section-title {
    font-size: 1.8em;
  }

  .info-description {
    font-size: 1.1em;
  }

  .partner-card {
    width: 250px;
  }
}

@media screen and (max-width: 768px) {
  .contacts-container-inner {
    padding: 1rem;
  }

  .contacts-title,
  .section-title {
    font-size: 1.6em;
  }

  .info-description {
    font-size: 1em;
  }

  .partner-card {
    width: 200px;
  }

  .info-container {
    flex-direction: column;
  }

  #map {
    width: 100%;
    height: 200px;
  }

  input[type=text],
  input[type=email],
  textarea,
  select {
    width: 90%;
  }
}

@media screen and (max-width: 480px) {

  .contacts-title,
  .section-title {
    font-size: 1.4em;
  }

  .info-description {
    font-size: 0.9em;
  }

  .partner-card {
    width: 100%;
  }

  input[type=text],
  input[type=email],
  textarea,
  select {
    width: 85%;
  }
}
</style>

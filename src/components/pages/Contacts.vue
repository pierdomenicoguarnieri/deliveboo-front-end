<script>

export default {
  name: 'Contacts',

  data() {
    return {
      partners: [
        { id: 1, name: 'Partner 1', image: 'https://source.unsplash.com/random?partner1' },
        { id: 2, name: 'Partner 2', image: 'https://source.unsplash.com/random?partner2' },
        // Aggiungi altri partner qui...
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
      <p class="info-description">
        Email: info@fooddelivery.it <br>
        Telefono: 0123456789 <br>
        Indirizzo: Via Roma 22, Milano
      </p>
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

.info-description {
  font-size: 1.2em;
  margin-bottom: 2rem;
}

.info-section,
.form-section,
.partners-section {
  margin-bottom: 4rem;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.partner-card {
  width: 300px;
  margin: 1rem;
}

.partner-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
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
}

input[type=text]:focus,
input[type=email]:focus,
textarea:focus,
select:focus {
  border: 1px solid #E37285;
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
}
</style>

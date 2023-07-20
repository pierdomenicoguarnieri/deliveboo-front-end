<template>
  <div class="restaurant-detail">
    <div class="header-card">
      <div class="header-card-image">
        <img :src="'https://source.unsplash.com/random?restaurant'" alt="Restaurant image" />
      </div>
      <div class="header-card-info">
        <h1>{{ restaurant.name }}</h1>
        <p>Indirizzo: {{ restaurant.address }}</p>
        <p>Telefono: {{ restaurant["telephone-number"] }}</p>
        <p>Email: {{ restaurant.email }}</p>
        <div class="rating">{{ restaurant.rating }}</div>
      </div>
    </div>
    <section class="dishes-section">
      <h2>I nostri piatti</h2>
      <div class="dishes-grid">
        <div class="dish-card" v-for="dish in dishes" :key="dish.name">
          <div class="dish-card-image">
            <img :src="'https://source.unsplash.com/random?' + dish.name" alt="Dish image" />
          </div>
          <div class="dish-card-info">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
            <p>Ingredienti: {{ dish.ingredients }}</p>
            <p>Prezzo: {{ dish.price }}€</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {
        "name": "Ristorante La Buona Forchetta",
        "email": "info@labuonaforchetta.it",
        "telephone-number": "+39 06 1234567",
        "address": "Via del Gusto, 10, 00100 Roma Italia",
        "rating": "⭐⭐⭐⭐⭐",
      },
      dishes: [
        { name: 'antipasto', description: 'Antipasto con selezione di affettati e formaggi locali', ingredients: 'prosciutto, mozzarella, olive', price: 9 },
        { name: 'carbonara', description: 'La tradizionale pasta alla carbonara con guanciale croccante', ingredients: 'spaghetti, uova, guanciale', price: 12 },
        { name: 'cotoletta', description: 'Cotoletta alla milanese con patate al forno', ingredients: 'vitello, pangrattato, patate', price: 15 },
        { name: 'tiramisu', description: 'Il classico dolce al caffè con savoiardi e mascarpone', ingredients: 'uova, zucchero, caffè', price: 7 },
        { name: 'pizza margherita', description: 'La classica pizza margherita con mozzarella e pomodoro', ingredients: 'farina, acqua, lievito, sale, olio, pomodoro, mozzarella, basilico', price: 8 },
        { name: 'gelato', description: 'Gelato artigianale ai gusti di fragola e cioccolato', ingredients: 'latte, zucchero, uova, fragola, cacao', price: 5 },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.restaurant-detail {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
}

.header-card {
  grid-column: 1 / span 12;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.header-card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.header-card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dishes-section {
  grid-column: 1 / span 12;
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.dish-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.dish-card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 992px) {
  .dishes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .header-card-image img {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .dishes-grid {
    grid-template-columns: 1fr;
  }

  .header-card-image img {
    height: 100px;
  }
}
</style>

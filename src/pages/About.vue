<template>
    <div class="about-container-inner">
        <h1 class="about-title">Chi Siamo</h1>

        <section class="team-section">
            <h2 class="section-title">Il nostro team</h2>
            <div class="team-grid">
                <div class="team-card" v-for="n in 4" :key="n">
                    <img class="team-member-image" :src="'https://source.unsplash.com/random?person,' + n"
                        alt="Membro del team">
                    <h3 class="team-member-name">Nome del Membro</h3>
                    <p class="team-member-role">Ruolo nel team</p>
                </div>
            </div>
        </section>

        <section class="location-section">
            <h2 class="section-title">Dove siamo</h2>
            <p class="location-description">
                Siamo situati a Milano, in Via Roma 22.
            </p>
            <img class="location-map" src="https://source.unsplash.com/random?city" alt="Mappa della località">
        </section>

        <section class="career-section">
            <h2 class="section-title">Lavora con noi</h2>
            <p class="career-description">
                Stiamo sempre cercando nuovi talenti per unirsi al nostro team. Invia il tuo CV a careers@fooddelivery.it.
            </p>
            <a class="career-button" href="mailto:careers@fooddelivery.it">Invia CV</a>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.about-container-inner {
    padding: 2rem;
    background-color: #f0ebe9;
    color: #65605F;
    text-align: center;
    font-family: 'Lato', sans-serif;
}

.about-title,
.section-title {
    margin-bottom: 1rem;
    font-size: 2.5em;
    color: #E37285;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.team-section,
.location-section,
.career-section {
    margin-bottom: 4rem;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.team-card {
    background-color: #FBFBFF;
    border-radius: 5px;
    padding: 1rem;
    overflow: hidden;
    transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px #CCC9A1;
        transform: scale(1.02);
    }
}

.team-member-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}

.team-member-name,
.team-member-role {
    margin-top: 10px;
}

.location-map {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: 1rem;
}

.career-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 10px 20px;
    background-color: #E37285;
    color: #FBFBFF;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color .3s ease, color .3s ease;

    &:hover {
        background-color: #4CFCC1;
        color: #0F1108;
    }
}

@media (max-width: 768px) {

    .about-title,
    .section-title {
        font-size: 2em;
    }
}

@media (max-width: 480px) {

    .about-title,
    .section-title {
        font-size: 1.5em;
    }
}
</style>

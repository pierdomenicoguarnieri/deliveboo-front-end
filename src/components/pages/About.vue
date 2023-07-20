<script>
    export default {
        name: 'About'
    }
</script>

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

<style scoped lang="scss">
.about-container-inner {
    padding: 20px;
    background-color: #f0ebe9;
    color: #65605F;
    text-align: center;
}

.about-title,
.section-title {
    margin-bottom: 20px;
    font-size: 2em;
    color: #E37285;
}

.team-section,
.location-section,
.contact-section,
.career-section {
    margin-bottom: 40px;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.team-card {
    background-color: #FBFBFF;
    border-radius: 5px;
    padding: 10px;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 10px #CCC9A1;
    }
}

.team-member-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.team-member-name,
.team-member-role {
    margin-top: 10px;
}

.location-map {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: 20px;
}

.career-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #E37285;
    color: #FBFBFF;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        background-color: #4CFCC1;
        color: #0F1108;
    }
}

@media (max-width: 768px) {
    .team-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .team-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>

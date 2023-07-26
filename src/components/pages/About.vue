<template>
    <div class="about-container-inner">
        <h1 class="about-title">Chi Siamo</h1>

        <section class="team-section">
            <h2 class="section-title">Il nostro team</h2>
            <div class="team-grid">
                <div class="team-card" v-for="n in 6" :key="n">
                    <img class="team-member-image" :src="'https://source.unsplash.com/random?person,' + n"
                        alt="Membro del team">
                    <div class="team-member-info">
                        <h3 class="team-member-name">Nome del Membro</h3>
                        <p class="team-member-role">Ruolo nel team</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="location-section">
            <h2 class="section-title">Dove siamo</h2>
            <p class="location-description">
                Siamo situati a Milano, in Via Roma 22.
            </p>
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
    name: 'About',
}
</script>

<style scoped lang="scss">
.about-container-inner {
    padding: 20px;
    background-color: rgba(white, 0.6);
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
.career-section {
    margin-bottom: 40px;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.team-card {
    position: relative;
    background-color: #FBFBFF;
    border-radius: 5px;
    padding: 10px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 10px #CCC9A1;
    }
}

.team-member-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.team-member-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
}

.team-card:hover .team-member-info {
    opacity: 1;
}

.location-section {
    background: url('https://source.unsplash.com/random?city') no-repeat center center/cover;
    color: white;
    padding: 5rem 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
}

.location-section::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.location-description {
    position: relative;
    z-index: 1;
}

.career-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #E37285;
    color: #FBFBFF;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

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
        grid-template-columns: 1fr;
    }
}
</style>

<template>
    <div class="about-container-inner">
        <h1 class="about-title">Chi Siamo</h1>

        <section class="team-section">
            <h2 class="section-title">Il nostro team</h2>
            <div class="d-flex align-items-center justify-content-center">
                <div class="team-card">
                    <img class="team-member-image" :src="'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="team-member-info">
                        <h3 class="team-member-name">Pierdomenico Guarnieri</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="#"><i class="fa-brands fa-linkedin me-3"></i></a>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-card"> 
                    <img class="team-member-image" :src="'https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzY2hpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>                        
                    <div class="team-member-info">
                        <h3 class="team-member-name">Daniele Spuria</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="#"><i class="fa-brands fa-linkedin me-3"></i></a>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-card">
                    <img class="team-member-image" :src="'https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="team-member-info">
                        <h3 class="team-member-name">Niccolò Vaccina</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="#"><i class="fa-brands fa-linkedin me-3"></i></a>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-card">
                    <img class="team-member-image" :src="'https://plus.unsplash.com/premium_photo-1666298858421-3765c17bcf80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="team-member-info">
                        <h3 class="team-member-name">Emilio Federico</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="#"><i class="fa-brands fa-linkedin me-3"></i></a>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="location-section d-flex align-items-center justify-content-center">
            <div class="location-description">
                <h2 class="section-title">Dove siamo</h2>
                <p>Siamo situati a Milano, in Via Roma n.22.</p>
                
            </div>
        </section>

        <section class="career-section d-flex align-items-center justify-content-center">
            <div>
                <h2 class="section-title">Lavora con noi</h2>
                <p class="career-description">
                    Stiamo sempre cercando nuovi talenti per unirsi al nostro team. Invia il tuo CV a careers@fooddelivery.it.
                </p>
                <a class="btn btn-primary boo-btn" href="mailto:careers@fooddelivery.it">Invia CV</a>
            </div>            
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
}

.team-section,
.location-section,
.career-section {
    margin-bottom: 40px;
}

.team-card {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    margin: 0 10px;
    width: calc(100% / 4);
    min-height: 400px;
    &:hover {
        box-shadow: 0 0 10px #CCC9A1;
    }
    .social{
        position: absolute;
        bottom: 10px;
        left: 20px;
        i{
            font-size: 30px;
        }
    }
}

.team-member-image {
    width: 100%;
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
    background: url('https://www.touringclub.it/sites/default/files/styles/gallery_full/public/immagini_georiferite/milano_skyline.jpg?itok=TbPKX_QG') no-repeat center center/cover;
    color: white;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    .location-description {
        position: relative;
        z-index: 1;
    }
}

.career-section{
    background: url('https://qsfera.it/media/k2/items/cache/0d0c19531d6e29f793ed165732978408_XL.jpg') no-repeat center center/cover;
    height: 250px;
    border-radius: 15px;
    color: white;
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

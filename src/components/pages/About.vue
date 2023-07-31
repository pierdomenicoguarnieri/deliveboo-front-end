<script>
export default {
    name: 'About',
}
</script>

<template>
    <div class="about-container-inner">
        <h1 class="mb-5">Chi Siamo</h1>

        <section class="team-section">
            <div class="d-flex align-items-center justify-content-center flex-wrap">
                <div class="team-card">
                    <img class="team-member-image" src="/public/img/team/pierdomenico-guarnieri.jpg" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="team-member-info">
                        <h3 class="team-member-name">Pierdomenico Guarnieri</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="https://www.linkedin.com/in/pierdomenico-guarnieri-820740263/">
                                <i class="fa-brands fa-linkedin me-3"></i>
                            </a>
                            <a href="https://github.com/pierdomenicoguarnieri">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="team-card"> 
                    <img class="team-member-image" src="/public/img/team/daniele-spuria.png" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>                        
                    <div class="team-member-info">
                        <h3 class="team-member-name">Daniele Spuria</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="https://www.linkedin.com/in/daniele-spuria-49375a282/"><i class="fa-brands fa-linkedin me-3"></i></a>
                            <a href="https://github.com/DanieleSpuria"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-card">
                    <img class="team-member-image" src="/public/img/team/niccolo-vaccina.jpg" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="team-member-info">
                        <h3 class="team-member-name">Niccolò Vaccina</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="www.linkedin.com/in/niccolò-vaccina-566351198">
                                <i class="fa-brands fa-linkedin me-3"></i>
                            </a>
                            <a href="https://github.com/nvaccina">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="team-card">
                    <img class="team-member-image" src="/public/img/team/emilio-federico.png" alt="Membro del team">
                    <div class="social">
                        <i class="fa-brands fa-linkedin me-3"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="team-member-info">
                        <h3 class="team-member-name">Emilio Federico</h3>
                        <p class="team-member-role">Jr. Full Stack Web Developer</p>
                        <div class="social">
                            <a href="https://www.linkedin.com/in/emilio-federico-085b63153/"><i class="fa-brands fa-linkedin me-3"></i></a>
                            <a href="https://github.com/emilioff8822"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="location-section d-flex align-items-center justify-content-center">
            <div class="location-description">
                <h2>Dove siamo</h2>
                <p class="address pt-3">
                    <i class="fa-solid fa-location-dot me-2"></i>
                    <a href="https://goo.gl/maps/rEEeLo5VjbSSjJaV7" target="_blank" rel="noopener">Via Tommaso Marino n.7, 20121 - Milano (MI)</a>
                </p>
            </div>
        </section>

        <section class="career-section d-flex align-items-center justify-content-center">
            <div class="career-description">
                <h2>Lavora con noi</h2>
                <p class="pt-3">
                    Stiamo sempre cercando nuovi talenti per unirsi al nostro team. 
                    Invia il tuo CV a <strong>careers@deliveboo.it</strong>.
                </p>
                <a class="btn btn-primary boo-btn" href="mailto:careers@deliveboo.it">Invia CV</a>
            </div>            
        </section>
    </div>
</template>

<style scoped lang="scss">
@use '../../scss/partials/variables' as *;

.about-container-inner {
    padding: 2rem;
    background-color: rgba(white, 0.6);
    color: #65605F;
    text-align: center;
}

.team-section,
.location-section,
.career-section {
    margin-bottom: 50px;
}
.team-card {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    margin: 0 10px;
    max-width: calc(100% / 4 - 20px);
    min-height: 400px;
    &:hover {
        box-shadow: 0 0 10px #CCC9A1;
    }
    .social{
        position: absolute;
        bottom: 10px;
        left: 20px;
        a{
            color: $custom_gray;
        }
        i{
            font-size: 30px;
        }

    }
    .team-member-image {
        width: 100%;
        height: 500px;
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
        font-size: 1rem;
    }
    &:hover .team-member-info {
        opacity: 1;
        i{
            color: $tertiary_color;
        }
    }
}

.location-section {
    background: url('https://www.grattacielimilano.it/it/wp-content/uploads/2019/12/skyline-da-branca-20191116-balena1.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    height: 300px;
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
        background: rgba(0, 0, 0, 0.5);
    }
    .location-description {
        position: relative;
        z-index: 1;
        .address{
            &:hover{
                color: $tertiary_color;
                a{
                    color: $tertiary_color;
                }
            }
            a{
                color:   white;
            }
        }

    }
}

.career-section{
    background: url('https://qsfera.it/media/k2/items/cache/0d0c19531d6e29f793ed165732978408_XL.jpg') no-repeat center center/cover;
    height: 300px;
    border-radius: 15px;
    color: white;
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
        background: rgba(0, 0, 0, 0.5);
    }
    .career-description{
        position: relative;
        z-index: 1;
        a{
            color:   white;
            &:hover{
                color: $tertiary_color;
            }
        }
    }
}

@media screen and (max-width: 1300px) {
    .team-card{
        margin: 0 20px;
        margin-bottom: 40px;
        max-width: calc(100% / 3 - 40px);
    }
}
@media screen and (max-width: 1080px) {
    .team-card{
        margin: 0 30px;
        margin-bottom: 40px;
        max-width: calc(100% / 2 - 60px);
    }
}

@media screen and (max-width: 810px) {
    .team-card{
        margin: 0 10px 40px 10px;
        max-width: 100%
    }
}
</style>

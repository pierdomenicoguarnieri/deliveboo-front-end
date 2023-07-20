<script>
export default {
    name: 'Header',
    data() {
        return {
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">

            <div class="me-5">
                <div class="navbar-brand d-flex align-items-center h-100">
                    <router-link :to="{name:'home'}">
                        <img src="/img/Ghost_Orange_Text_Orange.png" class="d-md-inline-block d-none h-100" alt="">
                        <img src="/img/Ghost_Orange.svg" class="d-md-none svg w-25" alt="">
                    </router-link>

                </div>
            </div>
            <nav class="ms-5 d-none d-md-inline">
                <ul class="d-flex justify-content-center align-items-center h-100">
                    <li>
                        <router-link :to="{name:'home'}">home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'about'}">chi siamo</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'contacts'}">contatti</router-link>
                    </li>
                </ul>
            </nav>
            <nav class="navbar  bg-white  d-md-none h-100">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <router-link :to="{name:'home'}">home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'about'}">chi siamo</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'contacts'}">contatti</router-link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
            <!--

            
            <div class="menu-icon" @click="toggleDropdown">&#9776;</div>
            <transition v-if="showDropdown" name="slide-fade">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }" class="link" exact-active-class="active"> Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }" class="link" exact-active-class="active"> Contatti</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" class="link" exact-active-class="active"> Chi Siamo</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'blog' }" class="link" exact-active-class="active"> Blog</router-link>
                    </li>
                </ul>
            </transition>
            -->
        </div>
        
    </header>
</template>

<style lang="scss" scoped>

@import '../scss/app.scss';
header {
    background-color: white;
    border-bottom: 3px solid black;
    color: #0F1108;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    transition: all 0.3s ease-in-out;
    ul{
        list-style: none;
        padding: 20px 0;
        margin: 0;
        li{
            margin: 0 10px;

            a{
            text-transform: uppercase;
            text-decoration: none;
            color: black;
            font-size: 18px;
            font-weight: bold;
            border-bottom: 3px solid white;
                &:hover, &.active{
                    color: $tertiary_color;
                    border-bottom: 3px solid $tertiary_color;
                }
            }
        }
    }
}
.menu-icon {
    cursor: pointer;
    font-size: 1.5em;
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

/* Media Query per iPad */
@media (max-width: 768px) {
    .header {
        padding: 0 10px;
    }

    .logo {
        font-size: 1.2em;
    }

    .menu-icon {
        font-size: 1.2em;
    }
}

/* Media Query per cellulari */
@media (max-width: 480px) {
    .header {
        padding: 0 5px;
    }

    .logo {
        font-size: 1em;
    }

    .menu-icon {
        font-size: 1em;
    }
}
</style>

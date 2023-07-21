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
                    <li>
                        <a href="http://127.0.0.1:8000/admin">Dashboard</a>
                    </li>
                </ul>
            </nav>
            <div class="d-md-none h-100">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="fa-solid fa-bars"></i>
                </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="pe-3">
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
        </div>
        
    </header>
</template>

<style lang="scss" scoped>
@import '../scss/partials/variables';

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
.offcanvas.offcanvas-end{
    width: 100%;
}
.offcanvas.offcanvas-body{
    width: 100%;
    
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
@media screen and (min-width: 991px) {
  .offcanvas.offcanvas-end{
    width: 50%;
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
<script>
import Cart from '../components/partials/Cart.vue';
export default {
    name: 'Header',
    components:{
        Cart,
    },
    data() {
        return {
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            const dropdown = document.getElementById('boo-dropdown')
            const dropdown_sm = document.getElementById('boo-dropdown-sm')
            dropdown.classList.contains('hidden') ? dropdown.classList.remove('hidden') : dropdown.classList.add('hidden')
            dropdown_sm.classList.contains('hidden') ? dropdown_sm.classList.remove('hidden') : dropdown_sm.classList.add('hidden')
        },

        toggleMenu(){
            const menu = document.getElementById('boo-menu-body');
            menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
        },
        printTotalQuantity(dish){
            let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));

            arraydishes.forEach(dish_from_array => {
                console.log(dish_from_array);
                /*
                if(dish.id == dish_from_array.id){
                let quantity = document.getElementById('quantity' +  dish.id);
                quantity.innerHTML = dish_from_array.counterQuantity;
                }*/
        });
    },
    }
}
</script>

<template>
    <header>
        <div class="container-fluid d-flex justify-content-between px-md-4 align-items-center">
            <div>
                <div class="navbar-brand d-flex align-items-center h-100">
                    <router-link :to="{name:'home'}">
                        <img src="/img/Ghost_Orange_Text_Orange.png" class="d-md-inline-block d-none h-100" alt="">
                        <img src="/img/Ghost_Orange.svg" class="d-md-none svg" alt="">
                    </router-link>

                </div>
            </div>
            <nav class="d-none w-75 d-md-inline">
                <ul class="d-flex justify-content-end align-items-center h-100">
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
                    <div class="boo-dropdown position-relative ms-4">
                        <i class="fa-solid fa-cart-shopping h-100" @click="toggleDropdown()"></i>
                        <div class="boo-dropdown-body position-absolute hidden" id="boo-dropdown">
                            <Cart/>
                            <span class="rounded-full flex items-center justify-center totalItems text-sm">
                                {{ printTotalQuantity }}
                            </span>
                        </div>
                    </div>
                </ul>
            </nav>
            <div class="d-md-none d-flex align-items-center h-100">
                <div class="boo-menu-sm position-relative">
                    <button class="btn border-0" @click="toggleMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div class="boo-menu-body hidden position-absolute" id="boo-menu-body">
                        <nav>
                            <ul class="d-flex">
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
                    </div>
                </div>

                <div class="boo-dropdown position-relative ms-2">
                    <i class="fa-solid fa-cart-shopping fs-3" @click="toggleDropdown()"></i>
                    <div class="boo-dropdown-body position-absolute hidden" id="boo-dropdown-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi temporibus nisi aut nobis, officiis illum obcaecati provident iste totam eum ut mollitia debitis. Ducimus odio officiis voluptatibus labore facilis doloribus.
                    </div>
                </div>

            </div>
        </div>
        
    </header>
</template>

<style lang="scss" scoped>
@import '../scss/partials/variables';

header {
    background-color: rgba($custom_white, $alpha: 0.95);
    width: 100%;
    color: #0F1108;
    top: 0;
    left: 0;
    z-index: 99999;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
    .svg{
        width: 50px;
    }
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
            font-size: calc(0.22rem + 1.1vw);
            font-weight: bold;
            border-bottom: 3px solid transparent;
                &:hover, &.active{
                    color: $tertiary_color;
                    border-bottom: 3px solid $tertiary_color;
                }
            }
        }
    }
}

.boo-dropdown{
    cursor: pointer;
    i{
        font-size: calc(0.6rem + 0.8vw);
    }
    .boo-dropdown-body{
        z-index: 999;
        background-color: $custom_white;
        padding: 10px 10px;
        min-height: 150px;
        max-height: 300px;
        width: 350px;
        overflow-y: auto;
        right: -10px;
        top: 47px;
        border-radius: 0 0 20px 20px;
        box-shadow: 10px 10px 30px rgba($custom_black, 0.3);
        transition: all .5s;
        &.hidden{
            min-height: 0;
            max-height: 0;
            opacity: 0;
        }
    }
}

.boo-menu-sm{
    .btn{
        font-size: 1.5rem;
    }
    .boo-menu-body{
        overflow: hidden;
        height: 40px;
        z-index: 999;
        right: 30px;
        top: 11px;
        width: 220px;
        transition: all .5s;
        &.hidden{
            z-index: -999;
            opacity: 0;
            width: 0;
            height: 0;
        }
        nav{
            ul{
                padding: 0;
                li{
                    padding: 0 5px;
                    margin: 0;
                    a{
                        white-space: nowrap;
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
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
        font-size: 1rem;
    }

    .menu-icon {
        font-size: 1rem;
    }
}
</style>
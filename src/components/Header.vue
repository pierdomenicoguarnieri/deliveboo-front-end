<script>
import Cart from '../components/partials/Cart.vue';
import {store} from '../store/store';
import axios from 'axios';

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
        toggleMenu(){
            const menu = document.getElementById('boo-menu-body');
            menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
        },
        
        getRestaurant(endpoint) {
            store.loaded = false; 
            store.done = false; 
            axios.get(store.apiUrl + endpoint)
            .then(results => {
            this.restaurant = results.data;
            setTimeout(() => {
                store.loaded = true;
                this.checkInCart();
            }, 200);
            })
        },
        
        addCart(dish) {
            // Salvo il localStorage in un array
            let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
        
            // Ciclo l'array ed aggiungo +1 alla quantità e modifico il prezzo totale
            arraydishes.forEach(array_dish => {
            if(array_dish.id == dish.id){
                array_dish.counterQuantity++;
                localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) + dish.price).toFixed(2);
            }
            });
        
            // Salvo l'array aggiornato in localStorage
            localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
        
            // Chiamo la funzione per stampare le quantità nell'HTML
            this.printDishQuantity(dish);
        },
        
        removeCart(dish) {
            // Salvo il localStorage in un array
            let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
        
            // Ciclo l'array
            arraydishes.forEach((array_dish, index) => {
            if(array_dish.id == dish.id){
                // Se il piatto ha una quantità maggiore di 1 rimuovo 1 alla quantità e modifico il prezzo totale
                if(array_dish.counterQuantity > 1){
                array_dish.counterQuantity--;
                localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
                // Altrimenti se è pari ad uno e cerco di rimuoverne un altro, lo elimino dall'array. modifico il prezzo e rimetto visibile il pulsante per aggiungere al carrello
                }else{
                arraydishes.splice(index, 1);
                localStorage.totalPrice = parseFloat(parseFloat(localStorage.totalPrice) - dish.price).toFixed(2);
                const add = document.getElementById('add' + array_dish.id);
                const change = document.getElementById('changequantity' + array_dish.id);
                add.classList.remove('d-none');
                change.classList.add('d-none');
                }
            }
            })
        
        
            // Se l'array dei piatti è vuoto svuoto il localStorage
            if(arraydishes.length === 0){
            localStorage.clear();
        
            // Altrimenti aggiorno il localStorage e stampo le nuove quantità nell'HTML
            }else{
            localStorage.setItem('arraydishes', JSON.stringify(arraydishes));
            this.printDishQuantity(dish);
            }
        },
        
        checkInCart(){
            setTimeout(() => {
            if(localStorage.getItem('totalPrice')){
                let arraydishes = JSON.parse(localStorage.getItem('arraydishes'));
                arraydishes.forEach(dish => {
                let add = document.getElementById('add' + dish.id);
                let change = document.getElementById('changequantity' + dish.id);
                add.classList.add('d-none');
                change.classList.remove('d-none');
                this.printDishQuantity(dish)
                });
            }
            }, 300);
        }
    },
    
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
                </ul>
            </nav>
            <div class="d-md-none d-flex align-items-center h-100">
                <div class="boo-menu-sm position-relative">
                    <button class="btn border-0" @click="toggleMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div class="boo-menu-body hidden position-absolute" id="boo-menu-body">
                        <nav>
                            <ul class="d-flex justify-content-between pe-2">
                                <li>
                                    <router-link :to="{name:'home'}"><i class="fa-solid fa-house"></i></router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'about'}"><i class="fa-solid fa-users"></i></router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'contacts'}"><i class="fa-solid fa-phone"></i></router-link>
                                </li>
                                <li>
                                    <a href="http://127.0.0.1:8000/admin"><i class="fa-solid fa-chart-pie"></i></a>
                                </li>
                            </ul>
                        </nav>
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
.boo-menu-sm{
    .btn{
        font-size: 1.5rem;
    }
    .boo-menu-body{
        overflow: hidden;
        height: 35px;
        z-index: 999;
        right: 30px;
        top: 8px;
        width: 160px;
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
                        font-size: 1.3rem;
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
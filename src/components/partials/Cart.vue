<script>
import {store} from '../../store/store';
import axios from 'axios';
import {cart} from '../../js/cart.js';

export default {
    name: 'Cart',
    
    data() {
        return {
            store,
            restaurant: [],
            cart,
        };
    },
    methods:{
        toggleDropdown() {
            const dropdown = document.getElementById('boo-dropdown')
            dropdown.classList.contains('hidden') ? dropdown.classList.remove('hidden') : dropdown.classList.add('hidden')
        },

        sendCart(){
            let data = localStorage;
            axios.post('http://127.0.0.1:8000/api/orders/send-order', data)
                .then(response => {
                    if(response.data.success){
                        window.location.href = 'http://127.0.0.1:8000/checkout-form';
                    }
                })
        }
    },
    mounted() {
        cart.arraydishes(this.$route.fullPath);
    },
    watch: {
        arraydishes() {
            window.location.reload();
        }
    },
}
</script>

<template>
    <div class="boo-dropdown ms-4">
        <div class="cart-button-container position relative">
            <i class="fa-solid fa-cart-shopping h-100" @click="toggleDropdown()"></i>
            <span class="position-absolute d-none" id="somma"></span>
        </div>
        <div class="boo-dropdown-body position-absolute hidden" id="boo-dropdown">
            <div class="cart-container">
                <div v-show="store.arraydishes.length != 0">
                    <div>
                        <h6>
                            Ordine per il ristorante:<br> 
                            <h4 id="restaurantcart"></h4>
                        </h6>
                        <div class="text-center">
                            <div>
                                Totale ordine: &euro;<strong id="totalPrice" ></strong>
                            </div>
                        </div>
                    </div>

                    <div class="mt-2">
                        <strong>Riepilogo ordine</strong>
                        <!--Qui sotto ciclare i piatti selezionati dall'utente e salvati dentro lo storage-->
                        <div class="dish" v-for="(dishArray, index) in store.arraydishes" :key="index">
                            <div>
                                <img>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <strong>
                                        {{ dishArray.dish.name }}
                                    </strong>
                                </div>
                                <div class="col-7 d-flex align-items-center">
                                    <div class="mx-2 ">
                                        <button type="button" class="btn btn-danger btn-sm" @click="cart.removeCart(dishArray.dish, $route.fullPath)">
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                            <span class="mx-2" :id="'quantity_cart' + dishArray.id"></span>
                                        <button type="button" class="btn btn-success btn-sm" @click="cart.addCart(dishArray.dish, $route.fullPath)">
                                            <i class="fa-solid fa-plus"></i>
                                        </button>

                                    </div>
                                    <span class="me-3">
                                        &euro; {{ dishArray.dish.price * dishArray.counterQuantity }}
                                    </span>
                                    <span @click="cart.deleteDishFromCart(dishArray.dish, $route.fullPath)">
                                        <i class="fa-solid fa-circle-xmark text-danger"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text-center mt-2 mb-3">
                        <button class="btn btn-danger btn-sm mt-3 me-3" @click="cart.clearCart($route.fullPath)">
                            Svuota carrello
                        </button>
                        <a class="btn btn-success btn-sm  mt-3" @click="sendCart()">
                            Vai alla cassa
                        </a>
                    </div>

                </div>
                <!--Aggiungere condizione se non c'è nessun piatto nel carrello-->
                <div v-show="store.arraydishes.length == 0" class="text-center mt-3">
                    <h3>
                        Carrello vuoto!
                    </h3>
                    <router-link class="btn btn-primary boo-btn" :to="{name:'home'}">Torna alla home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/variables';

h3,h4,h6{
    color: $custom_black;
}
.boo-dropdown{
    cursor: pointer;
    position: fixed;
    top: 15%;
    right: 0;
    z-index: 999999;
    background-color: $custom_white;
    padding: 10px 25px;
    border-radius: 10px 0 0 10px;
    #somma{
        z-index: 99999999;
        top: 2px;
        right: 10px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        color: $custom_white;
        font-size: 0.8rem;
        background-color: $tertiary_color;
        text-align: center;
    }
    i{
        font-size: 1.4rem;
    }
    .boo-dropdown-body{
        background-color: $custom_white;
        overflow-x: hidden;
        padding: 10px 10px;
        min-height: 150px;
        max-height: 300px;
        width: 400px;
        overflow-y: auto;
        right: 68px;
        top: 0px;
        border-radius: 20px 0 20px 20px;
        box-shadow: -20px 10px 20px rgba($custom_black, 0.2);
        transition: all .5s;
        &.hidden{
            min-height: 0;
            max-height: 0;
            opacity: 0;
        }
    }
}

.dish{
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
}

@media screen and (max-width: 500px) {
    .boo-dropdown-body{
        width: 300px !important;
        right: 0 !important;
        top: 90% !important;
    }
    
}

</style>


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
            //restaurant: "",
        };
    },
    computed: {
        /*
        totalPrice() {
           // return store.totalPrice;
        },
        quantity() {
            //return store.quantity;
        },*/
    },
    methods: {
        // fetchDishes() {
        //     axios.get(store.apiUrl + `cart/dishes/${this.newarraydishes}`)
        //         .then(result => {
        //             console.log(result);
        //             console.log(result.data);
        //             console.log(result.data);
        //             this.dishes = result.data;
        //         })
        // },
        clearCart() {
            localStorage.clear();
            store.restaurantcart = '';
            // store.restaurantId = localStorage.setItem('restaurantId');
            // store.totalItems = localStorage.getItem('totalPrice') || 0;
            // store.ids = [];
            // store.quantity = [];
        },
    },
    mounted() {
        cart.arraydishes();

    },
    watch: {
        arraydishes() {
            window.location.reload();
        }
    },
}
</script>

<template>
    <div class="cart-container">
        <div>
            <div>
                <h6>
                    Ordine per il ristorante:<br> 
                    <strong id="restaurantcart"></strong>
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
                                <button type="button" class="btn btn-danger btn-sm" @click="cart.removeCart(dishArray.dish)">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                    <span class="mx-2" :id="'quantity' + dishArray.id"></span>
                                <button type="button" class="btn btn-success btn-sm" @click="cart.addCart(dishArray.dish)">
                                    <i class="fa-solid fa-plus"></i>
                                </button>

                            </div>
                            <span class="me-3">
                                &euro; {{ dishArray.dish.price * dishArray.counterQuantity }}
                            </span>
                            <span>
                                <i class="fa-solid fa-circle-xmark text-danger"></i>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="text-center">
                <button class="btn btn-danger btn-sm mt-3 me-3" @click="clearCart()">
                    Svuota carrello
                </button>
                <button class="btn btn-success btn-sm  mt-3">
                    Vai alla cassa
                </button>
            </div>

        </div>
        <!--Aggiungere condizione se non c'è nessun piatto nel carrello-->
        <div class="text-center mt-3">
            <h3>
                Carrello vuoto!
            </h3>
            <router-link class="btn btn-primary" :to="{name:'home'}">Torna alla home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/variables';

.dish{
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
}

</style>


<script>
import  {store} from '../../store/store';
import axios from 'axios';

export default {
    name:'ContactForm',
    data(){
        return{
        name:'',
        email:'',
        message:'',
        errors: {},
        sending: false,
        success: false
        }
    },
    methods:{
        sendForm(){
        this.sending = true;
        const data = {
            name: this.name,
            email: this.email,
            message: this.message,
        }
        axios.post(`${store.apiUrl}contacts`, data)
            .then(result => {
            this.sending = false;
            this.success = result.data.success;
            if(!this.success){
                this.errors = result.data.errors;
            }else{
                this.errors = {};
            }
            console.log(result.data);
            })
        }
    }
}
</script>

<template>

    <form class="text-start" v-if="!success" @submit.prevent="sendForm()">
        <div class="mt-2">
            <label for="name">Nome (*)</label>
            <input v-model.trim="name" id="name" type="text" name="name" placeholder="Nome" :class="{'error-form' : errors.name}" class="w-100 py-1 px-2">
            <p class="error-msg" v-for="(error, index) in errors.name" :key="index">{{ error }}</p>
        </div>
        <div class="mt-2">
            <label for="lastname">Cognome (*)</label>
            <input v-model.trim="name" id="lastname" type="text" name="lastname" placeholder="Cognome" :class="{'error-form' : errors.lastname}" class="w-100 py-1 px-2">
            <p class="error-msg" v-for="(error, index) in errors.name" :key="index">{{ error }}</p>
        </div>
        <div class="mt-2">
            <label for="name">Email (*)</label>
            <input v-model.trim="email" id="email" type="email" name="email" placeholder="Email" :class="{'error-form' : errors.email}" class="w-100 py-1 px-2 my-2">
            <p class="error-msg" v-for="(error, index) in errors.email" :key="index">{{ error }}</p>
        </div>
        <div class="mt-2">
            <label for="name">Messaggio (*)</label>
            <textarea  v-model.trim="message" id="text" name="text" placeholder="Messaggio" cols="40" rows="10" :class="{'error-form' : errors.message}" class="w-100 py-1 px-2"></textarea>
            <p class="error-msg" v-for="(error, index) in errors.message" :key="index">{{ error }}</p>
        </div>
        <div class="text-center mt-3">
            <button 
                class="custom-btn-checkout mt-3" 
                type="submit" 
                :disabled="sending">{{sending ? 'Invio in corso...' : 'Invia'}}
            </button>
        </div>
    </form>

    <div v-else class="text-center pt-5">
        <h3 class="success-msg">Richiesta inviata con successo. Ti contatteremo il prima possibile!</h3>
    </div>
</template>

<style lang="scss" scoped>

form{
    width: 600px;
    margin: 0 auto;
    input, textarea{
        border: 1px solid grey;
        border-radius: 15px;
        padding: 5px 15px !important;
    }
    button{
        font-weight: bold;
        text-transform: uppercase;
        width: 200px;
    }
}
.error-form{
    border: 1px solid red;
}
.error-msg{
    color: red;
}
.success-msg{
    color: green;
}

</style>

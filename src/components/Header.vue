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
    <header class="header">
        <div class="logo">LOGO</div>
        <div class="menu-icon" @click="toggleDropdown">&#9776;</div>
        <transition name="slide-fade">
            <ul v-if="showDropdown">
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
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: #C1FC4C;
    color: #0F1108;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    transition: all 0.3s ease-in-out;
}

.logo {
    color: #F32D44;
    font-size: 1.5em;
    transition: all 0.3s ease-in-out;
}

.menu-icon {
    cursor: pointer;
    font-size: 1.5em;
    transition: all 0.3s ease-in-out;
}

ul {
    list-style: none;
    position: absolute;
    right: 20px;
    top: 90px;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: all 0.3s ease-in-out;
}

li {
    margin: 15px 0;
    transition: all 0.3s ease-in-out;
}

.link {
    color: wheat;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover,
    &.active {
        color: blue;
    }
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

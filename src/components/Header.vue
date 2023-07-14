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
        <ul v-if="showDropdown">
            <li>
                <router-link :to="{ name: 'home' }" class="link"> Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contacts' }" class="link"> Contatti</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }" class="link"> Chi Siamo</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'blog' }" class="link"> Blog</router-link>
            </li>
        </ul>
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
}

.logo {
    color: #F32D44;
    font-size: 1.5em;
}

.menu-icon {
    cursor: pointer;
    font-size: 1.5em;
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
}

li {
    margin: 15px 0;
}

.link {
    color: wheat;
    text-transform: uppercase;
    text-decoration: none;

    &:hover,
    &.active {
        color: blue;
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
        font-size: 1em;
    }

    .menu-icon {
        font-size: 1em;
    }
}
</style>

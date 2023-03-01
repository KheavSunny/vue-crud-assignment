<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="../../assets/image/logo.png" alt="Your Company" />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{{ textTitle }}</h2>
            </div>
            <form class="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input v-model="user.email" id="email-address" name="email" type="email" autocomplete="email"
                            required="true"
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input v-model="user.password" id="password" name="password" type="password"
                            autocomplete="current-password" required="true"
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password" />
                    </div>
                </div>
                <small class="m-0 flex justify-between">
                    <div>{{ text }}</div>
                    <router-link :to="{ name: routerName }" class="text-blue-500 underline cursor-pointer">Click
                        Here</router-link>
                </small>
                <div v-if="$route.path === '/login'">
                    <button @click.prevent="fnBtn.login" class="fnButton">
                        <div v-if="loading" class="animation-spin">
                        </div>
                        {{ btnName }}
                    </button>
                    <div class="text-center">Or</div>
                    <button @click.prevent="fnBtn.loginWithGoogle"
                        class="bg-gray-200 py-2 px-4 flex rounded w-full justify-center">
                        <span>{{ btnName }} with Google</span>
                        <img width="15" src="../../assets/icon/googleIcon.png" />
                    </button>
                </div>
                <div v-else>
                    <button @click.prevent="fnBtn.register" class="fnButton">
                        <div v-if="loading" class="animation-spin"></div>
                        {{ btnName }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    name: 'LayoutSignInSignUpComponent',
    props: {
        btnName: {
            default: 'Sign In',
            required: true,
        },
        textTitle: {
            default: 'Sign In',
            required: false,
        },
        text: String,
        routerName: {
            default: 'Login',
            required: true,
            type: String
        },
        user: {
            type: Object,
            default: () => ({})
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const fnBtn = reactive({
            login: () => {
                context.emit('login')
            },
            register: () => {
                context.emit('register')
            },
            loginWithGoogle: () => {
                context.emit('google')
            }
        })
        return {
            fnBtn,
        }
    }
})
</script>
<style scoped>
.fnButton {
    @apply relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
}

.animation-spin {
    @apply w-5 h-5 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent mr-3
}
</style>

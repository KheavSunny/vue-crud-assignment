<template>
    <div>
        <LayoutSignInSignUpComponent :user="user" :fn-btn="fnButton" :router-name="'Register'" :text="text"
            :btn-name="'Sign In'" :text-title="'Sign In'" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, onBeforeMount } from 'vue';
import { isNavigationFailure, NavigationFailureType, useRouter, useRoute } from 'vue-router';
import LayoutSignInSignUpComponent from '../../shared/components/LayoutSignInSignUpFormComponent.vue';
import { useUserStore } from '../../shared/store/user';
import { IUser } from './types/user.interface';

export default defineComponent({
    components: { LayoutSignInSignUpComponent },
    setup() {
        const store = useUserStore();
        const router = useRouter();
        const route = useRoute();
        const text = 'Don\'t have account yet ?'
        const user: IUser = reactive({
            email: '',
            password: ''
        })

        const fnButton = reactive({
            login: () => {
                store.signIn(user);
            },
            loginWithGoogle: () => {
                store.signWithGoogle();
            }
        })
        return {
            text,
            fnButton,
            user,
        }
    }
})
</script>

<style lang="scss" scoped></style>
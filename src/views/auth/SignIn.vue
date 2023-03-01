<template>
    <div>
        <LayoutSignInSignUpComponent :loading="loading" :user="user" @google="fnButton.loginWithGoogle" @login="fnButton.login"
            :router-name="'Register'" :text="text" :btn-name="'Sign In'" :text-title="'Sign In'" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import LayoutSignInSignUpComponent from '../../shared/components/LayoutSignInSignUpFormComponent.vue';
import { useUserStore } from '../../shared/store/user';
import { IUser } from './types/user.interface';

export default defineComponent({
    components: { LayoutSignInSignUpComponent },
    setup() {
        const store = useUserStore();
        const router = useRouter();
        const route = useRoute();
        // const loading = reactive({
        //     login: false,
        //     loginWithGoogle: false,
        // })
        const loading = ref(false);
        const text = 'Don\'t have account yet ?';
        const user: IUser = reactive({
            email: '',
            password: ''
        })

        const fnButton = reactive({
            login: async () => {
                loading.value = true;
                console.log(loading.value);
                
                await store.signIn(user);
                loading.value = false
            },
            loginWithGoogle: () => {
                store.signWithGoogle();
            }
        })
        return {
            text,
            fnButton,
            user,
            loading
        }
    }
})
</script>

<style lang="scss" scoped></style>
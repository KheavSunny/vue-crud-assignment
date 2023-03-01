<template>
    <div>
        <LayoutSignInSignUpComponent :user="user" @register="fnButton.register" :router-name="'Login'" :text="text"
            :btn-name="'Sign Up'" :text-title="'Sign Up'" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import LayoutSignInSignUpComponent from '../../shared/components/LayoutSignInSignUpFormComponent.vue';
import { useUserStore } from '../../shared/store/user';
import { IUser } from './types/user.interface';

export default defineComponent({
    components: { LayoutSignInSignUpComponent },
    setup() {
        const text = 'You already have account ?'
        const store = useUserStore();
        const user: IUser = reactive({
            email: '',
            password: ''
        })

        const fnButton = reactive({
            register: () => {
                console.log('ok');
                store.signUp(user);
            }
        })

        return {
            text,
            fnButton,
            user
        }
    }
})
</script>

<style lang="scss" scoped></style>
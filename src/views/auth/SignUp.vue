<template>
    <LayoutSignInSignUpComponent :loading="loading" :user="user" @register="fnButton.register" :router-name="'Login'"
        :text="text" :btn-name="'Sign Up'" :text-title="'Sign Up'" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
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
        });

        const loading = ref(false);

        const fnButton = reactive({
            register: async () => {
                loading.value = true,
                    await store.signUp(user);
                loading.value = false
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
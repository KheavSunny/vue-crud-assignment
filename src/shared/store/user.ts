import { IUser } from './../../views/auth/types/user.interface';
import { defineStore } from "pinia";
import { signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import router from '../../router';

export const useUserStore = defineStore('user', {
  state() {
    return {
      users: {
        user: {} as IUser,
        token: localStorage.getItem('TOKEN'),
      }
    }
  },
  actions: {
    
    async signWithGoogle() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then((res) => {
        // const credential = GoogleAuthProvider.credentialFromResult(res);
        if(res.user) {
          router.push('/');
        } 
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credentail = GoogleAuthProvider.credentialFromError(error);
        return {
          errorCode,
          errorMessage,
          email,
          credentail
        }
      })
    },

    async signIn(data: IUser) {
      const { email, password } = data;
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found')
            break
          case 'auth/wrong-password':
            alert('Wrong Password')
            break
          case 'auth/invalid-email':
            alert('Invalid Email!')
            break
          default:
            alert('Somethin went wrong')
            break
        }
        return;
      }
      router.push('/');
    },

    async signUp(data: IUser) {
      const { email, password } = data;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use')
            break
          case 'auth/invalid-email':
            alert('Invalid email')
            break
          case 'auth/operation-not-allowed':
            alert('Operation not allowed')
          case 'auth/weal-allowed':
            alert('Weak Password')
            break
          default:
            alert('Something went wrong')
        }
        return
      }
      router.push('/')
    },

    async logout() {
      try {
        await signOut(auth).then(() => {
          console.log('Sign-out successful');
        })
      } catch (err) {
        console.log(err);
      }
      router.push('/login')
    }

  },
  getters: {
  }

})

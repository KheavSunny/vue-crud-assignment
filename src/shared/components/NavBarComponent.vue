<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" :src="LogoIcon" alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link v-for="item in navigation" :to="item.href"
                  :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">{{
                    item.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <LanguageSelectComponent :options="options" />
              <div class="ml-3">
                <button @click="signOut"
                  class="text-white bg-red-500 rounded-md py-[3px] px-3 hover:bg-red-300 hover:text-red-900 hover:font-bold">
                  {{ $t("sign_out") }} {{ $t('hello') }}
                </button>
              </div>
            </div>
          </div>
          <!-- <div>
            <button @click="testNotfication" class="bg-blue-400 py-1 px-3 rounded">Test Notification</button>
          </div> -->
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <DisclosureButton v-for="item in navigation" class="w-full">
            <router-link :to="item.href"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {{ item.name }}
            </router-link>
          </DisclosureButton>
        </div>
        <div class="border-t border-gray-700 pt-4 pb-3 px-5">
          <LanguageSelectComponent :options="options" />
        </div>
        <div class="px-5 pb-3 pt-4">
          <button @click="signOut" class="text-white bg-red-500 rounded-md py-1 px-3 hover:bg-red-300 hover:text-red-600">
            {{ $t("sign_out") }}
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
  
<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { IMenuItem } from './base/menu/MenuItem.interface';
import EnglishIcon from '../../assets/icon/english.png';
import KhmerIcon from '../../assets/icon/cambodia.png';
import LogoIcon from '../../assets/image/logo.png';
import LanguageSelectComponent from './base/languages_selected/LanguageSelectComponent.vue';
import { useUserStore } from '../store/user';
import router from '../../router';
import { getToken, getMessaging } from '@firebase/messaging';

const store = useUserStore()
const messaging = getMessaging()
const vapidKey = 'BKA3gASbWuFayuvygPF_a1icyfkuO23n3Nyao5IGCcMS6ufFIBOCRXDySQPq3q43TDWR4oUt8v2YXBdwwvd49gw';
const testNotfication = () => {
  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
          if (currentToken) {
            console.log(`Current Token:`, currentToken);
          } else {
            console.log('Do you have permission!');
          }
        })
      }
    })
  }
  requestPermission();
}

const options = [
  {
    value: 'en',
    label: `English`,
    icon: EnglishIcon,
  },
  {
    value: 'km',
    label: 'Khmer',
    icon: KhmerIcon,
  }
]
const navigation: IMenuItem[] = [
  {
    name: 'All Subjects',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
];
const signOut = async () => {
  await store.logout();
}
</script>
<style scoped>
.router-link-exact-active {
  @apply bg-gray-900 text-white
}
</style>

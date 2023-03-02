 
<template>
  <div class="p-10">
    <div class="grid gap-4 grid-cols-2">
      <div class="pl-10 w-70%">
        <el-input :class="subject.title || !errorMessage ? 'mb-2' : ''" v-model="subject.title"
          :placeholder="$t('input_subject')"></el-input>
        <div v-if="!subject.title && errorMessage" class="text-red-600 text-sm mb-2">{{ $t('please_input_subject') }}</div>
        <el-input v-model="subject.description" :placeholder="$t('input_description')"></el-input>
        <div v-if="!subject.description && errorMessage" class="text-red-600 text-sm">{{$t('please_input_description')}}</div>
        <el-button v-if="!showBtnEdit" @click="addSubject(subject)"
          class="bg-blue-500 text-white hover:bg-green-500 hover:text-white mt-2">{{$t('create')}}</el-button>
        <el-button v-else @click.prevent="updateSubject(subject)"
          class="bg-blue-500 text-white hover:bg-green-500 hover:text-white mt-2">{{ $t('update') }}</el-button>
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2 pl-10 pt-4">
      <div>
        <div class="header_subject">{{ $t('subject_list') }}</div>
        <div class="h-[220px] rounded-md border border-t-0 shadow-xl border-gray-200 w-[70%] overflow-auto">
          <div v-if="getListSubjects">
            <div v-for="item in getListSubjects"
              :class="[getSubjectDetail?.id === item.id ? 'active_content_subject' : 'content_subject', 'flex justify-between']"
              @click="getSubject(item.id)">
              <div>{{ item.title }}</div>
              <el-button @click="btnDelete(item.id)"
                class="block border-none hover:bg-red-600 hover:text-white text-red-600">{{$t('delete')}}</el-button>
            </div>
          </div>
          <div v-else class="grid place-items-center h-full" v-loading="loading"></div>
        </div>
      </div>
      <div>
        <div class="header_subject">{{ $t('subject_detail')  }}</div>
        <div class="h-[220px] rounded-md border border-t-0 shadow-xl border-gray-200 w-[70%] pr-3 overflow-y-auto pb-5">
          <div class="pl-5 pt-2">
            <div class="flex space-x-3">
              <div class="font-bold">{{$t('title')}}:</div>
              <div>{{ getSubjectDetail?.title }}</div>
            </div>
            <div class="flex space-x-3">
              <div class="font-bold">{{$t('description')}}:</div>
              <div class=" col-span-2 break-all">{{ getSubjectDetail?.description }}
              </div>
            </div>
            <div>
              <el-button v-if="getSubjectDetail" type="warning"
                class=" bg-yellow-400 text-black border-none hover:bg-blue-600"
                @click="editSubject(getSubjectDetail.id)">{{$t('edit')}}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { ISubject } from './types/Subject.interface';

import {
  // getListSubjects,
  // addSubject,
  // errorMessage,
  // btnDelete,
  // getSubject,
  // getSubjectDetail,
  // updateSubject,
  // showBtnEdit,
} from '../../shared/composables/json_server/subjest';

import {
  getListSubjects,
  addSubject,
  getSubjectDetail,
  getSubject,
  errorMessage,
  btnDelete,
  updateSubject,
  showBtnEdit
} from '../../shared/composables/firebase/subject'

export default defineComponent({
  setup() {
    const subject: ISubject = reactive({
      id: '',
      title: '',
      description: '',
    });
    const loading = ref(true);

    // const addSubject = () => {
    //     if (subject.value && description_subject.value) {
    //         getListSubjects.value.push({ id: getListSubjects.value.slice(-1)[0].id + 1, title: subject.value, description: description_subject.value });
    //         subject.value = '';
    //         description_subject.value = '';
    //     } else {
    //         errorMessage.value = true;
    //     }
    // }

    // const btnDelete = (index: number) => {
    //     getListSubjects.value.splice(index, 1);
    // }

    // const getSubject = (index: number) => {
    //     getSubjectDetail.value = getListSubjects.value[index];
    // }

    const editSubject = (id: number) => {
      showBtnEdit.value = true;
      subject.title = getSubjectDetail.value.title;
      subject.description = getSubjectDetail.value.description;
      subject.id = id;
    }
    // const updateSubject = (id: number) => {
    //     const index = getListSubjects.value.findIndex((a) => a.id === id);
    //     if ( subject.title && subject.description ) {
    //         getListSubjects.value[index].title = subject.title;
    //         getListSubjects.value[index].description = subject.description;
    //         showBtnEdit.value = false;
    //         subject.title = '';
    //         subject.description = '';
    //     } else {
    //         errorMessage.value = true;
    //     }
    // }

    return {
      Search,
      subject,
      getListSubjects,
      btnDelete,
      addSubject,
      getSubject,
      getSubjectDetail,
      editSubject,
      updateSubject,
      showBtnEdit,
      errorMessage,
      loading
    }
  },
})
</script>

<style scoped>
.header_subject {
  @apply bg-gray-200 p-3 w-[70%] rounded-md text-center font-bold text-xl
}

.content_subject {
  @apply text-xl hover:bg-blue-400 border hover:text-white border-b-gray-300 cursor-pointer h-10 pl-5 pr-5 flex items-center
}

.active_content_subject {
  @apply bg-blue-400 text-white text-xl border border-b-gray-300 cursor-pointer h-10 pl-5 pr-5 flex items-center
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

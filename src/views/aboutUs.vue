<template>
  <div class="grid place-content-center pt-10 px-20">
    <el-timeline>
      <el-timeline-item v-for="timeLine in timeLines.slice().reverse()" :key="timeLine" :timestamp="timeLine.timestamp" placement="top">
        <el-card>
          <div class=" text-sm md:text-base">{{ timeLine.content }}</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    const options = [
      {
        label: 'Publish',
        value: 'Publish'
      },
      {
        label: 'Pending',
        value: 'Pending'
      },
    ];
    const form = reactive({
      title: '',
      description: ''
    })
    const submit = () => {
      console.log(form.title);
    }

    const timeLines = [
      {
        timestamp: '2012',
        content: 'Foundation of Mobile C&C Cambodia Development of OneASEANTM App (ASEAN Summit Application) for MOC'
      },
      {
        timestamp: '2013',
        content: "R&D Outsourcing to Duzon Newturns (Korea) R&D Outsourcing to Orom System (Korea)"
      },
      {
        timestamp: '2014',
        content: 'Feasibility Study for Retail Payment System Modernization in Cambodia System implementation outsourcing for Korea clients (Pulmuwon, P&G, etc.)',
      },
      {
        timestamp: '2015',
        content: 'Development of Enterprise SFA Application for clients (BeautyQ, Inisfree, Safilo, etc.) System Consulting for Retail Payment System of NBC',
      },
      {
        timestamp: '2016',
        content: 'Implement PPCBank Mobile Banking System Feasibility Study for National Digital Signature Infrastructure with MPTC Launching of online shopping platform – “LifeOn Shop” (Web & Mobile App)',
      },
      {
        timestamp: '2017',
        content: 'Implement PPCBank Internet Banking System/Mobile Teller System Taxi Call App and operation system provided to Choice Taxi Launching PayOn Payment Service (JV Company)',
      },
      {
        timestamp: '2018',
        content: 'Implement NBC Retail Payment System (QR Payment System, Mobile Payment System)',
      },
      {
        timestamp: '2019',
        content: 'Implement PPCBank Core Banking System, Internet Banking Upgrade Implement NBC Interface System (FEP) for Booyoung Khmer Bank',
      },
      {
        timestamp: '2020',
        content: 'Implement DGB Bank Core Banking System, Mobile/Internet Banking System Implement Front-end processing for IBK Implement Core Banking System for Chokchey Finance Implement Front-end processing for Booyoung Khmer Bank',
      },
    ]
    return {
      value,
      options,
      form,
      submit,
      timeLines
    }
  },
})
</script>

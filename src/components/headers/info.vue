<script setup>
import { computed } from 'vue';
import {defineProps} from 'vue'; //必須於< script setup>時使用，不然會出錯

// 取得App.vue中的devices數量
const props = defineProps({
  devices:{
  type: Array,
  required: true,
  default: [],
  }
})

// 需要將defineProps 用一個props變數存取，才能透過props.devices取得資料
// 如果直接definProps , 下面devices.length會出錯
// computed具有連動效果
const deviceCount = computed(()=>props.devices.length) //簡化函式寫法，把大括號＆return拿掉即可
// const deviceCount = computed(()=>{
//   return props.devices.length
// })

const noDevice = computed(() => deviceCount.value === 0)//簡化函式寫法，把大括號＆return拿掉即可
// const noDevice = computed(()=>{
//   // deviceCount是一個ref，取值要用.value
//   return deviceCount.value === 0
// })


// export default {
//   setup(){
//     const props = defineProps({
//       devices:{
//         type: Array,
//         required: true,
//         default: [],
//       }
//     })

//     return props

//   },

  
  // - 元件(接收上層給予的數值，嚴謹一點規定變數屬性 (required是否必填;dafault預設值))  ; (optition-->compostion 放置setup)
  // props:{
  //   devices:{
  //     type:Array,
  //     required:true,
  //     default:[],
  //   }
  // },

  // // - computed 呼叫的時候不需要deviceCount()，method才需要; (optition-->compostion 放置setup)
  // computed:{
  //   deviceCount(){
  //     return this.devices.length
  //   },
  //   noDevice(){
  //     return this.deviceCount === 0
  //   }
  // }
  
// }
// </script>


<template>
  <h3 v-if="noDevice">目前無任何設備</h3> 
  <h3 v-else>目前共計 {{ deviceCount }} 項設備</h3>
</template>

<style scoped>
h3{
  color:gray;
}
</style>
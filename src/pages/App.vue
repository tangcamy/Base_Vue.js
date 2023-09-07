<!-- 不需要esport dafault { setup (){....}} -->

<script setup>
// import DeviceInfo from './components/headers/info.vue'
// import DeviceItem from './components/devices/item.vue'
import DeviceInfo from '@/components/headers/info.vue' //@表示從src開始 ，可以看vite.config.js
import DeviceItem from '@/components/devices/item.vue'
import axios from 'axios';
import { ref ,reactive ,onMounted , onBeforeMount, onBeforeUnmount} from 'vue'  // ref 資料是否有”連動效果“ ，這些都是helper function

// 獨立通用id格式
import {v4 as uuidv4 } from 'uuid'


// export default {
// setup(){
  // options - > Composition

const title = "AUO_camy"
let device = ref('') // ref 連動後取值使用 value
const devices = reactive([]) // reactive 只能處理“物件”，取物件的時候不用value，直接拿東西
const StorageKey = 'deviceList'

function addDevice() {
  if (device.value !== "") {
    const item = {
      id: uuidv4(),
      title: device.value,
    };
    //  這邊可以查看 ref & reactive 取出東西的差別
    devices.unshift(item);
    // 儲存在local storage，需轉格式為JSON
    localStorage.setItem(StorageKey,JSON.stringify(devices))
    device.value = "";
  }
}
function removeItem(id){
  // 找到原本資料集id的位置
  const item = devices.findIndex((device) => {
    return device.id === id
  })
  // 刪除idindex，splice(index,刪除幾個)
  devices.splice(item, 1)
  //local storage 重新刷新資料
  localStorage.setItem(StorageKey, JSON.stringify(devices))
}
// composition - lifecycle
onMounted(()=>{
  console.log('mounted')
})

//composition - lifecycle，雖然是在onMounted後面，但他的lifecycle會先執行
onBeforeMount(()=> {
  console.log('before mounted')

  // 把local storage 儲存的撈取出來，需轉格式
  const saveDevices = JSON.parse(localStorage.getItem(StorageKey))
  // 因devices 為 const 不能assign ，只能賦值 ，（出錯範例：devices.value = saveDevices）
  devices.push(...saveDevices)
})

onBeforeUnmount(()=>{
  console.log('before unmounted')
})

  // script 加入setup 也不用寫return
  // return {
  //   title,
  //   device,
  //   devices,
  //   addDevice,
  //   removeItem,
  // }

// }

  // script 加入元件 也不用寫了
  // 元件
// components: {
//   // ES6寫法 DeviceInfo = DeviceInfo:DeviceInfo
//   DeviceInfo,
//   DeviceItem,
// }

// beforeCreate(){
//   console.log("bc")
// },
// created(){
//   console.log('如果想要更早撈取到API資料，這邊也可以')
//   console.log(this.title)
// },

// - 資料(optition-->compostion 放置setup)
// data: function () {
//   return {
//     title: "AUO_Camy",
//     device: "",
//     devices: [],
//   };
// },

// - 函式 (optition-->compostion 放置setup)
  // methods: {
  // 下層給予的廣播，透過函式接收資料
  // removeItem(id){
  //   // 找到原本資料集id的位置
  //   const item = this.devices.findIndex((device)=>{
  //     return device.id === id 
  //   })
  //   // 刪除idindex，splice(index,刪除幾個)
  //   this.devices.splice(item,1)
  // },

  // addDevice() {
  //   if (this.device !== "") {
  //     const item = {
  //       id: uuidv4(),
  //       title: this.device,
  //     };
  //     this.devices.unshift(item);
  //     this.device = "";
  //   }
  // },
// },

// // vue lifecycle -專有名詞
// beforeMount:function(){
//   console.log('適合在這邊撈取api回來')
//   axios.get('https://webdev.alphacamp.io/api/movies').then(({data
//   })=>{
//     // this.devices = data.results
//     console.log(data)
//   })
// },

// // vue lifecycle -專有名詞
// // mounted 為vue-lifecycle最後一個週期
// mounted:function(){
//   console.log('end')
// }
</script>



<template>
  <h1 class="text-4xl font-bold my-3">{{ title }} 設備管理系統</h1>
  <form>
    <div >
      <!--class改成input-device變數帶入（ text-white bg-black p-2 ）-->
      <label class="input-device">設備名稱</label><br />
      <!-- <label class="text-white bg-black p-2">設備名稱</label><br /> -->

      <!-- v-model:變數綁定 -->
      <input type="text" placeholder="請輸入設備名稱" class="my-2 px-2 py-2 text-lg border-2 border-slate-500" v-model="device" />
      <!-- v-on:click, @click ,@click.prevent = preventDefault-->
      <button @click.prevent="addDevice" class="bg-black text-white py-2 px-4 mx-2">新增</button>
    </div>
  </form>
  <section>
    <header class="device-info">
      <!-- 原本 -->
      <!-- <h3 v-if="devices.length == 0">目前無任何設備</h3> -->
      <!-- <h3 v-else>目前共計 {{ devices.length }} 項設備</h3> -->

      <!-- ./components/headers/info.ue改放元件(自定義的元件名稱) ,property(props)給予下一層值，v-bind 綁定屬性，縮寫:devices-->
      <DeviceInfo v-bind:devices="devices"/>
    </header>

    <ul class="device-item">
      <!-- 原本 -->
      <!-- <li v-for="d in devices">{{ d }}</li> -->

      <!-- ./components/devices/item.vue改放元件(自定義的元件名稱)-->
      <!-- <DeviceItem v-for="d in devices"  :device="d" /> -->

      <!-- 監聽子層給予的廣播item.vue ，
        this.$emit('remove-item',this.device.id)-->
      <DeviceItem @remove-item="removeItem" v-for="d in devices"  :device="d" />

    </ul>
  </section>

</template>


<!-- scoped:影響的範圍只有目前這些頁面的物件 -->
<style scoped>
label {
  background-color: black;
  color: white;
  padding: 4px 8px;
}

/* input class css type  */
.input-device{
  @apply:text-white bg-black p-2;
}

button:hover{
  opacity: 0.8;
}
</style>



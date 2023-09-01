<script>
import DeviceInfo from './components/headers/info.vue'
import DeviceItem from './components/devices/item.vue'
import axios from 'axios';


// 獨立通用id格式
import {v4 as uuidv4 } from 'uuid'

export default {
  // 元件
  components:{
    // ES6寫法 DeviceInfo = DeviceInfo:DeviceInfo
    DeviceInfo,
    DeviceItem,
  },
  // 資料
  data: function () {
    return {
      title: "AUO_Camy",
      device: "",
      devices: [],
    };
  },
  // 函式
  methods: {
    // 下層給予的廣播，透過函式接收資料
    removeItem(id){
      // 找到原本資料集id的位置
      const item = this.devices.findIndex((device)=>{
        return device.id === id 
      })
      // 刪除idindex，splice(index,刪除幾個)
      this.devices.splice(item,1)
    },

    addDevice() {
      if (this.device !== "") {
        this.devices.unshift({
          id:uuidv4(),
          title:this.device,
          });
        this.device = "";
      }
    },
  },
  // vue lifecycle -專有名詞
  beforeMount:function(){
    console.log('適合在這邊撈取api回來')
    axios.get('https://webdev.alphacamp.io/api/movies').then(({data
    })=>{
      this.devices = data.results
      console.log(data)
    })
  },
  // vue lifecycle -專有名詞
  // mounted 為vue-lifecycle最後一個週期
  mounted:function(){
    console.log('end')
  }
};
</script>

<template>
  <main class="mx-12">  
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
  </main>
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
</style>



<script setup>
import { ref, onMounted, reactive, watch, defineExpose, computed } from "vue";
import * as echarts from "echarts";
import axios from "axios";
import VChart from 'vue-echarts';
import { nextTick } from "vue";
import { configProviderContextKey } from "element-plus";
import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";
import bannerImg from '@/assets/ensoBanner.png';//首页图

const prefix="https://tianxing.tongji.edu.cn"
// 新加入
const chartSelected = ref(0);
const chartNames = ['指数预测', '模态预测'];

//时间选择器范围框定--start
const start_year = ref(null);
const start_month = ref(null);
const end_year = ref(null);
const end_month = ref(null);

//const selectedDateTime = ref(null);
const selectedYear = ref(''); // 新变量，用于存储选定的年份
const selectedMonth = ref(''); // 新变量，用于存储选定的月份

const date = new Date(2015,0,1,0,0,0);//赋初值
const year = date.getFullYear() + '';
const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1 + '') : date.getMonth() + 1 + ''

selectedYear.value = year;
selectedMonth.value = month;

axios.get('/nao/initialize/naoCORR')
.then(res =>{
  start_year.value = res.data.start_year;
  start_month.value = new Date(res.data.start_month);
  end_year.value = res.data.end_year;
  end_month.value = new Date(res.data.end_month);
  //console.log(res.data);
  })
  .catch(error => {
      console.error(error);
    });

const limitedDateRange = (time) => {
  return time.getFullYear() < start_year.value || time.getFullYear() > end_year.value;
};


const text_of_option1 = ref('预测误差主要来自于对中纬度和冰岛附近低压的高估，能够预测出NAO的典型两级模态 ，模拟误差随着预测时长逐渐增加。')//表示前六个图底下的文字描述
const text_of_option7 = ref('对于为期1个月的NAOI预测，不如高分辨率模式ECMWF ，但与低分辨率模式ECCC相当。由于只接受月平均数作为输入，忽略了决定短时尺度可预测性的天气现象和初始条件。在超过两个月的提前期的预测技巧远远超过了失去预测能力的数值模式，将NAO的有效预测时间从1个月扩展到了6个月。')


var index_nao=0; //切换气温预测时修改这个索引
var imgSrc_of_nao_Array;
var title_of_nao_Array;
const imgSrc_of_nao = ref({})
const title_of_nao = ref({})

const option7 = ref({})

//  // 当日期时间选择发生变化时被调用
//  console.log(selectedDateTime.value); // 输出当前选择的日期和时间

// if (selectedDateTime.value) {
//   const selectedDate = new Date(selectedDateTime.value);
//   selectedYear.value = selectedDate.getFullYear(); // 获取年份值并存储到 selectedYear
//   selectedMonth.value = selectedDate.getMonth() + 1; // 获取月份值并存储到 selectedMonth
// }

// axios.get('/nao/findGridData/nao?year='+Number(selectedYear.value)+'&month='+Number(selectedMonth.value))
//     .then(res => {
//       console.log(res.data.imgSrc);
//       // title_of_option1.value='提前1个月预测';
//       list = res.data.imgSrc;
//       //text_of_option1.value = res.data.text;
//   });

// selectedYear.addEventListener('change', handleTimeChange);
// selectedMonth.addEventListener('change', handleTimeChange);

// function handleTimeChange() {
//   // 获取选中的年份和月份
//   const year = Number(selectedYear.value);
//   const month = Number(selectedMonth.value);

///////////////////////////////////////
function updateChartTitle() {
  axios.get('/nao/predictionExamination/nao?year='+Number(selectedYear.value)+'&month='+Number(selectedMonth.value))
      .then(res => {
        index_nao = 0;
        console.log("点击标签,更新nao",res.data);
        imgSrc_of_nao_Array = res.data;
        imgSrc_of_nao.value = `${prefix}${imgSrc_of_nao_Array[0]}`;
        //console.log("wwwww",imgSrc_of_nao_Array[0]);
      })
      .catch(error => {
      console.error(error);
    });

    axios.get('/nao/predictionExamination/naoi')
    .then(res => {
      console.log("更新naoi",res.data);
      // title_of_option1.value='提前1个月预测';
      // list = res.data.imgSrc;
      option7.value = res.data;
  })
  .catch(error => {
      console.error(error);
    });
}

//////////以下两个是初始化
axios.get('/nao/predictionExamination/nao?year='+Number(selectedYear.value)+'&month='+Number(selectedMonth.value))
      .then(res => {
        index_nao = 0;
        console.log("初始化nao",res.data);
        imgSrc_of_nao_Array = res.data;
        imgSrc_of_nao.value = `${prefix}${imgSrc_of_nao_Array[0]}`;
        //console.log("swwwww",imgSrc_of_nao_Array[0]);
      });

axios.get('/nao/predictionExamination/naoi')
    .then(res => {
      console.log("初始化naoi",res.data);
      // title_of_option1.value='提前1个月预测';
      // list = res.data.imgSrc;
      option7.value = res.data;
  });

function change_time_nao(flag) {

if(flag==="left"){
  if(index_nao>0){
    index_nao--;
  }
  else{
    index_nao=5;
  }
}
else if(flag==="right"){
  if(index_nao<5){
    index_nao++;
  }
  else{
    index_nao=0;
  }
}
title_of_nao.value=title_of_nao_Array[index_nao];
imgSrc_of_nao.value=`${prefix}${imgSrc_of_nao_Array[index_nao]}`;
//text_of_temperature.value=text_of_temperature_Array[index_tempe];
}

//换成新的选项卡
function selectChart(index) {
  chartSelected.value = index;
}

const moveBoxLeft = computed(() => {
  return chartSelected.value*250 ;
});

const movBoxStyle = computed(() => ({
  position: "absolute",
  bottom: "0px",
  left: `${moveBoxLeft.value}px`,
  height: "2px",
  width: "125px",
  transform: "translateX(50%)",
  backgroundColor: "blue",
  transition: "left 0.3s ease"
}));
</script>

<template>
  <div class="pageContent">
    <div class="banner">
      <img :src="bannerImg" />
      <h3 class="title">NAO预测结果检验</h3>
    </div>

    <div class="menu-container">
      <ul class="menu">
        <div :style="movBoxStyle"></div>
        <li v-for="(chartName, index) of chartNames" :key="chartName" @click="selectChart(index)"
          :class="{ 'chart-name-selected': chartSelected === index }">
          <p>{{ chartName }}</p>
        </li>
      </ul>
    </div>

    <div class="datePickerContainer">
      <el-date-picker @change="updateChartTitle" v-model="selectedYear" 
      :disabledDate="limitedDateRange"
      type="year" format="YYYY" value-format="YYYY" :clearable="false"  style="width: 80px; height: 25px"/>
      <div class="text">年</div>
      <el-date-picker @change="updateChartTitle" v-model="selectedMonth"
      :disabledDate="limitedDateRange"
      type="month" format="MM" value-format="MM" :clearable="false" style="width: 60px; height: 25px"/>
      <div class="text">月</div>
    </div>    


    <div class="chart-selector" v-if="chartSelected === 1">
        <h2 class="chart-title">
           NAOI指数预测的相关系数
        </h2>
        <div class="chart">
          <v-chart :option="option7" autoresize></v-chart>
        </div>   
        <div class="description1">
          {{ text_of_option7 }}
        </div>
    </div>

    <div class="chart-selector" v-else-if="chartSelected === 0">
      <h2 class="chart-title">
          {{ selectedYear }}年{{ selectedMonth }}月 预测结果分布误差图
        </h2>
        <div class="whole_container">
            <div class="pic_container">
              <img class="picture" :src="imgSrc_of_nao" alt="">
            </div>
            <!-- <el-button ref="buttonLeft" type="primary" class="arrowLeft" :icon="ArrowLeft"
            @click=" change_time_nao('left')"></el-button>
          <el-button ref="buttonRight" type="primary" class="arrowRight" :icon="ArrowRight"
            @click=" change_time_nao('right')"></el-button> -->
            <div class="description">
            {{ text_of_option1 }}
            </div>  
          </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
.chart-title{
  text-align: center; 
  margin-top: 0px;
   font-size: 18px;
}

.title {
  text-align: center;
  font-size: 50px;
  margin-left: 20%;
  /* 确保图片在文字下方 */
  z-index: 1;
}
  .chart {
    height: 500px;
  }

  .description {
    text-align: center;
    font-size: 16px;
    margin-left: 10px;
  }
  .description1 {
    // text-align: center;
    font-size: 16px;
    margin-left: 10px;
  }

  .datePickerContainer {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  .text {
    margin-left: 5px;
    margin-right: 10px;
  }
  .picture_title {
   text-align: center;
   font-size: 14px;
}

  .picture {
  max-width: 100%;
  display: flex; /* 将元素设置为块级元素 */
  justify-content:center;
  //margin-left: 3%;
   margin-top: 0px;
  // margin-bottom: -160px;
}
.whole_container {
  //position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pic_container{
  overflow: hidden;
  display: flex;
  justify-content: center;
}
/* 设置左箭头按钮的样式 */
.el-button.arrow-left {
  position: absolute;
  top: 50%; /* 将箭头按钮的顶部与父容器的中间对齐 */
  left: 0; /* 将箭头按钮的左侧与父容器的左侧对齐 */
  width: 40px; /* 设置按钮宽度 */
  height: 80px; /* 设置按钮高度 */
  transform: translateY(-50%); /* 垂直居中箭头按钮 */
}

/* 设置右箭头按钮的样式 */
.el-button.arrow-right {
  position: absolute;
  top: 50%; /* 将箭头按钮的顶部与父容器的中间对齐 */
  right: 0; /* 将箭头按钮的右侧与父容器的右侧对齐 */
  width: 40px; /* 设置按钮宽度 */
  height: 80px; /* 设置按钮高度 */
  transform: translateY(-50%); /* 垂直居中箭头按钮 */
}
//以下新加代码
.banner {
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 确保图片在文字下方 */
  z-index: 0;
}

.menu-container {
  display: flex;
  height: 105px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}

ul.menu {
  position: relative;
  list-style-type: none;
  height: 100%;
  display: flex;
  padding: 0px;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}

ul.menu li {
  position: relative;
  display: flex;
  width: 250px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    cursor: pointer; /* 更改鼠标形状为手形 */
}

ul.menu li:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 2px;
  height: 50%;
  background-color: #00000020;
  transform: translateY(-50%);
}

ul.menu li:hover p {
  color: red;
   /* 悬停时文字颜色变化为红色 */
  //color: lightgray; //浅灰不太好看
}

.chart-selector {
  position: relative;
  //修改为块级
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15%;
}

.chart-name-selected {
  color: blue;
}
</style>
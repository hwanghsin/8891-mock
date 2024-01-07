<script setup>
import { ref, reactive } from 'vue';

// Components
import CategoriesArea from './components/CategoriesArea.vue';
import CarList from './components/CarList.vue';
import CarDetail from './components/CarDetail.vue';

const carDetail = ref(null);

const state = reactive({
  tags: []
});

function selectCategory(list) {
  state.tags = list;
}

function selectCar(detail) {
  carDetail.value = detail;
}

</script>

<template>
  <CategoriesArea :tags="state.tags" :selectCategory="selectCategory" v-if="!carDetail" />
  <CarList :tags="state.tags" :select="selectCar" v-if="!carDetail" />
  <CarDetail :detail="carDetail" v-if="!!carDetail" />
</template>

<style scoped>
button {
  font-weight: bold;
}

.selected-area,
.car-list {
    width: 1190px;
    font-size: 12px;
    margin: 0 auto 50px;
}

.categories-container {
    width: 1190px;
    height: 150px;
    display: flex;
    border: 1px solid #ddd;
    margin: 0 auto;
}

.types {
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background: #ddd;
    font-size: 12px;
}

.category-contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
    box-sizing: border-box;
}

.category-items {
    display: flex;
    align-items: center;
}

.category-name {
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 12px;
    cursor: pointer;
    padding: 0px 5px;
}

.category-name.selected {
  color: #fff;
  background: #f87f15;
}

.category-name:hover {
    color: cadetblue;
}

.product-container {
  display: flex;
  height: 165px;
  margin: 20px 0;
}

.product-container > .product-image {
  width: 220px;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
  margin-right: 20px;
}

.product-container > .product-info {
  display: flex;
  flex-direction: column;
  flex: 4;
}

.product-container > .product-info > h1 {
  margin: 0;
}

.product-container > .product-info > span {
  color: #aaa;
}

.product-price {
  color: #fcbe24;
  font-size: 24px;
}

.product-price,
.product-year,
.product-mileage {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: bold;
}
</style>
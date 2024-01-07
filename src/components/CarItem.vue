<script setup>
import { defineProps } from 'vue';
import moment from 'moment';
import { toTenThousandUnit } from '../utils';

const props = defineProps({
  car: {
    type: Object,
  },
  isVisible: Boolean
});

const car = {...props.car};

</script>

<template>
    <div class="product-container" v-if="props.isVisible">
        <div class="product-image" :style="{ backgroundImage: `url(${car.thumbnail})` }"></div>
        <div class="product-info">
            <h5>{{ car.title }}</h5>
            <h6>{{ car.desc }}</h6>
            <span>{{ `${car.place} | ${moment(car.udapted).fromNow()} | ${toTenThousandUnit(car.view)}瀏覽次數` }}</span>
        </div>
        <div class="product-price">{{ toTenThousandUnit(car.price) }}</div>
        <div class="product-year">{{ `${car.license}年` }}</div>
        <div class="product-mileage">{{ `${toTenThousandUnit(car.mileage)}公里` }}</div>
    </div>
</template>

<style>
.product-container {
  display: flex;
  height: 165px;
  margin: 20px 0;
}

.product-container:hover {
    background-color: #eee;
    cursor: pointer;
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

.product-container > .product-info > h5 {
    margin-top: 20px;
}

.product-container > .product-info > span {
  color: #aaa;
}

.product-price {
  color: #fcbe24;
  font-size: 16px;
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
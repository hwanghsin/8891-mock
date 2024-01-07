<template>
    <div class="container container-sm mt-3">
        <div class="d-flex flex-column car-list">
            <CarItem v-for="car in carList" :key="car.id" :car="car" :isVisible="isOnList(car)" @click="selectDetail(car)" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { cars } from '../constants';

import CarItem from './CarItem.vue';

const props = defineProps({
    tags: Array,
    select: Function
});

function isOnList(car) {
    if (!props.tags.length) return true;

    const sub = props.tags.find((category) => category.includes('-'));
    const hasSub = !!sub;
    const isSubMatch = hasSub && car.category.includes(sub.split('-')[1]);

    const brand = props.tags.find((category) => car.category.split('-')[0] === category);
    const isBranch = !sub && brand;

    const price = props.tags.find((category) => !isNaN(category));
    const isPriceMatch = !!price && matchPriceRange(car, price);

    return isSubMatch || isBranch || !price || isPriceMatch;
}

function matchPriceRange(car, range) {
  switch (parseInt(range)) {
    case 1000001:
      return car.price >= 1000001;
    case 1000000:
      return car.price <= 1000000 && car.price >= 500001;
    case 500000:
      return car.price <= 500000 && car.price >= 350001;
    case 350000:
      return car.price <= 350000 && car.price >= 250001;
    case 250000:
      return car.price <= 250000 && car.price >= 100001;
    default:
      return car.price <= 100000 && car.price > 0;
  }
}

const carList = props.tags.length > 0 ? [...cars].filter(({ category }) => props.tags.includes(category)) : cars;
const selectDetail = (car) => props.select(car);

</script>

<style>
.car-list {
    font-size: 12px;
}
</style>
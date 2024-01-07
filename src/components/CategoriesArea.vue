<template>
    <div class="selected-area">
        <span>您已選擇：</span>
        <div class="list-area">
        <label class="tag-container" v-for="id in props.tags" :key="id">
            <span class="name">{{ allMap[id] }}</span>
            <span class="close" @click="removeCategory(id)">X</span>
        </label>
        </div>
    </div>
    <div class="categories-container">
      <div class="types">
          <div>廠牌：</div>
          <div>車款：</div>
          <div>價格：</div>
          <div>其他：</div>
      </div>
      <div class="category-contents">
        <div class="category-items">
            <div class="category-name" :class="{ selected: props.tags.includes(b) }" v-for="b in brands" :key="b" @click="selectCate(b)">{{ brandMap[b] }}</div>
        </div>
        <div class="category-items">
            <div class="category-name" :class="{ selected: props.tags.includes(s) }" v-for="s in styles" :key="s" @click="selectCate(s)">{{ carStyleMap[s] }}</div>
        </div>
        <div class="category-items">
            <div class="category-name" :class="{ selected: props.tags.includes(p) }" v-for="p in priceIds" :key="p" @click="selectPriceRange(p)">{{ priceMap[p] }}</div>
        </div>
        <div class="category-items position-relative">
            <div class="category-name" v-for="o in otherIds" :key="o" @click="toggleOther">{{ otherMap[o] }}</div>
            <div class="category-others w-100 position-absolute d-flex align-items-center" :class="{ border: drop, 'p-3': drop }" style="overflow: hidden;" :style="{ height: drop ? '30px' : '0px' }">
              <div v-for="o in otherDetails" :key="o">{{ otherAllMap[o] }}</div>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { cars, brandMap, carStyleMap, priceMap, otherMap, yearMap } from '../constants';

const props = defineProps({
    tags: Array,
    selectCategory: Function,
});

const carList = ref([...cars]);
const price = ref(0);
const drop = ref(false);

const allMap = {
    ...brandMap,
    ...carStyleMap,
    ...priceMap,
    ...otherMap,
}

const otherAllMap = {
  ...yearMap,
}

const brands = [...new Set(cars.map(({ category }) => category.split('-')[0]))];
const styles = [...new Set(cars.map(({ category }) => category))];
const priceIds = Object.keys(priceMap);
const otherIds = Object.keys(otherMap);

const otherDetails = Object.keys(yearMap);

function toggleOther() {
  drop.value = !drop.value;
}

function selectCate(key) {
    if (props.tags.includes(key)) return;

    let tmpList = [...props.tags];

    if (key.includes('-')) {
        const [brand] = key.split('-');
        tmpList = [...tmpList, brand, key];
    } else {
        tmpList = [...tmpList, key];
    }

    props.selectCategory([...new Set(tmpList)]);
    carList.value = cars.filter(({ category }) => category.includes('-') ? tmpList.includes(category.split('-')[0]) : tmpList.includes(category))
}

function removeCategory(key) {
  if (!props.tags.includes(key)) return;

  const tmpList = props.tags.filter((id) => !id.includes(key));
  const tmpCarList = tmpList.length ? cars.filter(({ category }) => category.includes('-') ? tmpList.includes(category.split('-')[0]) : tmpList.includes(category)) : [...cars];

  props.selectCategory([...new Set(tmpList)]);
  carList.value = tmpCarList;
}

function selectPriceRange(p) {
  const range = parseInt(p);
  price.value = parseInt(p);

  // filter category
  let tmpList = [...props.tags.filter((tag) => isNaN(parseInt(tag))), `${range}`];
  props.selectCategory([...new Set(tmpList)]);

  // filter list
  const list = cars.filter(({ price }) => {
    switch (true) {
      case range >= 1000001:
        return price >= 1000001;
      case range <= 1000000 && range >= 500001:
        return price <= 1000000 && price >= 500001;
      case range <= 500000 && range >= 350001:
        return price <= 500000 && price >= 350001;
      case range <= 350000 && range >= 250001:
        return price <= 350000 && price >= 250001;
      case range <= 250000 && range >= 100001:
        return price <= 250000 && price >= 100001;
      default:
        return price > 0 && price <= 100000;
    }
  });

  carList.value = list;
}

</script>

<style>
.selected-area {
    width: 1120px;
    font-size: 12px;
    margin: 0 auto 50px;
}

.categories-container {
    width: 1120px;
    height: 150px;
    display: flex;
    border: 1px solid #ddd;
    margin: 0 auto;
}

.types {
    width: 90px;
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
}

.category-name.selected {
  color: #fff;
  background: #f87f15;
}

.category-name:hover {
    color: cadetblue;
}

.category-others {
  top: 30px;
}

.list-area {
  display: flex;
}

.tag-container {
  max-width: 250px;
  min-width: 80px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #999;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 12px;
  margin-right: 10px;
}

.tag-container > .name {
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tag-container > .close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f87f15;
  border-left: 1px solid #999;
  cursor: pointer;
}
</style>
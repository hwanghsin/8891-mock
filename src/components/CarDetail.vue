<script setup>
import { ref, defineProps } from 'vue'
// import { detailStore } from '../store';
import { CarImageMap } from '../constants';
import { toTenThousandUnit } from '../utils';

const props = defineProps({
    detail: Object
})

// const isHoveringMain = ref(false);
// const isHoveringSlide = ref(false);
const scrollContainer = ref(null);
const currentIndex = ref(0);
const isPhoneShown = ref(false);
const isOpen = ref(false);

const content = props.detail || {
    id: "",
    category: "",
    title: "",
    desc: "",
    price: 0,
    mileage: 0,
    license: 0,
    color: "",
    carry: "",
    fuel: "",
    wd: 0,
    review: false,
    verify: false,
    view: 0,
    phone: "",
}
const images = props.detail?.id ? [...CarImageMap[props.detail.id]] : [];

function updateIndex(index) {
    currentIndex.value = index;
}

function clickNextSlide() {
    if (scrollContainer.value) {
        console.log('scrollContainer.value.scrollLeft', scrollContainer.value.scrollLeft);
        scrollContainer.value.scrollLeft += scrollContainer.value.offsetWidth;
    }
}

function clickPrevSlide() {
    if (scrollContainer.value) {
        console.log('scrollContainer.value.scrollLeft', scrollContainer.value.scrollLeft);
        scrollContainer.value.scrollLeft -= scrollContainer.value.offsetWidth;
    }
}

function toggleShowPhone() {
    isPhoneShown.value = !isPhoneShown.value
}

function toggleOpenModal() {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <div class="container" style="min-width: 1140px;">
        <div class="row mt-3">
            <div class="col-6">
                <div class="d-flex flex-column">
                    <div class="col">
                        <div class="d-flex align-items-center position-relative w-100 display-image-container">
                            <img class="w-100" :src="images[currentIndex].src" @click="toggleOpenModal" />

                            <div class="select-btn position-absolute d-flex align-items-center justify-content-center start-0" @click="updateIndex(currentIndex - 1)" v-if="currentIndex > 0">
                                <img :src="require('@/assets/chevron-left.svg')" />
                            </div>
                            <div class="select-btn position-absolute d-flex align-items-center justify-content-center end-0" @click="updateIndex(currentIndex + 1)" v-if="currentIndex < images.length - 1">
                                <img :src="require('@/assets/chevron-right.svg')" />
                            </div>
                        </div>
                    </div>
                    <div class="col position-relative d-flex align-items-center">
                        <div class="w-100 border my-3 d-flex flex-row align-items-center overflow-x-auto slide" ref="scrollContainer">
                            <div class="h-auto slide-preview" :class="{ 'me-3': index !== images.length - 1 }" @click="updateIndex(index)" style="width: 100px;" v-for="(img, index) in images" :key="index">
                                <img class="object-fit-cover w-100" :class="{ 'border border-danger border-3': index === currentIndex }" :src="img.preview" />
                            </div>
                        </div>
                        <div class="select-btn position-absolute d-flex align-items-center justify-content-center start-0" @click="clickPrevSlide">
                            <img :src="require('@/assets/chevron-left.svg')" />
                        </div>
                        <div class="select-btn position-absolute d-flex align-items-center justify-content-center end-0" @click="clickNextSlide">
                            <img :src="require('@/assets/chevron-right.svg')" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex flex-column px-4 py-3" v-if="content.id">
                <h4>{{ content.title }}</h4>
                <span class="sub my-3">{{ content.desc }}</span>
                <div class="d-flex align-items-end justify-content-between my-3">
                    <span class="car-price">{{ toTenThousandUnit(content.price) }}</span>
                    <span></span>
                    <!-- <span class="text-primary pointer">新車售價</span> -->
                </div>
                <div class="d-flex align-items-center my-3">
                    <label class="info-wrapper">
                        <span class="d-block info">{{ `${toTenThousandUnit(content.mileage)}公里` }}</span>
                        <span class="d-block info-sub">行駛里程</span>
                    </label>
                    <label class="info-wrapper">
                        <span class="d-block info">{{ `${content.license}年` }}</span>
                        <span class="d-block info-sub">2019年11月領牌</span>
                    </label>
                    <label class="info-wrapper">
                        <span class="d-block info">{{ content.color }}</span>
                        <span class="d-block info-sub">車身顏色</span>
                    </label>
                </div>
                <div class="d-flex align-items-center my-3">
                    <label class="info-wrapper">
                        <span class="d-block info">{{ content.carry }}</span>
                        <span class="d-block info-sub">車門乘客數</span>
                    </label>
                    <label class="info-wrapper">
                        <span class="d-block info">{{ content.fuel }}</span>
                        <span class="d-block info-sub">引琴燃料</span>
                    </label>
                    <label class="info-wrapper">
                        <span class="d-block info">{{ `${content.wd}WD` }}</span>
                        <span class="d-block info-sub">驅動方式</span>
                    </label>
                </div>
                <div class="d-flex align-items-center">
                    <div class="btn btn-warning d-flex align-items-center justify-content-center info-button me-4" @click="toggleShowPhone">{{ isPhoneShown ? content.phone : '查看電話' }}</div>
                    <!-- <div class="btn btn-primary d-flex align-items-center justify-content-center info-button">Online</div> -->
                </div>
            </div>
        </div>
    </div>

    <div class="custom-bg fixed-top w-100 h-100" :style="{ display: isOpen ? 'block' : 'none'}"></div>

    <!-- Modal -->
    <div class="modal fade" :class="{ show: isOpen }" :style="{ display: isOpen ? 'block' : 'none' }" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content" style="min-width: 800px;">
          <div class="modal-body p-0 m-0">
            <div class="d-flex">
                <div class="d-flex align-items-center position-relative w-60 display-image-container">
                    <img class="w-100" :src="images[currentIndex].src" />

                    <div class="select-btn position-absolute d-flex align-items-center justify-content-center start-0" @click="updateIndex(currentIndex - 1)" v-if="currentIndex > 0">
                        <img :src="require('@/assets/chevron-left.svg')" />
                    </div>
                    <div class="select-btn position-absolute d-flex align-items-center justify-content-center end-0" @click="updateIndex(currentIndex + 1)" v-if="currentIndex < images.length - 1">
                        <img :src="require('@/assets/chevron-right.svg')" />
                    </div>
                </div>
                <div class="flex-fill p-3">
                    <div class="d-flex flex-column modal-detail p-2">
                        <h5>{{ content.title }}</h5>
                        <span class="car-price fs-5 mb-3">{{ toTenThousandUnit(content.price) }}</span>
                        <div class="d-flex align-items-center my-2">
                            <span class="sub">行駛里程：</span>
                            <span>{{ `${toTenThousandUnit(content.mileage)}公里` }}</span>
                        </div>
                        <div class="d-flex align-items-center my-2">
                            <span class="sub">上牌時間：</span>
                            <span>{{ `${content.license}年` }}</span>
                        </div>
                        <div class="d-flex align-items-center my-2">
                            <span class="sub">車門乘客數：</span>
                            <span>{{ content.carry }}</span>
                        </div>
                        <div class="d-flex align-items-center my-2">
                            <span class="sub">引琴燃料：</span>
                            <span>{{ content.fuel }}</span>
                        </div>
                        <div class="d-flex align-items-center my-2">
                            <span class="sub">驅動方式：</span>
                            <span>{{ `${content.wd}WD` }}</span>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <div class="btn btn-warning d-flex align-items-center justify-content-center" @click="toggleShowPhone">{{ isPhoneShown ? content.phone : '查看電話' }}</div>
                    <button type="button" class="btn btn-light btn-block d-flex align-items-center justify-content-center" @click="toggleOpenModal">關閉</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
.sub {
    font-size: 12px;
    color: #ccc;
}

.car-price {
    color: #f87f15;
    font-size: 26px;
    font-weight: bold;
}

.pointer {
    cursor: pointer;
}

.info-wrapper {
    width: 160px;
}

.info {
    color: #585858;
    font-size: 20px;
    font-weight: 600;
}

.info-sub {
    color: #999;
    font-size: 10px;
}

.info-button {
    width: 228px;
    height: 56px;
    cursor: pointer;
}

.display-image-container {
    height: 450px;
}

.slide {
    height: 80px;
    white-space: nowrap; 
}

.slide-preview {
    flex: 0 0 auto;
    height: 75px;
    box-sizing: border-box;
}

.select-btn {
    width: 30px;
    height: 75px;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.select-btn:hover {
    background: rgba(0, 0, 0, 0.7);
}

.custom-bg {
    background: rgba(0,0,0,0.7);
    z-index: 1054;
}

.modal-detail {
    background: #fffdf5;
}

</style>
<template>
    <div class="feature-container">
        <h3>精選</h3>
        <div class="slider">
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
        </div>
    </div>
</template>

<script>
import FeaturedItem from './FeaturedItem.vue';

export default {
    name: 'FeaturedArea',
    props: {},
    components: {
        FeaturedItem
    }
}
</script>

<style>
.feature-container {
    width: 1190px;
    margin: 0 auto;
}

.feature-container > h3 {
    text-align: left;
}

.slider {
    width: 1190px;
    height: 200px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
}
</style>
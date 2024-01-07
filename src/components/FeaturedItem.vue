<template>
    <div class="featured-item">
        <div class="preview">Preview</div>
        <div class="detail">Detail</div>
    </div>
</template>

<script>
export default {
    name: 'FeaturedItem',
    props: {},
}
</script>

<style>
.featured-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 20px;
}

.featured-item > .preview {
    width: 300px;
    height: 150px;
}

.featured-item > .detail {
    height: 50px;
}
</style>
<template>
    <div class="bitmap-outer">
        <div class="bitmap-inner">
            <img :src="imageUrl" alt="altText" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            default: ""
        },
        alt: {
            type: String,
            default: "Tech image"
        }
    }
};
</script>

<style scoped>
/*Only influencing current component*/
.bitmap-outer {
    width: 35%;
    top: 28%;
    right: 0;
    position: absolute;
    overflow: hidden;
}

.bitmap-inner {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    transition: all 0.5s;
}

img {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    object-position: center;
}

/*TABLET*/
@media screen and (max-width:960px) {
    .bitmap-outer {
        width: 100%;
        height: 35vh;
        min-height: 400px;
    }

    .bitmap-inner {
        position: static;
    }
}

/*MOBILE*/
@media screen and (max-width:480px) {
    .bitmap-outer {
        height: 30vh;
        min-height: 400px;
    }

    .bitmap-inner {
        position: static;
    }
}
</style>
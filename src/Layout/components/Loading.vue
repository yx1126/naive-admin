<template>
    <div class="layout-loading">
        <div class="icon-wrapper">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
</template>
<style lang="scss">
.layout-loading {
    width: 100vw;
    height: 100vh;
    @extend .flex-center;
    flex-direction: column;
    .icon-wrapper {
        display: grid;
        grid-template-columns: 15px 15px;
        grid-template-rows: 15px 15px;
        grid-row-gap: 15px;
        grid-column-gap: 15px;
        animation: rotate 1.5s linear infinite;
        & > i {
            background-color: #409eff;
            animation: rotate2 1.5s linear infinite;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes rotate2 {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(-180deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
}
</style>

<template>
    <div class="four-zero-three">
        <n-button type="primary" @click="back">
            <span>返 回</span>
            <template #icon>
                <Icon><IosArrowBack /></Icon>
            </template>
        </n-button>
        <n-grid :cols="2">
            <n-gi>
                <h1 class="text-jumbo text-ginormous">401错误!</h1>
                <h2>您没有访问权限！</h2>
                <h6>对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面</h6>
                <ul class="list-unstyled">
                    <li class="link-type">
                        <n-button text type="primary" @click="back('/')">回首页</n-button>
                    </li>
                </ul>
            </n-gi>
            <n-gi>
                <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream." />
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import ErrGif from "@/assets/image/401.gif";
import { isString } from "@/util/validata";
import IosArrowBack from "@vicons/ionicons4/IosArrowBack";
import { useRouter } from "vue-router";

const router = useRouter();
const errGif = $ref(ErrGif + "?" + +new Date());

function back(path?: string | MouseEvent) {
    if (isString(path) && path) router.push(path);
    else router.go(-1);
}
</script>

<style lang="scss" scoped>
.four-zero-three {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .pan-gif {
        margin: 0 auto;
        display: block;
    }
    .pan-img {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
    .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
    }
    .list-unstyled {
        font-size: 14px;
        li {
            padding-bottom: 5px;
        }
        a {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>

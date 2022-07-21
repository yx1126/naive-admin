<template>
    <div class="search" :style="searchStyle" @click.stop="onClick">
        <Icon class="icon" size="20"><md-search /></Icon>
        <n-select
            class="input"
            ref="searchRef"
            v-model:value="chooseValue"
            :show="isShowResult"
            :loading="loading"
            :options="selectOptions"
            filterable
            clearable
            remote
            :show-arrow="false"
            :consistent-menu-width="false"
            placeholder="Search"
            @update:value="onUpdateValue"
            @search="onSearch"
        />
    </div>
</template>

<script lang="ts" setup>
import MdSearch from "@vicons/ionicons4/MdSearch";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores";
import { NSelect, useThemeVars, type SelectOption } from "naive-ui";
import { getSearchMenuList } from "@/util/menus";
import type { MenuOptions } from "@/naive";

const user = useUserStore();
const router = useRouter();
const themeVars = $(useThemeVars());

const searchRef = $ref<InstanceType<typeof NSelect>>();
let isShowSearch = $ref(false);
let isShowResult = $ref(false);
let loading = $ref(false);
let selectOptions = $ref<SelectOption[]>([]);
let chooseValue = $ref("");

const menuOptions = $computed(() => getSearchMenuList(user.menus as MenuOptions));
const searchStyle = $computed(() => {
    return {
        "--search-width": isShowSearch ? "210px" : "0px",
        "--trans-width": themeVars.cubicBezierEaseInOut,
    };
});

async function onClick() {
    selectOptions = [];
    isShowSearch = true;
    document.addEventListener("click", onBodyClick);
}

function onBodyClick() {
    isShowSearch = false;
    isShowResult = false;
    document.removeEventListener("click", onBodyClick);
}

async function onSearch(query: string) {
    if (!query.length) {
        isShowResult = false;
        selectOptions = [];
        return;
    }
    loading = true;
    // 模拟 后台接口
    window.setTimeout(() => {
        selectOptions = menuOptions
            .filter(item => {
                return (item.name as string).includes(query) || (item.path as string).includes(query);
            })
            .map(item => {
                return { label: item.name as string, value: item.path as string };
            });
        loading = false;
        isShowResult = true;
    }, 500);
}

function onUpdateValue() {
    router.push(chooseValue);
    chooseValue = "";
}
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    align-items: center;
    .icon {
        margin-right: 5px;
    }
    .input {
        width: var(--search-width);
        transition: width 0.2s var(--trans-width);
    }
    :deep(.n-base-selection) {
        .n-base-selection-label {
            box-shadow: none !important;
            & > * {
                padding: 0;
            }
        }
        .n-base-selection__border,
        .n-base-selection__state-border {
            border: {
                top: none !important;
                left: none !important;
                right: none !important;
                radius: 0;
            }
            box-shadow: none !important;
        }
    }
}
</style>

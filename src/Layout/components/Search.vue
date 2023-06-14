<template>
    <div class="search" :style="searchStyle" @click.stop="onClick">
        <Icon class="icon" size="20">
            <SearchOutlined />
        </Icon>
        <n-select
            ref="searchRef"
            v-model:value="chooseValue"
            class="input"
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
import { SearchOutlined } from "@vicons/antd";
import { NSelect, useThemeVars, type SelectOption } from "naive-ui";
import { getSearchMenuList } from "@/util/menus";
import { on, off } from "@/util/dom";
import type { MenuOptions } from "@/naive";

const user = useUserStore();
const router = useRouter();
const themeVars = useThemeVars();

const searchRef = ref<InstanceType<typeof NSelect>>();
const isShowSearch = ref(false);
const isShowResult = ref(false);
const loading = ref(false);
const selectOptions = ref<SelectOption[]>([]);
const chooseValue = ref("");

const menuOptions = computed(() => getSearchMenuList(user.menus as MenuOptions));
const searchStyle = computed(() => {
    return {
        "--search-width": isShowSearch.value ? "210px" : "0px",
        "--trans-width": themeVars.value.cubicBezierEaseInOut,
    };
});

async function onClick() {
    selectOptions.value = [];
    isShowSearch.value = true;
    on(document, "click", onBodyClick);
}

function onBodyClick() {
    isShowSearch.value = false;
    isShowResult.value = false;
    off(document, "click", onBodyClick);
}

async function onSearch(query: string) {
    if(!query.length) {
        isShowResult.value = false;
        selectOptions.value = [];
        return;
    }
    loading.value = true;
    // 模拟 后台接口
    window.setTimeout(() => {
        selectOptions.value = menuOptions.value
            .filter(item => {
                return (item.name as string).includes(query) || (item.path as string).includes(query);
            })
            .map(item => {
                return { label: item.name as string, value: JSON.stringify(item) };
            });
        loading.value = false;
        isShowResult.value = true;
    }, 500);
}

function onUpdateValue() {
    const menu = JSON.parse(chooseValue.value);
    if(menu.isLink) {
        window.open(menu.path);
    } else {
        router.push(menu.path);
    }
    chooseValue.value = "";
    isShowResult.value = false;
    selectOptions.value = [];
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
            background-color: transparent !important;
            & > * {
                padding: 0;
            }
            & > input {
                color: inherit;
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

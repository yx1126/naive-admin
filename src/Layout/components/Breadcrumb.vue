<template>
    <n-breadcrumb v-if="set.isShowBreadcrumb" class="breadcrumb" :style="breadcrumbStyle">
        <template v-for="b in breadcrumbList" :key="b.path">
            <n-breadcrumb-item :clickable="false">
                <template v-if="b.children && (b.children.length > 0)">
                    <n-dropdown :options="b.options" @select="onDropdownSelect">
                        <span>{{ b.meta.title }}</span>
                    </n-dropdown>
                </template>
                <span v-else>{{ b.meta.title }}</span>
            </n-breadcrumb-item>
        </template>
    </n-breadcrumb>
</template>

<script lang="ts" setup>
import type { DropdownOption } from "naive-ui";

const route = useRoute();
const router = useRouter();
const set = useSetStore();

const breadcrumbList = $computed(() => {
    return route.matched.filter((r) => r.path && r.meta.title).map(item => {
        return {
            ...item,
            options: recursiveDropOptions(item.children),
        };
    });
});

const breadcrumbStyle = $computed(() => {
    return {
        "--inverted-color":
            set.navMode === "diablo"
                ? "rgba(255, 255, 255, 0.82)"
                : ["mixin"].includes(set.layoutMode)
                    ? "#BBB"
                    : set.inverted
                        ? "#BBB"
                        : "rgb(118, 124, 130)",
        "--inverted-hover-color": set.themeColor,
    };
});

function recursiveDropOptions<T extends Record<string, any>>(list: Array<T>): DropdownOption[] {
    return list.map((item) => {
        const data: DropdownOption = {
            key: item.name,
            label: item.meta.title,
        };
        if(item.children && item.children?.length > 0) {
            data["children"] = recursiveDropOptions(item.children);
        }
        return data;
    });
}

function onDropdownSelect(name: string) {
    router.push({
        name,
    });
}

</script>
<style lang="scss" scoped>
.breadcrumb {
    :deep(.n-breadcrumb-item) {
        &:not(:last-child) {
            .n-breadcrumb-item__link:hover {
                cursor: pointer;
                color: var(--inverted-hover-color) !important;
            }
        }
        .n-breadcrumb-item__link {
            color: var(--inverted-color) !important;
        }
    }
}
</style>

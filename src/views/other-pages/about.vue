<template>
    <div class="about">
        <n-grid :cols="1" y-gap="12">
            <n-gi>
                <n-card title="生产环境依赖">
                    <n-descriptions label-placement="left" :column="3" bordered>
                        <template v-for="(v, k) in dependencies" :key="k">
                            <n-descriptions-item>
                                <template #label>{{ k }}</template>
                                <span>{{ v }}</span>
                            </n-descriptions-item>
                        </template>
                    </n-descriptions>
                </n-card>
            </n-gi>
            <n-gi>
                <n-card title="开发环境依赖">
                    <n-descriptions label-placement="left" :column="3" bordered>
                        <template v-for="(v, k) in devDependencies" :key="k">
                            <n-descriptions-item>
                                <template #label>{{ k }}</template>
                                <span>{{ v }}</span>
                            </n-descriptions-item>
                        </template>
                    </n-descriptions>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "About",
});

const dependencies = ref<Record<string, any>>({});
const devDependencies = ref<Record<string, any>>({});

onBeforeMount(async () => {
    const res = import.meta.glob("../../../package.json")["../../../package.json"];
    const pkgModule: any = await res();
    dependencies.value = pkgModule.dependencies;
    devDependencies.value = pkgModule.devDependencies;
});

</script>

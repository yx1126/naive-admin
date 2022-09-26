<template>
    <div class="system-set">
        <h1>system-set</h1>
        <n-card>
            <form-render ref="formRef" w-500px mx-auto my-20px :context="context" label-width="auto" label-placement="top">
                <template #nickName>
                    <n-input v-model:value="model.nickName" />
                </template>
                <!-- <n-form-item label="用户名：" path="username" required>
                    <n-input v-model:value="model.username" readonly placeholder="请输入用户名" />
                </n-form-item>
                <n-form-item label="昵称：" path="nickName">
                    <n-input v-model:value="model.nickName" clearable placeholder="请输入昵称" />
                </n-form-item>
                <n-form-item label="性别：" path="sex">
                    <n-radio-group v-model:value="model.sex" name="radiogroup">
                        <n-radio :value="0">未知</n-radio>
                        <n-radio :value="1">男</n-radio>
                        <n-radio :value="2">女</n-radio>
                    </n-radio-group>
                </n-form-item>
                <n-form-item label="邮箱：" path="email">
                    <n-input v-model:value="model.email" clearable placeholder="请输入邮箱" />
                </n-form-item>
                <n-form-item label="个人简介：" path="description">
                    <n-input
                        v-model:value="model.description"
                        type="textarea"
                        show-count
                        :maxlength="50"
                        clearable
                        placeholder="请输入个人简介"
                        :autosize="{ minRows: 3, maxRows: 3 }"
                        :allow-input="onNoAllowSpace"
                    />
                </n-form-item>
                <n-form-item>
                    <n-space>
                        <n-button type="primary" :loading="loading" @click.prevent="submit">保 存</n-button>
                        <n-button @click="reset">重 置</n-button>
                    </n-space>
                </n-form-item> -->
            </form-render>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import FormRender, { useForm, type FormRenderInstance } from "@/components/FormRender";

defineOptions({
    name: "SystemSet",
});

const formRef = ref<FormRenderInstance>(null);

const message = useFeedBack("message");
const { context, model, formInstance, loading } = useForm({
    data: () => ({
        username: "admin",
        nickName: "admin",
        sex: 1,
        email: "yx17714503091@163.com",
        description: "你在干什么！",
    }),
    rules: {
        nickName: { required: true, message: "请输入昵称！", trigger: "blur" },
        email: { required: true, message: "请输入邮箱！", trigger: "blur" },
    },
    schema: [
        { path: "username", type: "input", label: "用户名", required: true, props: { readonly: true, placeholder: "请输入用户名" } },
        { path: "nickName", type: "input", label: "昵称", props: { clearable: true, placeholder: "请输入昵称" } },
        { path: "sex", type: "radio-group", label: "性别",
          props: {
              clearable: true, placeholder: "请输入昵称",
              options: [{ label: "未知", value: 0 }, { label: "男", value: 1 }, { label: "女", value: 2 }],
          },
        },
        { path: "email", type: "input", label: "邮箱", props: { clearable: true, placeholder: "请输入邮箱" } },
        { path: "description", type: "input", label: "个人简介",
          props: {
              type: "textarea", placeholder: "请输入用户名",
              showCount: true, maxlength: 50, clearable: true,
              autosize: { minRows: 3, maxRows: 3 },
              allowInput: (value: string) => !value.startsWith(" ") && !value.endsWith(" "),
          },
        },
    ],
});

function submit() {
    formInstance.value.validate((errors) => {
        if(!errors) {
            loading.value = true;
            const timer = setTimeout(() => {
                loading.value = false;
                message.success("Valid");
                clearTimeout(timer);
            }, 1000);
        } else {
            message.error("Invalid");
        }
    });
}

function onNoAllowSpace(value: string) {
    return !value.startsWith(" ") && !value.endsWith(" ");
}

function reset() {
    formInstance.value.resetFields();
}
</script>

<style lang="scss" scoped></style>

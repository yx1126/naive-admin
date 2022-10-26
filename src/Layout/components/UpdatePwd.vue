<template>
    <n-modal style="width: 500px;" title="修改密码" preset="card" @after-leave="onReset">
        <form-render
            ref="userFormRef"
            v-drag
            class="update-pwd-form"
            :context="context"
            :model="model"
            :rules="rules"
            label-width="auto"
        >
            <n-form-item label="旧密码：" path="password">
                <n-input v-model:value="model.password" type="password" show-password-on="mousedown" placeholder="请输入旧密码" clearable />
            </n-form-item>
            <n-form-item label="新密码：" path="newPwd">
                <n-input v-model:value="model.newPwd" type="password" show-password-on="mousedown" placeholder="请输入新密码" clearable />
            </n-form-item>
            <n-form-item label="确认密码：" first path="confirmPwd">
                <n-input v-model:value="model.confirmPwd" type="password" show-password-on="mousedown" placeholder="请再次输入新密码" clearable />
            </n-form-item>
            <template #action>
                <FormAction @submit="submit" />
            </template>
        </form-render>
    </n-modal>
</template>

<script setup lang="ts">
import FormRender, { useForm, FormAction, type FormRules } from "@/components/FormRender";
import type { FormItemRule } from "naive-ui";

defineOptions({
    name: "UpdatePwd",
});

const message = useFeedBack("message");

const { model, formInstance, context } = useForm(() => ({
    password: "",
    newPwd: "",
    confirmPwd: "",
}));

const rules: FormRules = {
    password: {
        required: true,
        trigger: "blur",
        message: "请输入旧密码",
    },
    newPwd: {
        required: true,
        trigger: "blur",
        message: "请输入新密码",
    },
    confirmPwd: [
        {
            required: true,
            trigger: ["input", "blur"],
            message: "请再次输入新密码",
        },
        {
            trigger: ["input", "blur"],
            message: "两次密码输入不一致",
            validator(rule: FormItemRule, value: string) {
                return value === model.value.newPwd;
            },
        },
    ],
};

function submit() {
    message.success("验证成功");
}

function onReset() {
    formInstance.value.resetFields();
}

</script>

<style lang="scss" scoped>
.update-pwd-form {
    width: 400px;
    margin: auto;
}
</style>

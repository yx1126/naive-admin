<template>
    <n-modal style="width: 500px;" title="修改密码" preset="card" @after-leave="onReset">
        <basic-form ref="userFormRef" class="update-pwd-form" :model="model" :rules="rules" label-width="auto">
            <n-form-item label="旧密码：" path="password">
                <n-input v-model:value="model.password" type="password" show-password-on="mousedown" placeholder="请输入旧密码" clearable />
            </n-form-item>
            <n-form-item label="新密码：" path="newPwd">
                <n-input v-model:value="model.newPwd" type="password" show-password-on="mousedown" placeholder="请输入新密码" clearable />
            </n-form-item>
            <n-form-item label="确认密码：" path="confirmPwd">
                <n-input v-model:value="model.confirmPwd" type="password" show-password-on="mousedown" placeholder="请再次输入新密码" clearable />
            </n-form-item>
            <n-form-item label=" ">
                <n-space>
                    <n-button type="primary" @click="submit">提 交</n-button>
                    <n-button @click="onReset">重 置</n-button>
                </n-space>
            </n-form-item>
        </basic-form>
    </n-modal>
</template>

<script setup lang="ts">
import BasicForm, { useForm, type BasicFormInstance, type FormRules } from "@/components/BasicForm";
import type { FormItemRule } from "naive-ui";

defineOptions({
    name: "UpdatePwd",
});

const message = useFeedBack("message");

const userFormRef = ref<BasicFormInstance>(null);

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
                return value === model.newPwd;
            },
        },
    ],
};

const { model, formInstance } = useForm(userFormRef, () => ({
    password: "",
    newPwd: "",
    confirmPwd: "",
}));

function submit() {
    formInstance.value.validate((errors) => {
        if(errors) return;
        message.success("验证成功");
    });
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

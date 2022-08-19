<template>
    <n-modal style="width: 500px;" title="修改密码" preset="card">
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
                    <n-button type="primary">提 交</n-button>
                    <n-button @click="formRef.resetFields">重 置</n-button>
                </n-space>
            </n-form-item>
        </basic-form>
    </n-modal>
</template>

<script setup lang="ts">
import BasicForm, { useForm, type BasicFormInstance, type FormRules } from "@/components/BasicForm";

defineOptions({
    name: "UpdatePwd",
    // inheritAttrs: false,
});

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
    confirmPwd: {
        required: true,
        trigger: "blur",
        message: "请再次输入新密码",
    },
};

const { model, formRef } = useForm(userFormRef, () => ({
    password: "",
    newPwd: "",
    confirmPwd: "",
}));

</script>

<style lang="scss" scoped>
.update-pwd-form {
    width: 400px;
    margin: auto;
}
</style>

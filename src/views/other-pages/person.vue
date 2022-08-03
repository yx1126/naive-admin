<template>
    <div class="person">
        <n-grid :cols="4" x-gap="12">
            <n-gi :span="1">
                <n-card title="个人信息">
                    <div class="space-wrapper">
                        <n-avatar class="avatar" round :size="120" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                        <n-button class="update-avatar" text type="primary">修改头像</n-button>
                        <div class="user-info">
                            <template v-for="item, i in userInfoList" :key="i">
                                <div class="user-info-item">
                                    <div>{{ item.title }}：</div>
                                    <div>{{ item.value }}</div>
                                </div>
                                <n-divider class="divider" />
                            </template>
                        </div>
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="3">
                <n-card title="基本资料">
                    <n-form ref="formRef" class="userForm" :model="userForm" :rules="rules">
                        <n-form-item label="用户名：" path="username">
                            <n-input v-model:value="userForm.username" readonly placeholder="请输入用户名" />
                        </n-form-item>
                        <n-form-item label="昵称：" path="nickName">
                            <n-input v-model:value="userForm.nickName" clearable placeholder="请输入昵称" />
                        </n-form-item>
                        <n-form-item label="联系电话：" path="phone">
                            <n-input v-model:value="userForm.phone" clearable placeholder="请输入联系电话" />
                        </n-form-item>
                        <n-form-item label="邮箱：" path="email">
                            <n-input v-model:value="userForm.email" clearable placeholder="请输入邮箱" />
                        </n-form-item>
                        <n-form-item>
                            <n-space>
                                <n-button type="primary" :loading="isLoading" @click="submit">保 存</n-button>
                                <n-button @click="reset">重 置</n-button>
                            </n-space>
                        </n-form-item>
                    </n-form>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import { NForm, type FormRules } from "naive-ui";
import { useFreeBack } from "@/hooks";

defineOptions({
    name: "Person",
});

const message = useFreeBack("message");

const formRef = $ref<InstanceType<typeof NForm> | null>(null);
let isLoading = $ref(false);
let userForm = $ref({
    username: "admin",
    nickName: "admin",
    phone: "16624503090",
    email: "yx17714503091@163.com",
});

const rules: FormRules = {
    nickName: { required: true, message: "请输入昵称！", trigger: "blur" },
    phone: { message: "请输入电话！", trigger: "blur" },
    email: { message: "请输入邮箱！", trigger: "blur" },
};

const userInfoList = $computed(() => [
    { title: "用户昵称", value: "admin" },
    { title: "登录账号", value: "admin" },
    { title: "手机号码", value: "16624503090" },
    { title: "所属部门", value: "技术部门" },
    { title: "邮箱地址", value: "yx17714503091@163.com" },
    { title: "创建时间", value: "2022-08-12" },
]);

function submit(e: MouseEvent){
    e.preventDefault();
    formRef?.validate((errors) => {
        if (!errors) {
            isLoading = true;
            const timer = setTimeout(() => {
                isLoading = false;
                message.success("Valid");
                clearTimeout(timer);
            }, 1000);
        } else {
            message.error("Invalid");
        }
    });
}

function reset(){
    userForm = {
        username: "admin",
        nickName: "admin",
        phone: "16624503090",
        email: "yx17714503091@163.com",
    };
    formRef?.restoreValidation();
}

</script>

<style lang="scss" scoped>
.person {
    .space-wrapper {
        flex-direction: column;
        @extend .flex-align-center;
        .update-avatar {
            margin-top: 20px;
        }
        .user-info {
            width: 90%;
            margin-top: 30px;
            &-item {
                margin-top: 10px;
                @extend .flex-between;
            }
            .divider {
                margin-top: 5px;
                margin-bottom: 5px;
            }
        }
    }
    .userForm {
        width: 400px;
    }
}
</style>

<template>
    <div class="person">
        <n-grid :cols="7" x-gap="12">
            <n-gi :span="2">
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
            <n-gi :span="5">
                <n-card content-style="padding: 0;">
                    <n-tabs type="line" size="large" default-value="base" :tabs-padding="20" pane-style="padding: 20px;">
                        <n-tab-pane tab="基本资料" name="base">
                            <form-render
                                ref="formRef"
                                class="userForm"
                                :context="context"
                                :model="model"
                                :rules="rules"
                                label-width="auto"
                                label-placement="top"
                            >
                                <n-form-item label="用户名：" path="username" required>
                                    <n-input v-model:value="model.username" readonly placeholder="请输入用户名" />
                                </n-form-item>
                                <n-form-item label="昵称：" path="nickName">
                                    <n-input v-model:value="model.nickName" clearable placeholder="请输入昵称" />
                                </n-form-item>
                                <n-form-item label="性别：" path="sex">
                                    <n-radio-group v-model:value="model.sex" name="radiogroup">
                                        <n-space>
                                            <n-radio :value="0">未知</n-radio>
                                            <n-radio :value="1">男</n-radio>
                                            <n-radio :value="2">女</n-radio>
                                        </n-space>
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
                                <template #action>
                                    <FormAction label="" submit-text="保 存" @submit="submit" />
                                </template>
                            </form-render>
                        </n-tab-pane>
                        <n-tab-pane tab="安全设置" name="safety">
                            <n-list class="list-no-padd">
                                <n-list-item>
                                    <n-thing title="账户密码">
                                        <template #description>
                                            <span class="description">设置密码，帐号更安全</span>
                                        </template>
                                    </n-thing>
                                    <template #suffix>
                                        <n-button type="primary" text @click="onEditPwd">修改</n-button>
                                    </template>
                                </n-list-item>
                                <n-list-item>
                                    <n-thing title="绑定手机">
                                        <template #description>
                                            <span class="description">已绑定手机号：+86 177****3090</span>
                                        </template>
                                    </n-thing>
                                    <template #suffix>
                                        <n-button type="primary" text>修改</n-button>
                                    </template>
                                </n-list-item>
                                <n-list-item>
                                    <n-thing title="绑定邮箱">
                                        <template #description>
                                            <span class="description">已绑定邮箱：test****@163.com</span>
                                        </template>
                                    </n-thing>
                                    <template #suffix>
                                        <n-button type="primary" text>修改</n-button>
                                    </template>
                                </n-list-item>
                                <n-list-item>
                                    <n-thing title="账号注销">
                                        <template #description>
                                            <span class="description">该账号将被注销，且不支持找回!</span>
                                        </template>
                                    </n-thing>
                                    <template #suffix>
                                        <n-button type="primary" text>注销</n-button>
                                    </template>
                                </n-list-item>
                            </n-list>
                        </n-tab-pane>
                    </n-tabs>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import FormRender, { useForm, FormAction, type FormRules } from "@/components/FormRender";

defineOptions({
    name: "Person",
});

const message = useFeedBack("message");
const mitter = useMitt();

const { model, context, loading } = useForm(() => ({
    username: "admin",
    nickName: "admin",
    sex: 1,
    email: "yx17714503091@163.com",
    description: "你在干什么！",
}));

const rules: FormRules = {
    nickName: { required: true, message: "请输入昵称！", trigger: "blur" },
    email: { required: true, message: "请输入邮箱！", trigger: "blur" },
};

const userInfoList = [
    { title: "用户昵称", value: "admin" },
    { title: "登录账号", value: "admin" },
    { title: "手机号码", value: "16624503090" },
    { title: "所属部门", value: "技术部门" },
    { title: "邮箱地址", value: "yx17714503091@163.com" },
    { title: "创建时间", value: "2022-08-12" },
];

function submit() {
    loading.value = true;
    const timer = setTimeout(() => {
        loading.value = false;
        console.log(model);
        message.success("Valid");
        clearTimeout(timer);
    }, 1000);
}

function onNoAllowSpace(value: string) {
    return !value.startsWith(" ") && !value.endsWith(" ");
}

function onEditPwd() {
    mitter.emit("updatePwd");
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
    .description {
        color: #909399;
    }
}
</style>

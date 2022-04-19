<template>
    <n-layout class="layout-wrapper" has-sider>
        <n-layout-sider> 海淀桥 </n-layout-sider>
        <n-layout>
            <n-layout-header class="layout-header">
                <Header />
            </n-layout-header>
            <n-layout-header class="layout-tabs">颐和园路</n-layout-header>
            <n-layout-content class="layout-content" :native-scrollbar="nativeScrollbar">
                <p>1-text</p>
                <p>2-text</p>
                <p>3-text</p>
                <p>4-text</p>
                <p>5-text</p>
                <p>6-text</p>
                <p>7-text</p>
                <p>8-text</p>
                <p>9-text</p>
                <p>10-text</p>
                <p>11-text</p>
                <p>12-text</p>
                <p>13-text</p>
                <p>14-text</p>
                <p>15-text</p>
                <p>16-text</p>
                <p>17-text</p>
                <p>18-text</p>
                <p>19-text</p>
                <p>20-text</p>
                <p>21-text</p>
                <p>22-text</p>
                <p>23-text</p>
                <p>24-text</p>
                <p>25-text</p>
                <p>26-text</p>
                <p>27-text</p>
                <p>28-text</p>
                <p>29-text</p>
                <p>30-text</p>
                <p>31-text</p>
                <p>32-text</p>
                <p>33-text</p>
                <p>34-text</p>
                <p>35-text</p>
                <p>36-text</p>
                <p>37-text</p>
                <p>38-text</p>
                <p>39-text</p>
                <p>40-text</p>
                <p>41-text</p>
                <p>42-text</p>
                <p>43-text</p>
                <p>44-text</p>
                <p>45-text</p>
                <p>46-text</p>
                <p>47-text</p>
                <p>48-text</p>
                <p>49-text</p>
                <p>50-text</p>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";

withDefaults(
    defineProps<{
        nativeScrollbar?: boolean;
    }>(),
    {
        nativeScrollbar: true,
    },
);
</script>

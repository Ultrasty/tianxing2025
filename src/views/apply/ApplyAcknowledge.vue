<template>

    <div class="w-[1120px] mx-auto">
        <div
            class="mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
            <div class="flex text-[36px] font-bold leading-none ml-[60px]">
                {{ config.apply.title }}
            </div>
            <div class="flex flex-col mt-[32px] ml-[60px] gap-[32px]" style="display: flex;">
                <div v-html="config.apply.guidelines.content"></div>
                <div class="flex flex-col gap-[24px]" style="--el-fill-color-blank: transparent">
                    <div class="text-[17px] font-semibold">TimeLine</div>
                    <el-descriptions :column="1">

                        <el-descriptions-item v-for="item, i in config.apply.guidelines.timeline" :label="item.field"
                            label-class-name="my-label" :class-name="i % 2 === 0 ? 'my-content' : ''" :key="i">
                            {{ item.value }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
                <el-button type="primary" class="w-[288px]" style="height: 53px; border-radius: 12px;"
                    @click="emit('next')">Acknowledge and
                    continue</el-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useConfig } from '@/composables/config';

const emit = defineEmits(['next'])
const config = useConfig();
</script>
<style lang="less" scoped>
:deep(.my-content) {
    display: inline-block;
    background: #EFEFEF;
    width: 807px;
}

:deep(.my-label) {
    display: inline-block;
    width: 186px;
}
</style>
<template>
    <div class="w-[1200px] mx-auto">
        <div
            class="mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
            <div class="flex text-[27px] font-bold leading-none ml-[60px]">
                DONATION
            </div>
            <div class="flex flex-col mt-[32px] mx-[60px] gap-[32px]">
                <div class="h-[239px] relative">
                    <img :src="config.donation.image" class="w-[1097px] h-full object-cover block" />
                </div>
                <div class="w-[807px]" v-html="config.donation.content">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useConfig } from '@/composables/config';
const config = useConfig();
</script>
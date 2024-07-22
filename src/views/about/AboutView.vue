<template>
    <div class="w-[1353px] mx-auto bg-[#F9F9F9]">
        <div class="flex flex-col items-center mt-[37px]">
            <div :style="{ backgroundImage: 'radial-gradient(61.56% 210.76% at 86.77% 21.09%, #CAB088 0%, #435764 28.5%, #242B30 100%)' }"
                class="font-bold w-fit bg-clip-text text-[56px] text-transparent">
                {{ config.about.title }}</div>
            <div
                class="bg-gradient-to-r from-[#223441] from-[63.86%] via-[#435764] to-[#CAB088] mt-[7px] w-fit bg-clip-text text-[32px] text-transparent">
                {{ config.about.subtitle }}
            </div>
        </div>
        <img class="w-full mt-[45px]" :src="config.about.poster" />

        <template v-for="item, _index in config.about.blocks" :key="_index">
            <div
                class="mx-[75px] mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
                <div class="flex text-[36px] font-bold leading-none ml-[60px]">
                    {{ item.data.title }}
                </div>
                <div class="flex mt-[32px] ml-[60px]" v-if="item.type === 'about'">
                    <div class="text-[15px] text-gray whitespace-pre-wrap">{{ item.data.content }}</div>
                    <img :src="item.data.image" class="w-[246px] ml-[26px]" />
                </div>
                <div class="flex mt-[32px] ml-[60px] gap-[32px]" v-else-if="item.type === 'why-us'">
                    <div v-for="childItem, _childIndex in item.data.items" :key="_childIndex"
                        class="flex-1 flex flex-col gap-[24px]">
                        <img :src="(childItem as any).image" class="w-full h-[125px] object-cover" />
                        <div class="text-[17px] text-[#0E1216] whitespace-pre-wrap font-bold">{{ (childItem as any).title }}
                        </div>
                        <div class="text-[14px] text-gray whitespace-pre-wrap">{{ (childItem as any).content }}</div>
                    </div>
                </div>
                <CategoriesView class="flex mt-[50px] ml-[60px] gap-[32px]" v-else-if="item.type === 'category'"
                    :items="item.data.items!" />
                <AchievementView class="flex mt-[50px] ml-[60px] gap-[32px]" v-else-if="item.type === 'winners'"
                    :items="item.data.items!" />
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useConfig } from '@/composables/config';
import AchievementView from './AchievementView.vue';
import CategoriesView from './CategoriesView.vue';
const config = useConfig();
</script>
<template>
    <div class="w-[1200px] mx-auto">
        <div class="flex gap-[8px] mt-[60px] mb-[40px] flex-wrap">
            <div v-for="t, i in types"
                class="flex items-center text-[12px] px-[12px] h-[27px] rounded-full border border-solid cursor-pointer whitespace-nowrap"
                :class="current === i ? 'text-primary border-primary' : 'text-gray border-[rgba(201,197,188,0.50)]'"
                @click="current = i">
                {{ t.title }}
            </div>
        </div>
        <div class="flex flex-col gap-[40px]">
            <NewsItemView v-for="item in result" :item="item" class="shrink-0" />
        </div>
        <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import NewsItemView from './NewsItemView.vue';

const current = ref(0);

const types = ref([
    { title: 'All', key: '' },
    { title: 'Deep Learning', key: '1' },
    { title: 'Data Science', key: '2' },
    { title: 'Reinforcement Learning', key: '3' },
    { title: 'AI in Education', key: '4' },
    { title: 'AI Algorithms', key: '5' },
    { title: 'Computer Vision', key: '1' },
    { title: 'Natural Language Processing', key: '6' },
    { title: 'Robotics', key: '7' },
    { title: 'Chatbots', key: '8' },
])

const result = ref<any[]>(Array.from({ length: 5 }, (_, k) => ({ id: k + 1 })))
</script>
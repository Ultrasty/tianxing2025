<template>
    <div class="flex gap-[20px]">
        <div>
            <div class='cursor-pointer rotate-180 text-gray' v-if="current > 0" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                    <path d="M0 32V0L15.8025 16.1975L0 32Z" fill="currentColor" fill-opacity="0.2" />
                </svg>
            </div>
        </div>
        <div v-for="item, index in items" class="flex-1 flex flex-col h-[314px]" :key="index">
            <div class="text-[36px] font-semibold" :class="current === 0 && index === 0 ? 'text-primary' : null">{{
                item.year }}</div>
            <div class="flex-1 flex flex-col justify-center gap-[10px] whitespace-pre-wrap">
                <template v-for="achievement in item.awards">
                    <div
                        class="px-[30px] py-[12px] box-border border-0 border-solid border-l-[1px] border-r-[1px] border-[rgba(86,98,115,0.10)]">
                        <div :class="{
                            'text-[#D6B400]': achievement.type === 'gold',
                            'text-[#A3B7CC]': achievement.type === 'sliver',
                            'text-[#9A764C]': achievement.type === 'bronze',
                        }">
                            {{ achievement.type === 'gold'
                                ? 'Gold Award'
                                : achievement.type === 'silver'
                                    ? 'Silver Award' :
                                    achievement.type === 'bronze'
                                        ? 'Bronze Award'
                                        : ''
                            }}
                        </div>
                        <div>{{ achievement.name }}</div>
                        <div v-if="achievement.date">{{ achievement.date }}</div>
                    </div>
                </template>
            </div>
        </div>
        <div>
            <div class='cursor-pointer text-gray' v-if="current < totalPage - 1" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                    <path d="M0 32V0L15.8025 16.1975L0 32Z" fill="currentColor" fill-opacity="0.2" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { array } from 'vue-types'
const current = ref(0)
const props = defineProps({
    items: array<any>().isRequired,
})
const pageSize = 5
const items = computed(() => props.items.slice(current.value * pageSize, (current.value + 1) * pageSize))
const totalPage = computed(() => Math.ceil(props.items.length / pageSize))

const prev = () => {
    if (current.value <= 0) {
        return
    }
    current.value -= 1
}
const next = () => {
    if (current.value >= totalPage.value - 1) {
        return
    }
    current.value += 1
}
</script>
<template>
    <div class="h-[180px] flex gap-[40px] cursor-pointer"
        @click="router.push({ name: 'newsDetail', params: { id: props.item.id } })">
        <img :src="placeholder8" width="240px" class="h-full object-cover" />
        <div class="flex flex-col justify-space gap-[24px]">
            <div class="text-[24px] font-semibold">Your Superpower: A Motivated Mindset</div>
            <div class="flex-1 line-clamp-2 text-gray text-[15px]">When wellness guru, Jay Shetty, interviewed Big
                Sean, for his podcast, I was struck by a comment the rap artist made.</div>
            <div class="text-[12px] text-gray opacity-50">Richard Arens | Apr II, 2023 | 2,231 Views</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import placeholder8 from '@/assets/placeholder8.png'
import { useRouter } from 'vue-router';
import { any } from 'vue-types';
const props = defineProps({
    item: any().isRequired,
})
const router = useRouter()
</script>
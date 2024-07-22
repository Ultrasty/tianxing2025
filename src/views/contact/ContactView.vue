<template>
    <div class="w-[1120px] mx-auto">
        <div
            class="mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
            <div class="flex text-[27px] font-bold leading-none ml-[60px]">
                CONTACT INFORMATION
            </div>
            <div class="flex flex-col mt-[32px] ml-[60px]">
                <div class="flex gap-[32px]">
                    <div
                        class="text-primary border border-default border-solid rounded-[7px] w-[253px] h-[156px] flex flex-col items-center justify-center gap-[16px] bg-white px-[24px] box-border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path
                                d="M23.3333 2.66666H10C8.89543 2.66666 8 3.56209 8 4.66666V27.3333C8 28.4379 8.89543 29.3333 10 29.3333H23.3333C24.4379 29.3333 25.3333 28.4379 25.3333 27.3333V4.66666C25.3333 3.56209 24.4379 2.66666 23.3333 2.66666Z"
                                stroke="currentColor" stroke-width="2" />
                            <path d="M15.333 6.66666H17.9997" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 25.3333H19.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <div class="text-gray text-[19px] text-center font-semibold">{{ config.contact.telephone }}
                        </div>
                    </div>
                    <div
                        class="text-primary border border-default border-solid rounded-[7px] w-[253px] h-[156px] flex flex-col items-center justify-center gap-[16px] bg-white px-[24px] box-border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M2.6665 26H29.3332V16V6H15.9998H2.6665V16V26Z" stroke="currentColor"
                                stroke-width="2" stroke-linejoin="round" />
                            <path d="M2.6665 6L15.9998 16L29.3332 6" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.9998 6H2.6665V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M29.3333 16V6H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <div class="text-gray text-[15px] text-center">{{ config.contact.email }}</div>
                    </div>
                    <div
                        class="text-primary border border-default border-solid rounded-[7px] w-[253px] h-[156px] flex flex-col items-center justify-center gap-[16px] bg-white px-[24px] box-border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path
                                d="M6.90475 21.8383C4.4919 22.5621 2.99951 23.5621 2.99951 24.6667C2.99951 26.8758 8.96905 28.6667 16.3328 28.6667C23.6966 28.6667 29.6662 26.8758 29.6662 24.6667C29.6662 23.5621 28.1738 22.5621 25.7609 21.8383"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M16.3332 23.3333C16.3332 23.3333 24.9998 17.6693 24.9998 11.1212C24.9998 6.45188 21.1196 2.66666 16.3332 2.66666C11.5467 2.66666 7.6665 6.45188 7.6665 11.1212C7.6665 17.6693 16.3332 23.3333 16.3332 23.3333Z"
                                stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                            <path
                                d="M16.3328 14.6667C18.1738 14.6667 19.6662 13.1743 19.6662 11.3333C19.6662 9.4924 18.1738 8 16.3328 8C14.4919 8 12.9995 9.4924 12.9995 11.3333C12.9995 13.1743 14.4919 14.6667 16.3328 14.6667Z"
                                stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                        <div class="text-gray text-[15px] text-center">
                            {{ config.contact.address }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
            <div class="flex text-[27px] font-bold leading-none ml-[60px]">
                FAQ
            </div>
            <div class="flex flex-col mt-[32px] ml-[60px]">
                <div class="flex flex-col gap-[40px]">
                    <div v-for="it in data" class="flex flex-col gap-[16px]">
                        <div class="text-[19px] font-semibold before:content-['Q:'] before:mr-[16px]">{{ it.question }}
                        </div>
                        <div
                            class="text-gray text-[15px] before:content-['A:'] before:mr-[16px] before:text-[19px] before:font-semibold">
                            {{ it.answer }}</div>
                    </div>
                </div>
                <el-pagination small background layout="prev, pager, next" :total="50" class="mt-[40px]"
                    :page-size="pageSize" :page-count="page" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useConfig } from '@/composables/config';
import { computed } from 'vue';

const pageSize = 10
const config = useConfig()
const allFaqs = computed(() => config.contact.faqs)
const page = computed(() => Math.ceil(allFaqs.value.length / pageSize))
const data = computed(() => allFaqs.value.slice((page.value - 1) * pageSize, page.value * pageSize))
</script>
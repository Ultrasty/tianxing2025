<template>
    <div class="mt-[70px]">
        <div
            class="flex flex-col items-center mx-auto w-[1200px] border-0 border-t-[1px] border-t-default border-solid pb-[50px]">
            <!-- <a class="flex w-fit px-[24px] text-primary rounded-[12px] h-[55px] gap-[16px] items-center mt-[64px] min-w-[287px] box-border border border-primary border-solid justify-center text-[17px] cursor-pointer hover:bg-primary hover:text-white transition ease-in no-underline"
                :href="`mailto:${config.footer.email}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clip-path="url(#clip0_17_696)">
                        <path
                            d="M23.0821 4.55337C23.0751 4.54552 23.0704 4.53707 23.0635 4.52923C23.0373 4.49499 23.0072 4.46423 22.9778 4.43573C22.9679 4.42623 22.9552 4.41507 22.9454 4.40557C22.9292 4.3905 22.9108 4.37602 22.8952 4.36321C22.8889 4.35763 22.8825 4.35205 22.8739 4.34708C22.8612 4.33592 22.8469 4.32764 22.8319 4.31709C22.8176 4.3088 22.8026 4.29825 22.7883 4.28997C22.7216 4.24958 22.6494 4.21555 22.5751 4.19178C22.5568 4.18698 22.538 4.1799 22.5197 4.17509C22.446 4.15359 22.3679 4.14297 22.2917 4.13913L22.2769 4.13824C22.2643 4.13675 22.2502 4.13813 22.236 4.1395C22.1461 4.13931 22.0548 4.15164 21.9688 4.1747L3.66071 9.08033L3.64095 9.08805L3.63642 9.08926C3.11637 9.26743 2.82324 9.82156 2.96806 10.353C3.04206 10.6292 3.22623 10.8637 3.47641 11.0005L15.0962 17.7092C15.6104 17.9984 16.2608 17.8266 16.5644 17.3206L21.9224 8.0403L24.7649 18.6489L8.53286 22.9983L7.71697 19.9533C7.56714 19.3941 6.99017 19.061 6.43099 19.2109C5.87181 19.3607 5.5387 19.9377 5.68853 20.4968L6.77618 24.556C6.92601 25.1152 7.50298 25.4483 8.06216 25.2985L26.3227 20.4056C26.8819 20.2557 27.215 19.6788 27.0651 19.1196L23.2593 4.91594C23.2218 4.78525 23.1624 4.66288 23.0821 4.55337ZM15.2576 15.3778L6.70357 10.4391L20.1963 6.8237L15.2576 15.3778Z"
                            fill="currentColor" />
                        <path
                            d="M5.88517 17.183C6.44435 17.0332 6.77746 16.4562 6.62763 15.897L6.35587 14.8828C6.20604 14.3236 5.62907 13.9905 5.06989 14.1403C4.51071 14.2902 4.17759 14.8672 4.32742 15.4263L4.59918 16.4406C4.74902 16.9997 5.32372 17.3335 5.88517 17.183Z"
                            fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_17_696">
                            <rect width="24" height="24" fill="white"
                                transform="translate(0.302979 6.21179) rotate(-15)" />
                        </clipPath>
                    </defs>
                </svg>
                {{ config.footer.email }}
            </a> -->
            <!-- <div class="flex gap-[10px] mt-[64px]">
                <template v-for="link, index in config.footer.links" :key="index">
                    <div class="text-primary text-[14px] cursor-pointer">{{ link.title }}</div>
                    <div v-if="index !== config.footer.links.length - 1" class='text-gray text-[14px]'>|</div>
                </template>
            </div> -->
            <div class="text-gray text-[14px] mt-[10px] opacity-50">{{ config.footer.copyright }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useConfig } from '@/composables/config';

const config = useConfig()
</script>
<template>
    <template v-if="agreedAcknowledge">
        <template v-if="loggedIn">
            <ApplyFormView />
        </template>
        <template v-else>
            <div class="flex flex-col min-h-[599px] items-center justify-center">
                <div class="w-[72px] h-[72px] text-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                        <g opacity="0.33" clip-path="url(#clip0_71_4380)">
                            <path
                                d="M36 72.5C16.1508 72.5 0 56.352 0 36.5C0 16.651 16.1508 0.5 36 0.5C55.8519 0.5 72 16.6481 72 36.5C72 56.352 55.8519 72.5 36 72.5ZM36 5.66572C18.9971 5.66572 5.16565 19.4971 5.16565 36.5001C5.16565 53.5006 18.9971 67.3344 35.9999 67.3344C53.0005 67.3344 66.8344 53.5029 66.8344 36.5001C66.8344 19.4971 53.0005 5.66572 35.9999 5.66572H36ZM32.1258 19.7115C32.1258 18.6971 32.5432 17.689 33.2605 16.972C33.9778 16.2549 34.9855 15.837 35.9999 15.837C37.0145 15.837 38.0221 16.2548 38.7395 16.972C39.4567 17.689 39.8741 18.6971 39.8741 19.7115C39.8741 20.7256 39.4568 21.7337 38.7395 22.4511C38.0222 23.1683 37.0145 23.5857 35.9999 23.5857C34.9855 23.5857 33.9778 23.1683 33.2606 22.4511C32.5432 21.7337 32.1259 20.7256 32.1259 19.7115H32.1258ZM36 57.1631C34.5741 57.1631 33.417 56.0083 33.417 54.58V31.3344C33.417 29.9085 34.5741 28.7514 35.9999 28.7514C37.4259 28.7514 38.583 29.9085 38.583 31.3344V54.58C38.583 56.0083 37.4259 57.1631 35.9999 57.1631H36Z"
                                fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_71_4380">
                                <rect width="72" height="72" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class='whitespace-nowrap text-[#0E1216] mt-[40px] text-[24px] font-semibold'>Login required</div>
                <div class="mt-[16px] text-gray text-[15px]">You need to log in first to continue the application
                    process.</div>
                <div class='min-w-[110px] h-[53px] bg-primary text-white rounded-[12px] flex items-center justify-center mt-[40px]'
                    @click="$router.push({ name: 'login', query: { redirect: $route.path } })">
                    Login</div>
            </div>
        </template>
    </template>
    <template v-else>
        <ApplyAcknowledge @next="agreedAcknowledge = true" />
    </template>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import ApplyFormView from './ApplyFormView.vue';
import ApplyAcknowledge from './ApplyAcknowledge.vue';

const loggedIn = ref(false)
const agreedAcknowledge = ref(false)
</script>
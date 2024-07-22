<template>
    <div class="w-screen h-screen bg-[#D1E8E7] relative">
        <div class="bg-white w-[500px] rounded-[15px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-[80px] box-border flex flex-col gap-[16px]"
            style="box-shadow: 0px 6px 24px 0px rgba(14, 182, 152, 0.10);">
            <div class="text-[22px] font-bold">
                {{ type === 'login' ? 'Sign in' : type === 'register' ? 'Sign up' : 'Reset password' }}
            </div>
            <div class="text-right text-[rgba(0,0,0,0.65)] text-[14px]">
                <template v-if="type === 'login'">
                    Don’t have an account？<span class="text-[#0EB698] cursor-pointer" @click="toggleMode">
                        Sign up
                    </span>
                </template>
                <template v-if="type === 'register'">
                    Already have an account？<span class="text-[#0EB698] cursor-pointer" @click="toggleMode">
                        Sign in
                    </span>
                </template>
                <template v-if="type === 'reset-password'">
                    <span class="text-[#0EB698] cursor-pointer" @click="type = 'login'">
                        Sign in
                    </span>
                </template>
            </div>
            <div v-if="type === 'reset-password' && waitVerify" class="text-[rgba(0,0,0,0.85)] text-[14px]">
                Set a new password
            </div>
            <el-input type="email" v-model="form.email" style="--el-color-primary: #0EB698"
                v-if="type === 'login' || (type === 'reset-password' && !waitVerify) || (type === 'register' && !waitVerify)">
                <template #prefix>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 14.9983H16.3333V9.99829V4.99829H9.66667H3V9.99829V14.9983Z" fill="#0EB698"
                            fill-opacity="0.2" stroke="#4C4C4C" stroke-linejoin="round" />
                        <path d="M3 4.99829L9.66667 9.99829L16.3333 4.99829" fill="#0EB698" fill-opacity="0.2" />
                        <path d="M3 4.99829L9.66667 9.99829L16.3333 4.99829" stroke="#4C4C4C" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M9.66667 4.99829H3V9.99829" fill="#0EB698" fill-opacity="0.2" />
                        <path d="M9.66667 4.99829H3V9.99829" stroke="#4C4C4C" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M16.3334 9.99829V4.99829H9.66675" fill="#0EB698" fill-opacity="0.2" />
                        <path d="M16.3334 9.99829V4.99829H9.66675" stroke="#4C4C4C" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="ml-[8px] w-[70px] text-left">Email</div>
                </template>
            </el-input>
            <el-input type="password" show-password v-model="form.password" style="--el-color-primary: #0EB698"
                v-if="type === 'login' || (type === 'register' && !waitVerify) || (type === 'reset-password' && waitVerify)">
                <template #prefix>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1667 8.33162H5.83333C5.3731 8.33162 5 8.70472 5 9.16496V14.9983C5 15.4585 5.3731 15.8316 5.83333 15.8316H14.1667C14.6269 15.8316 15 15.4585 15 14.9983V9.16496C15 8.70472 14.6269 8.33162 14.1667 8.33162Z"
                            fill="#0EB698" fill-opacity="0.2" stroke="#4C4C4C" stroke-linejoin="round" />
                        <path
                            d="M7.5 8.33162V5.83162C7.5 4.2975 8.61929 3.33162 10 3.33162C11.3807 3.33162 12.5 4.2975 12.5 5.83162V8.33162"
                            fill="#0EB698" fill-opacity="0.2" />
                        <path
                            d="M7.5 8.33162V5.83162C7.5 4.2975 8.61929 3.33162 10 3.33162C11.3807 3.33162 12.5 4.2975 12.5 5.83162V8.33162"
                            stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 11.665V12.4983V11.665Z" fill="#0EB698" fill-opacity="0.2" />
                        <path d="M10 11.665V12.4983" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 7.49829V12.4983V7.49829Z" fill="#0EB698" fill-opacity="0.2" />
                        <path d="M2.5 7.49829V12.4983" stroke="#4C4C4C" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M17.5 7.49829V12.4983" stroke="#4C4C4C" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="ml-[8px] w-[70px] text-left">Password</div>
                </template>
            </el-input>
            <template v-if="type === 'register'">
                <div class="flex justify-between">
                    <input v-for="_, i in 6" class="w-[40px] h-[40px] outline-[#0EB698] text-center text-[16px]"
                        :ref="(el: any) => inputsRef[i] = el" v-model="form.code[i]" @input="handleInput($event, i)"
                        @keydown.delete="handleDelete(i)" />
                </div>
            </template>
            <div v-if="(type === 'register' && !waitVerify) || (type === 'reset-password' && waitVerify)"
                class='opacity-35 text-right text-[14px]'>At least 6
                characters,including
                numbers and
                letters</div>
            <div v-if="type === 'reset-password' && !waitVerify" class="text-[rgba(0,0,0,0.35)] text-[12px]">Provide
                your registered
                email, and we will send you
                instructions on how
                to reset your password.</div>
            <div class="text-right">
                <span v-if="type === 'login'" class="text-[#0EB698] text-[14px] cursor-pointer"
                    @click="type = 'reset-password'">Forgot password?</span>
            </div>
            <template v-if="type === 'login'">
                <div>
                    <el-button type="primary" class="w-full" style="height: 45px;" :style="buttonStyle"
                        @click="handleLogin">
                        Sign in
                    </el-button>
                </div>
            </template>
            <template v-if="type === 'register'">
                <div>
                    <el-button type="primary" class="w-full" style="height: 45px;" :style="buttonStyle"
                        :disabled="count > 0" @click="handleSendCode">
                        {{ count > 1 ? `Resend Verification Code(${count})` : 'Send Verification Code' }}
                    </el-button>
                </div>
                <div>
                    <el-button type="primary" class="w-full" style="height: 45px;" :style="buttonStyle"
                        :disabled="!codeFilled" @click="handleSignup">
                        Sign up
                    </el-button>
                </div>
            </template>
            <div v-if="type === 'reset-password'">
                <el-button type="primary" class="w-full" style="height: 45px;" :style="buttonStyle"
                    :disabled="!form.email" @click="handleResetPasswordEmail">
                    Send
                </el-button>
            </div>
            <div v-if="type === 'login' || type === 'register'">
                <el-button class="w-full" style="height: 45px;" :style="buttonStyle" @click="handleLoginViaGoogle">
                    <template #icon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect y="-0.00170898" width="16" height="16" fill="url(#pattern0_48_1181)" />
                            <defs>
                                <pattern id="pattern0_48_1181" patternContentUnits="objectBoundingBox" width="1"
                                    height="1">
                                    <use xlink:href="#image0_48_1181" transform="scale(0.005)" />
                                </pattern>
                                <image id="image0_48_1181" width="200" height="200"
                                    xlink:href="data:image/png;base64,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" />
                            </defs>
                        </svg>
                    </template>
                    Sign in with Google
                </el-button>
            </div>
            <div class="flex items-center" v-if="type === 'login' || type === 'register'">
                <el-checkbox v-model="form.agree" style="--el-color-primary: #0EB698" />
                <div class="text-[12px] font-bold text-[rgba(0,0,0,0.35)] ml-[5px]">
                    Agree to the <span class="text-[#0EB698] cursor-pointer">Terms of Service</span> and <span
                        class="text-[#0EB698] cursor-pointer">Privacy Policy</span>
                </div>
            </div>
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 bottom-[40px] text-[rgba(0,0,0,0.35)] text-[12px]">@copyright
            Hong Kong
            TSAF Consulting Ltd.</div>
    </div>
</template>
<script setup lang="ts">
import request from '@/utils/request';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { googleSdkLoaded } from "vue3-google-login";

const router = useRouter();
const type = ref<'login' | 'register' | 'reset-password'>('login')
const waitVerify = ref(false)
const count = ref(0)
const timer = ref<number | null>(null)
const inputsRef = reactive<HTMLInputElement[]>([])
const route = useRoute()

const buttonStyle = {
    '--el-color-primary': '#0EB698',
    '--el-button-hover-bg-color': '#0EB69877',
    '--el-button-hover-border-color': '#0EB69877',
    '--el-button-disabled-bg-color': 'rgba(139, 139, 139, 0.25)',
    '--el-button-disabled-border-color': 'rgba(139, 139, 139, 0.25)',
    '--el-button-active-bg-color': '#0EB698',
    '--el-button-active-border-color': '#0EB698',
}

const form = reactive({
    email: '',
    password: '',
    agree: false,
    code: ['', '', '', '', '', ''],
})

const codeFilled = computed(() => form.code.every(i => !!i))

const goToHome = () => {
    router.push({ name: 'home' })
}

const handleDelete = (i: number) => {
    form.code[i] = ''
    if (i > 0) {
        setTimeout(() => {
            inputsRef[i - 1].focus()
        })
    }
}

const handleInput = (event: Event, i: number) => {
    const value = (event.target as HTMLInputElement).value
    if (i === 5) {
        inputsRef[i].blur()
    }
    form.code[i] = value[0]
    if (value === '') {
        form.code[i] = ' '
    }
    if (i < 6) {
        inputsRef[i + 1]?.focus()
    }
}

const handleLogin = () => {
    console.log(form)
    goToHome()
}

const handleSignup = () => {
    console.log(form)
    goToHome()
}

const loginViaGoogleCode = async (code: string) => {
    try {
        const response = await request.post("http://localhost:4000/auth", { data: { code } });
        const userDetails = response.data;
        console.log("User Details:", userDetails);
        // this.userDetails = userDetails;

        // Redirect to the homepage ("/")
        //this.$router.push("/rex");
    } catch (error) {
        console.error("Failed to send authorization code:", error);
    }
}

const handleLoginViaGoogle = () => {
    googleSdkLoaded(google => {
        google.accounts.oauth2
            .initCodeClient({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                scope: "email profile openid",
                callback: response => {
                    if (response.code) {
                        loginViaGoogleCode(response.code);
                    }
                }
            })
            .requestCode();
    });
}

const handleSendCode = () => {
    console.log('send code')
    if (count.value > 0) {
        return
    }
    count.value = 60
    timer.value = setInterval(() => {
        if (count.value > 0) {
            count.value -= 1
            return
        }
        if (timer.value != null) {
            clearInterval(timer.value)
            timer.value = null
        }
    }, 1e3)
}

const handleResetPasswordEmail = () => {

}

const toggleMode = () => {
    Object.assign(form, {
        username: '',
        password: '',
        agree: false,
    })
    type.value = type.value === 'login' ? 'register' : 'login'
}

onMounted(() => {
    console.log(route.query)
    if (route.query.type === 'reset-password') {
        type.value = 'reset-password'
        waitVerify.value = true
    }
    // type.value = 'reset-password'
    // waitVerify.value = true
    // count.value = 60
})
</script>
<template>
    <div class="w-[1120px] mx-auto">
        <div v-if="!submitted || editing"
            class="mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
            <div class="flex text-[36px] font-bold leading-none ml-[60px]">
                APPLICATION FORM
            </div>
            <div class="flex flex-col mt-[32px] ml-[60px]">
                <el-form ref="formRef" style="max-width: 600px" :model="numberValidateForm" label-position="left"
                    class="demo-ruleForm">
                    <div class="mb-[40px] text-[17px] font-bold">Personal Information</div>
                    <!-- <el-form-item label="age" prop="age" :rules="[
                    { required: true, message: 'age is required' },
                    { type: 'number', message: 'age must be a number' },
                ]">
                    <el-input v-model.number="numberValidateForm.age" type="text" autocomplete="off" />
                </el-form-item> -->
                    <el-form-item label="Name" prop="name" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.name" type="text" autocomplete="off"
                            style="width: 356px;" />
                    </el-form-item>

                    <el-form-item label="Date of Birth" prop="name" :rules="[]" label-width="120px">
                        <el-date-picker v-model="numberValidateForm.name" autocomplete="off" style="width: 356px;" />
                    </el-form-item>

                    <el-form-item label="Region" prop="region" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.region" type="text" autocomplete="off"
                            style="width: 356px;" />
                    </el-form-item>

                    <el-form-item label="School" prop="school" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.school" type="text" autocomplete="off"
                            placeholder="The school you are currently attending ..." style="width: 356px;" />
                    </el-form-item>

                    <el-form-item label="Grade" prop="grade" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.grade" type="text" autocomplete="off"
                            style="width: 356px;" />
                    </el-form-item>

                    <el-form-item label="Interests" prop="interests" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.interests" type="textarea" autocomplete="off"
                            style="width: 569px;" placeholder="What are your interests and hobbies ..."
                            :autosize="{ minRows: 3 }" :maxlength="30" show-word-limit />
                    </el-form-item>

                    <div class="mt-[40px] mb-[24px] text-[17px] font-bold">Project Introduction</div>

                    <el-form-item label="Category" prop="projectCategory" :rules="[]" label-width="120px">
                        <el-select v-model="numberValidateForm.projectCategory" autocomplete="off" style="width: 356px;"
                            placeholder="The title of your project ...">
                            <el-option v-for="item in ['AI', 'Science', 'Engineering']" :key="item" :label="item"
                                :value="item" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Title" prop="projectTitle" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.projectTitle" type="text" autocomplete="off"
                            style="width: 356px;" placeholder="The title of your project ..." />
                    </el-form-item>

                    <el-form-item label="Description" prop="projectDescription" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.projectDescription" type="textarea" autocomplete="off"
                            style="width: 569px;" placeholder="Briefly describe your project  ..."
                            :autosize="{ minRows: 3 }" :maxlength="300" show-word-limit />
                    </el-form-item>

                    <el-form-item label="Additional Notes" prop="projectAdditionNotes" :rules="[]" label-width="120px">
                        <el-input v-model="numberValidateForm.projectAdditionNotes" type="textarea" autocomplete="off"
                            style="width: 569px;" placeholder="More information about your project ..."
                            :autosize="{ minRows: 3 }" :maxlength="300" show-word-limit />
                    </el-form-item>

                    <div class="mt-[40px] mb-[24px] text-[17px] font-bold">Upload Attachments ( 1~3 )</div>

                    <el-form-item prop="projectAdditionNotes" :rules="[]">
                        <el-upload class="upload-demo" drag multiple accept=".pdf,.doc,.xls,.xlsx,ppt">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
                                fill="none">
                                <path d="M42.6666 42.6667L31.9999 32L21.3333 42.6667" stroke="#606266" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M32 32V56" stroke="#606266" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M54.3732 49.0398C56.9741 47.6219 59.0288 45.3781 60.2129 42.6628C61.397 39.9474 61.6431 36.9151 60.9124 34.0443C60.1818 31.1735 58.5159 28.6278 56.1777 26.809C53.8395 24.9901 50.9622 24.0017 47.9999 23.9998H44.6399C43.8327 20.8778 42.3283 17.9794 40.2398 15.5224C38.1512 13.0655 35.5328 11.1141 32.5815 9.81475C29.6302 8.51543 26.4227 7.90208 23.2002 8.02081C19.9777 8.13954 16.8241 8.98726 13.9764 10.5002C11.1287 12.0132 8.66099 14.1521 6.75889 16.756C4.85678 19.36 3.56973 22.3612 2.99451 25.5342C2.41928 28.7071 2.57084 31.9692 3.4378 35.0752C4.30475 38.1811 5.86454 41.0501 7.9999 43.4665"
                                    stroke="#606266" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M42.6666 42.6667L31.9999 32L21.3333 42.6667" stroke="#606266" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="el-upload__text">
                                Drop file here or <em>click to upload</em>
                            </div>
                            <template #tip>
                                <div class="el-upload__tip">
                                    You can only upload pdf/doc/xls/xlsx/ppt files, and they must not exceed 200mb.
                                </div>
                            </template>
                        </el-upload>
                    </el-form-item>

                    <div class="mt-[40px] mb-[24px] text-[17px] font-bold">Registration Fee</div>
                    <div
                        class="flex border border-[rgba(45,141,210,0.33)] border-solid rounded-[10px] p-[24px] w-[818px]">
                        <div class='whitespace-pre-wrap text-[14px] mr-[48px]'>{{ feeNote }}</div>
                        <div class='w-[195px] shrink-0 flex flex-col gap-[10px]'>
                            <div class="text-center text-[24px] font-semibold text-[#0E1216]"><span
                                    class='text-[18px]'>$</span> 19.99</div>
                            <template v-if="!paid">
                                <div
                                    class="flex justify-center items-center bg-primary rounded-[12px] h-[41px] text-white cursor-pointer">
                                    Pay
                                    Registration Fee</div>
                                <div
                                    class="flex justify-center items-center w-full border border-primary rounded-[12px] border-solid text-primary box-border h-[41px] cursor-pointer">
                                    Refresh Payment Status</div>
                            </template>

                            <div class="flex justify-center items-center w-full border border-primary rounded-[12px] border-solid text-primary box-border h-[41px] text-[14px]"
                                v-else>
                                <svg width="20" class="mr-[10px]" height="21" viewBox="0 0 20 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#99D194" />
                                    <path d="M14 7.5L8.5 13L6 10.5" stroke="white" stroke-width="2"
                                        stroke-linejoin="round" />
                                </svg>
                                Payment Completed
                            </div>
                        </div>
                    </div>
                    <el-form-item class="mt-[70px]" v-if="!submitted || editing">
                        <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
                        <!-- <el-button @click="resetForm(formRef)">Reset</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div v-else>
            <div
                class="w-full flex items-center border border-[rgba(45,141,210,0.33)] border-solid p-[32px] rounded-[10px] mt-[80px] gap-[48px]">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="28" fill="#99D194" />
                    <path d="M38.6668 20L24.0002 34.6667L17.3335 28" stroke="white" stroke-width="2"
                        stroke-linejoin="round" />
                </svg>
                <div class="text-[17px]">
                    Your project submission for the AI competition has been successfully completed and is now awaiting
                    review.<br>
                    Thank you for your participation!<br><br>
                    We will notify you once the review process is complete.
                </div>
            </div>
            <div
                class="mt-[70px] relative before:absolute before:mr-[36px] before:w-[16px] before:bg-gradient-to-r before:from-primary before:to-[#43B8EA] before:h-[56px] before:block before:content-['']">
                <div class="flex text-[36px] font-bold leading-none ml-[60px]">
                    YOUR INFORMATION
                </div>
                <div class="flex flex-col mt-[32px] ml-[60px]">
                    <el-descriptions :column="1" title="Personal Information">
                        <el-descriptions-item label="Name">John Smith</el-descriptions-item>
                        <el-descriptions-item label="Date of Birth">January 1, 1990</el-descriptions-item>
                        <el-descriptions-item label="Region">New York, USA</el-descriptions-item>
                        <el-descriptions-item label="School">XYZ High School</el-descriptions-item>
                        <el-descriptions-item label="Grade">11th grade</el-descriptions-item>
                        <el-descriptions-item label="Interests">Basketball, Photography, Computer
                            Programming</el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions class="mt-[40px]" :column="1" title="Project Introduction">
                        <el-descriptions-item label="Category">Science</el-descriptions-item>
                        <el-descriptions-item label="Title">Solar Energy Efficiency Enhancement
                            Project</el-descriptions-item>
                        <el-descriptions-item label="Description">This project aims to improve the efficiency of solar
                            panels by
                            implementing a novel cooling mechanism.</el-descriptions-item>
                        <el-descriptions-item label="Additional Notes">We will be conducting experiments to test the
                            effectiveness
                            of various cooling methods.</el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions class="mt-[40px]" :column="1" title="Attachments" />
                    <div class="flex gap-[24px]">
                        <div v-for="_ in 3" class="flex items-center gap-[12px] text-gray">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 2V8H20" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M16 13H8" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M16 17H8" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M10 9H9H8" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <div class="text-[14px] text-[#0E1216]">Research Paper (PDF)</div>
                        </div>
                    </div>
                    <el-descriptions class="mt-[40px]" :column="1" title="Registration Fee" />
                    <div class="flex gap-[12px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="#99D194" />
                            <path d="M14 7L8.5 12.5L6 10" stroke="white" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                        <div class="text-[14px]">You have successfully paid the registration fee of $19.99.</div>
                    </div>
                    <div class="mt-[70px] flex items-center gap-[24px]">
                        <el-button type="primary" @click="modify" :disabled="locked">Modify</el-button>
                        <div class="text-gray text-[17px] flex items-center gap-[12px] whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path
                                    d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8.5V12.5" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 16.5H12.01" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            You can only modify these information before the application deadline.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const paid = ref(true)
const submitted = ref(true)
const editing = ref(false)
const locked = ref(false)

const feeNote = `Thank you for your interest in participating in our AI project competition.\nPlease note that there is a registration fee associated with entering the competition. This fee helps cover the costs of organizing and managing the event, including judging, prizes, and logistical expenses. Your support enables us to continue promoting innovation and excellence in the field of artificial intelligence. We appreciate your understanding and look forward to your participation in the competition.`

const numberValidateForm = reactive({
    name: '',
    birthday: '',
    region: '',
    school: '',
    grade: '',
    interests: '',
    projectCategory: '',
    projectTitle: '',
    projectDescription: '',
    projectAdditionNotes: '',
    attachments: [],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

// const resetForm = (formEl: FormInstance | undefined) => {
//     if (!formEl) return
//     formEl.resetFields()
// }

const modify = () => {
    editing.value = true
}
</script>
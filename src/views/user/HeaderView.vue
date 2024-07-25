<template>
    <div class="header-container">
        <div class="header-content">
            <img class='logo' :src="logo" />
            <div class="nav-wrapper">
                <div class="nav-items">
                    <div v-for="menu in menus" :key="menu.name" @mouseenter="handleMouseOver(menu.name)"
                        @mouseleave="handleMouseLeave" class="nav-item" :class="{ active: isActive(menu.name) }">
                        
                        <span class="nav-link">{{ menu.title }}</span> <!-- 替换为 span -->
                        
                        <DropdownMenu :title="menu.title" :subMenus="menu.subMenus"
                            :isVisible="menuDropdown === menu.name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const logo = "https://via.placeholder.com/183x70?text=Logo"; // 暂时用占位图片
import DropdownMenu from '@/views/user/DropdownMenu.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const menus = [
    {
        title: 'ENSO',
        name: 'ENSO',
        subMenus: [
            { title: '预测结果', name: 'ENSO_ForecastResult' },
            { title: '预测检验', name: 'ENSO_ForecastExamination' },
        ]
    },
    {
        title: '全球天气',
        name: 'GlobalWeather',
        subMenus: [
            { title: '预测结果', name: 'GlobalWeather_ForecastResult' },
        ]
    },
    {
        title: 'NAO',
        name: 'NAO',
        subMenus: [
            { title: '预测结果', name: 'NAO_ForecastResult' },
            { title: '预测检验', name: 'NAO_ForecastExamination' },
        ]
    },
    {
        title: '海冰',
        name: 'SeaIce',
        subMenus: [
            { title: '预测结果', name: 'SeaIce_ForecastResult' },
            { title: '预测检验', name: 'SeaIce_ForecastExamination' },
        ]
    },
];

const menuDropdown = ref<string | null>(null);

const handleMouseOver = (menuName: string) => {
    menuDropdown.value = menuName;
};

const handleMouseLeave = () => {
    menuDropdown.value = null;
};

const isActive = (menuName: string) => {
    return router.currentRoute.value.name === menuName;
};

</script>

<style scoped>
.header-container {
    border-bottom: 1px solid #C9C5BC;
    z-index: 1000;
    /* TODO: 
        z-index 未能起效！
        导致副菜单动画会出现在主菜单上方。
        可能是设置了 Transform 动画的原因 */
    background-color: white;
    position: relative;
}

.header-content {
    width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
}

.logo {
    width: 183px;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    display: block;
}

.nav-wrapper {
    display: flex;
    width: 100%;
    /* 视需要调整 */
    align-items: center;
    height: 100%;
    position: relative;
    justify-content: center;
    /* 确保导航项居中 */
}

.nav-items {
    display: flex;
    width: 50%;
    /* 确保子元素撑满父容器 */
    gap: 20px;
    /* 控制导航项之间的间距 */
    height: 100%;
    align-items: center;
    justify-content: center;
    /* 确保导航项居中 */
}

.nav-item {
    flex-grow: 1;
    /* 使每个导航项平分剩余空间 */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    /* 防止文本换行 */
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 4px;
    width: 0;
    background-color: transparent;
    transition: width 0.3s, background-color 0.3s;
}

.nav-item.active::after,
.nav-item:hover::after {
    width: 100%;
    background-color: #2D8DD2;
}

.nav-link {
    text-decoration: none;
    color: black;
    padding: 15px 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>

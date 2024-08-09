<template>
    <transition name="dropdown">
        <div v-if="isVisible" class="submenu">
            <div class="submenu-header">
                {{ title }}
            </div>
            <div class="submenu-content">
                <RouterLink v-for="subMenu in subMenus" :key="subMenu.name" :to="{ name: subMenu.name }"
                    class="submenu-item">
                    {{ subMenu.title }}
                </RouterLink>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue';

interface SubMenu {
    title: string;
    name: string;
}

const props = defineProps<{
    title: string;
    subMenus: SubMenu[];
    isVisible: boolean;
}>();
</script>

<style scoped>
.submenu {
  position: absolute;
  overflow-x: hidden;
  top: 70px;
  left: 0;
  right: 0;
  width: 100vw;
  min-height: 20vh;
  backdrop-filter: blur(10px);
  /* 背景模糊效果 */
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 10;
  cursor: default;
  background-color: rgba(212, 217, 238, 0.287);
}

.submenu-header {
  flex: 2;
  padding: 16px;
  height: 100%;
  text-align: right;
  align-self: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
}

.submenu-content {
  flex: 3;
  padding: 16px;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(99, 106, 184, 0.75);
}

.submenu-item {
  position: relative;
  margin-left: 8px;
  padding: 8px 4px;
  font-size: 1.1rem;
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;
}

.submenu-item::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #a9becd;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.submenu-item:hover::before {
  visibility: visible;
  width: 200px;
}

.submenu-item:hover {
  color: #f3fafc;
  font-weight: bold;
}
</style>
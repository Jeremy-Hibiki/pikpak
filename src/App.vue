<script setup lang="ts">
import {
  GlobalThemeOverrides,
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider,
  dateZhCN,
  zhCN,
} from 'naive-ui';
import { onMounted, ref } from 'vue';
import MessageContent from './components/MessageContent.vue';
import { proxy } from './config';
const themeOverrides = ref<GlobalThemeOverrides>({
  common: {
    primaryColor: '#306eff',
    hoverColor: '#306eff',
    primaryColorHover: '#306eff',
    heightMedium: '42px',
  },
  Layout: {
    siderColor: '#f5f5f6',
  },
  Breadcrumb: {
    fontSize: '16px',
  },
  Dropdown: {
    optionTextColorHover: '#fff',
  },
  InternalSelectMenu: {
    optionTextColorActive: '#fff',
  },
  Upload: {
    itemColorHover: '#F3F3F5FF',
    itemTextColorSuccess: '#18A058FF',
  },
});
onMounted(() => {
  const isSettingProxy = localStorage.getItem('isSettingProxy');
  if (!isSettingProxy) {
    localStorage.setItem('proxy', JSON.stringify(proxy));
  }
});
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <router-view></router-view>
          <message-content />
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style></style>

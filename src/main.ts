import elementResizeDetectorMaker from 'element-resize-detector';
import { createApp } from 'vue';
import cnzzAnalytics from 'vue-cnzz-analytics';
import App from './App.vue';
import router from './router';
import http from './utils/axios';

const app = createApp(App);
app.directive('resize', {
  mounted(el, binding, vnode) {
    el.$$erd = elementResizeDetectorMaker({
      strategy: 'scroll',
    });
    el.$$erd.listenTo({}, el, (element: HTMLElement) => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      el.$$time && clearTimeout(el.$$time);
      el.$$time = setTimeout(() => {
        vnode.props?.onResize(width, height);
      }, 300);
    });
  },
  unmounted(el) {
    el.$$erd && el.$$erd.uninstall(el);
    el.$$time && clearTimeout(el.$$time);
  },
});
app.config.globalProperties.$http = http;
app.use(router);
app.use(cnzzAnalytics, {
  router: router,
  siteIdList: [1280680983],
});
app.mount('#app');

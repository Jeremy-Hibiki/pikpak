<template>
  <video
    v-if="videoInfo.mime_type.indexOf('video') !== -1"
    ref="playerRef"
    :data-poster="videoInfo.thumbnail_link"
  >
    <template v-for="(item, key) in videoInfo.medias" :key="key">
      <source
        :src="item?.link.url"
        :type="videoInfo.mime_type === 'video/x-matroska' ? 'video/webm' : videoInfo.mime_type"
        :size="list[item.resolution_name]"
      />
    </template>
  </video>
  <audio v-else-if="videoInfo.mime_type.indexOf('audio') !== -1" ref="playerRef">
    <source :src="videoInfo.web_content_link" />
  </audio>
</template>
<script setup lang="ts">
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { computed, onMounted, ref } from 'vue';
const props = defineProps<{
  video: {
    [key: string]: any;
  };
}>();
const videoInfo = computed(() => {
  return props.video;
});
const list: {
  [key: string]: number;
} = {
  '4K': 2160,
  '1080P': 1080,
  '720P': 720,
  '480P': 480,
};
const playerRef = ref();
const player = ref();
const initPlayer = () => {
  player.value = new Plyr(playerRef.value, {
    debug: true,
  });
};
onMounted(initPlayer);
</script>

<style>
.plyr--video {
  height: 100%;
}
.plyr--audio {
  margin-top: 320px;
}
.plyr video {
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>

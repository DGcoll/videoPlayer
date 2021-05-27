<template>
      <div class="card-video" v-if="video">
        <h1 class="title-card" :style="'color:'+color">{{postTitle}}</h1>
        <div class="ratio-video"  v-aspect-ratio="aspectRatio">
          <vue-plyr  ref="player" >
              <video  controls crossorigin playsinline :src="video"  width="100" height="100" ></video>
          </vue-plyr>
        </div>
        <div class="cn-ratio">
          <label v-for="(value, index) in valuesRatio" :key="index" :class="'radio-'+index">
                <input
                  v-model="aspectRatio"
                  type="radio"
                  :value="value.value"
                  name="value"
                />
          </label>
        </div>
      </div>
</template>
<script>
export default {
  name: "videoPlayer",
  props: {
    postTitle : null, 
    video: null, 
    color: null, 
  },
    data () {
    return {
      aspectRatio: '4:3',
      valuesRatio: [
          {
            value: '4:3',
          },
          {
            value: '16:9',
          },
          {
            value: '1:1',
          },
      ], 
   }}
};
</script>

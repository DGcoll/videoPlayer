<template>
  <div class="home">
    <div class="container">
      <form v-if="FormMain" class="uploader-main">
        <div class="divi-file">
            <input type="file"  @change="onFileChange" >
        </div>
          <div class="title-video">
            <verte v-model="getDataVideo.color" ></verte>
            <input type="text" v-model="title" class="text-input" placeholder="Title" />
            <button  @click="uploadFile" class="upload-btn">Upload</button>
          </div>
        </form>
        <div v-if="setDataVideo.videoPreview " class="video-inner">
          <div class="rv-video-b"  @click="removeVideo"></div>
          <videoPlayer  :video="setDataVideo.videoPreview" :postTitle="setDataVideo.title"  :color="setDataVideo.color"/>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import videoPlayer from "../components/videoPlayer";

export default {
  name: "App",
  components: {
    videoPlayer,
  },
   
    data () {
    return {
      title: "",
      formData: " ",
      imagePreview: null,
      FormMain: true,
      getDataVideo:{
        title: null,
        videoPreview: null,
        color: "#f0f",
      },

      setDataVideo:{
        title: null,
        videoPreview: null,
        color: null,
      },
    };
  },

  methods: {
    uploadFile () {
      if(this.imagePreview && this.title){
          this.setDataVideo.videoPreview = this.imagePreview;
          this.setDataVideo.title = this.title;
          this.setDataVideo.color = this.getDataVideo.color;
          this.FormMain = false;
      }else if(!this.title){
          alert("Plz fill title")  
      }else if(!this.imagePreview){
          alert("Plz Chose Video")  
      }

    },

    onFileChange(e){
      this.formData = e.target.files[0];
      if(e.target.files[0].type != "video/mp4"){
         alert("Plz chose MP4") 
      }else{
          let reader  = new FileReader();
          reader.addEventListener("load", function () {
              this.imagePreview = reader.result;
          }.bind(this), false);
          reader.readAsDataURL( this.formData);
      }

    },
    removeVideo(){
      this.setDataVideo = {};
      this.FormMain= true;
    }

  }
};
</script>

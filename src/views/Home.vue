<template>
  <div class="home">
    <div class="container">

        <!-- Upload Control -->
       <form v-if="FormMain" class="uploader-main">
        <div class="divi-file">
            <input type="file"  @change="onFileChange" >
        </div>
          <div class="title-video">
            <verte v-model="getColor" ></verte>
            <input type="text" v-model="title" class="text-input" placeholder="Title" />
            <button  @click="uploadFile" class="upload-btn">Upload</button>
          </div>
        </form>
        
        <!--videoPlayer Component  -->
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
      getColor: "#f0f",
      
      // Data 
      setDataVideo:{
        title: null,
        videoPreview: null,
        color: null,
      },
    };
  },

  methods: {

    // Upload File
    uploadFile () {
      if(this.imagePreview && this.title){
          this.setDataVideo.videoPreview = this.imagePreview;
          this.setDataVideo.title = this.title;
          this.setDataVideo.color = this.getColor;
          this.FormMain = false;
      }else if(!this.title){
          alert("Plz fill title")  
      }else if(!this.imagePreview){
          alert("Plz Chose Video")  
      }
    },

    // Event SRC File 
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

    // Event Remove Video
    removeVideo(){
      this.setDataVideo = {};
      this.FormMain= true;
    }

  }
};
</script>

<template>
    <div>
        <Breadcrumb :pageName="pageName" />
        <div class="content-us section">
            <div class="container">
            <div class="main-head">
                <h2>Contact Us</h2>
                <p>
                    Dummy text is also used to demonstrate the appearance of different<br>
                    typefaces and layouts
                </p>
            </div>
            <div class="row">

                <div class="col-md-4">
                <div class="link-pox">
                    <b-card-body class="text-center">
                            <h1><b-icon icon="envelope"></b-icon></h1> 
                            <p>Email : playdo03@gmail.com</p>
                            <p>Web: www.rockstheme.com</p>
                    </b-card-body>
                </div>
                </div><!-- End screen col-md-4 -->
                <div class="col-md-4">
                <div class="link-pox">
                    <b-card-body class="text-center">
                            <h1><b-icon icon="link"></b-icon></h1> 
                            <p>Facebook :playdo032-gbook</p>
                            <p>Twiter:playdo032-tgames</p>
                    </b-card-body>
                </div>
                </div><!-- End screen col-md-4 -->
                <div class="col-md-4">
                <div class="link-pox">
                    <b-card-body class="text-center">
                            <h1><b-icon icon="map"></b-icon></h1> 
                            <p>Location :street-32, Road-23</p>
                            <p>House-10, Newyork city</p>
                    </b-card-body>
                </div>
                </div><!-- End screen col-md-4 -->
                
            </div>
            </div>
        </div>
<!-- ##### sec-playing ##### --> 
  <div class="sec-playing section form-contant">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="kung-img"><img src="./../assets/img/about-area.jpg"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content text-left">
                <b-form @submit="onSubmit" @reset="onReset">
                <div class="row">
                    <div class="col">
                        <b-form-group id="input-group-1" label-for="input-1">
                            <b-form-input id="input-1" v-model="form.name" required placeholder="Enter name"></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col">
                        <b-form-group id="input-group-2" label-for="input-2">
                            <b-form-input id="input-2" v-model="form.email" required placeholder="Enter Email"></b-form-input>
                        </b-form-group>
                    </div>
                </div>
                <b-form-group id="input-group-3" label-for="input-3">
                    <b-form-input id="input-3" v-model="form.subject" required placeholder="subject"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label-for="input-4">
                    <b-form-textarea id="input-4" v-model="form.massage" required placeholder="massage"></b-form-textarea>
                </b-form-group>
                <b-button variant="btn mainBtn">Submit</b-button>
                </b-form>
            </div>
          </div>
        </div>
      </div>
  </div>
<!-- ##### sec-playing ##### -->
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          subject: '',
          massage: '',
        },
        pageName:'Contact Us'
      }
    },
    components: {
        Breadcrumb
    }
}
</script>
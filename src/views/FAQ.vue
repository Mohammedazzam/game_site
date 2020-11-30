<template>
    <div class="faq">
        <Breadcrumb :pageName="pageName" />
        <div class="container quesition text-left">
            <div class="main-head">
                <h2>Important FAQ</h2>
                <p>
                    Dummy text is also used to demonstrate the appearance of different<br>
                    typefaces and layouts
                </p>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <!-- ##### collection 1 ##### -->
                    <div class="collection-title">01. Playdo member</div>
                    <div class="quesition-box" v-for="(question,index) in questions" :key="index">
                            <div class="question-title" @click="question.open = !question.open">
                            {{ question.title }}
                            <div class="icon float-right">
                                <b-icon v-if="question.open" icon="book"></b-icon>
                                <b-icon v-else icon="envelope"></b-icon>
                            </div> 
                        </div>
                        <transition name="slide-fade">
                            <div class="question-reply" v-show="question.open">{{ question.reply }}</div>
                        </transition>
                    </div>
                <!-- ##### collection 1 ##### -->
                <!-- ##### collection 2 ##### -->
                    <div class="collection-title">02. Competition Player</div>
                    <div class="quesition-box" v-for="(question,index) in questions" :key="index">
                            <div class="question-title" @click="question.open = !question.open">
                            {{ question.title }}
                            <div class="icon float-right">
                                <b-icon v-if="question.open" icon="book"></b-icon>
                                <b-icon v-else icon="envelope"></b-icon>
                            </div> 
                        </div>
                        <transition name="slide-fade">
                            <div class="question-reply" v-show="question.open">{{ question.reply }}</div>
                        </transition>
                    </div>
                <!-- ##### collection 2 ##### -->
                <!-- ##### collection 3 ##### -->
                    <div class="collection-title">03. Payments System</div>
                    <div class="quesition-box" v-for="(question,index) in questions" :key="index">
                            <div class="question-title" @click="question.open = !question.open">
                            {{ question.title }}
                            <div class="icon float-right">
                                <b-icon v-if="question.open" icon="book"></b-icon>
                                <b-icon v-else icon="envelope"></b-icon>
                            </div> 
                        </div>
                        <transition name="slide-fade">
                            <div class="question-reply" v-show="question.open">{{ question.reply }}</div>
                        </transition>
                    </div>
                <!-- ##### collection 3 ##### -->
                </div>
                <div class="col-md-4">
                    <Side-Bar />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import SideBar from '@/components/Side-Bar.vue'
var questions = {
    "Question One":{
         open:true,
         title:"Redug Lefes dolor sit amet.",
         reply:"Playdo Studios has been creating innovative games since 2003. We offer our clients professional development services, ranging from concept prototyping."
    },
    "Question Tow":{
         open:false,
         title:"Laboriosam maiores alias accusamus",
         reply:"Playdo Studios has been creating innovative games since 2003. We offer our clients professional development services, ranging from concept prototyping."
    },
    "Question Three":{
         open:false,
         title:"Mollitia dolore magnam quidem repellat",
         reply:"Playdo Studios has been creating innovative games since 2003. We offer our clients professional development services, ranging from concept prototyping."
    },
    "Question Four":{
         open:false,
         title:"Quas mollitia dolore magnam",
         reply:"Playdo Studios has been creating innovative games since 2003. We offer our clients professional development services, ranging from concept prototyping."
    },
    "Question Five":{
         open:false,
         title:"Five:bla bla bla",
         reply:"Playdo Studios has been creating innovative games since 2003. We offer our clients professional development services, ranging from concept prototyping."
    }
}
export default {
    data() {
      return {
        questions:questions,
        pageName:'FAQ'
      }
    },
    components: {
        Breadcrumb,
        SideBar
    }
}
</script>
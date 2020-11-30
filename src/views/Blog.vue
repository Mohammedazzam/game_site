<template>
    <div class="blog">
        <Breadcrumb :pageName="pageName" />
        <div class="container quesition text-left">
            <div class="main-head">
                <h2>Games World News</h2>
                <p>
                    Dummy text is also used to demonstrate the appearance of different<br>
                    typefaces and layouts
                </p>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <!-- ##### post-news ##### -->
                        <div class="post-news">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="post">
                                        <b-card-header>
                                            <img src="./../assets/img/post_1.jpg" alt="" srcset="">
                                        </b-card-header>
                                        <b-card-body class="text-left">
                                            <b-card-title>
                                            <a href="#">Creative games design clients response is better</a>
                                            </b-card-title>
                                        <ul class="list-unstyled">
                                            <li><b-icon icon="person-fill"></b-icon><span>Admin</span></li>
                                            <li><b-icon icon="calendar4-week"></b-icon><span>20 july, 2019</span></li>
                                            <li><b-icon icon="chat-text"></b-icon><span>78</span> </li>
                                        </ul>
                                        </b-card-body>
                                    </div>
                                </div><!-- End screen col-md-4 -->
                                <div class="col-md-4">
                                    <div class="post">
                                        <b-card-header>
                                            <img src="./../assets/img/post_2.jpg" alt="" srcset="">
                                        </b-card-header>
                                        <b-card-body class="text-left">
                                            <b-card-title>
                                            <a href="#">Creative games design clients response is better</a>
                                            </b-card-title>
                                        <ul class="list-unstyled">
                                            <li><b-icon icon="person-fill"></b-icon><span>Admin</span></li>
                                            <li><b-icon icon="calendar4-week"></b-icon><span>20 july, 2019</span></li>
                                            <li><b-icon icon="chat-text"></b-icon><span>11</span> </li>
                                        </ul>
                                        </b-card-body>
                                    </div>
                                </div><!-- End screen col-md-4 -->
                                <div class="col-md-4">
                                    <div class="post">
                                        <b-card-header>
                                            <img src="./../assets/img/post_3.jpg" alt="" srcset="">
                                        </b-card-header>
                                        <b-card-body class="text-left">
                                            <b-card-title>
                                            <a href="#">Creative games design clients response is better</a>
                                            </b-card-title>
                                        <ul class="list-unstyled">
                                            <li><b-icon icon="person-fill"></b-icon><span>Admin</span></li>
                                            <li><b-icon icon="calendar4-week"></b-icon><span>20 july, 2019</span></li>
                                            <li><b-icon icon="chat-text"></b-icon><span>62</span> </li>
                                        </ul>
                                        </b-card-body>
                                    </div>
                                </div><!-- End screen col-md-4 -->
                                <div class="col-md-4">
                                    <div class="post">
                                        <b-card-header>
                                            <img src="./../assets/img/game_4.jpg" alt="" srcset="">
                                        </b-card-header>
                                        <b-card-body class="text-left">
                                            <b-card-title>
                                            <a href="#">Creative games design clients response is better</a>
                                            </b-card-title>
                                        <ul class="list-unstyled">
                                            <li><b-icon icon="person-fill"></b-icon><span>Admin</span></li>
                                            <li><b-icon icon="calendar4-week"></b-icon><span>20 july, 2019</span></li>
                                            <li><b-icon icon="chat-text"></b-icon><span>10</span> </li>
                                        </ul>
                                        </b-card-body>
                                    </div>
                                </div><!-- End screen col-md-4 -->
                                <div class="col-md-4">
                                    <div class="post">
                                        <b-card-header>
                                            <img src="./../assets/img/post_5.jpg" alt="" srcset="">
                                        </b-card-header>
                                        <b-card-body class="text-left">
                                            <b-card-title>
                                            <a href="#">Creative games design clients response is better</a>
                                            </b-card-title>
                                        <ul class="list-unstyled">
                                            <li><b-icon icon="person-fill"></b-icon><span>Admin</span></li>
                                            <li><b-icon icon="calendar4-week"></b-icon><span>20 july, 2019</span></li>
                                            <li><b-icon icon="chat-text"></b-icon><span>04</span> </li>
                                        </ul>
                                        </b-card-body>
                                    </div>
                                </div><!-- End screen col-md-4 -->
                                <div class="col-md-4">
                                    <div class="post">
                                        <b-card-header>
                                            <img src="./../assets/img/game_4.jpg" alt="" srcset="">
                                        </b-card-header>
                                        <b-card-body class="text-left">
                                            <b-card-title>
                                            <a href="#">Creative games design clients response is better</a>
                                            </b-card-title>
                                        <ul class="list-unstyled">
                                            <li><b-icon icon="person-fill"></b-icon><span>Admin</span></li>
                                            <li><b-icon icon="calendar4-week"></b-icon><span>20 july, 2019</span></li>
                                            <li><b-icon icon="chat-text"></b-icon><span>13</span> </li>
                                        </ul>
                                        </b-card-body>
                                    </div>
                                </div><!-- End screen col-md-4 -->
                            </div>
                        </div>
                    <!-- ##### post-news ##### -->
                </div>
            </div>
            <!-- ##### pagination ##### -->
            <div class="pagination">
                <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination>
            </div><!-- ##### pagination ##### -->
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    data() {
      return {
        pageName:'BLOG',
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    components: {
        Breadcrumb,
    },
}
</script>
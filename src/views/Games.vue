<template>
    <div class="games">
        <Breadcrumb :pageName="pageName" />
        <!-- ##### online-game ##### -->
        <div class="container quesition text-center">
            <div class="main-head">
                <h2>Online Games</h2>
                <p>
                    Dummy text is also used to demonstrate the appearance of different<br>
                    typefaces and layouts
                </p>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <!-- ##### post-news ##### -->
                        <div class="online-game">
                            <div class="row">
                            <div class="col-md-4">
                                <div class="box">
                                    <h4>Win Award</h4>
                                    <div class="game-img"><img src="./../assets/img/g1.png"/></div>
                                    <button class="mainBtn btn">Play Now</button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                    <h4>Win Award</h4>
                                    <div class="game-img"><img src="./../assets/img/g2.png"/></div>
                                    <button class="mainBtn btn">Play Now</button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                    <h4>Win Award</h4>
                                    <div class="game-img"><img src="./../assets/img/g3.png"/></div>
                                    <button class="mainBtn btn">Play Now</button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                    <h4>Win Award</h4>
                                    <div class="game-img"><img src="./../assets/img/g4.png"/></div>
                                    <button class="mainBtn btn">Play Now</button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                    <h4>Win Award</h4>
                                    <div class="game-img"><img src="./../assets/img/g5.png"/></div>
                                    <button class="mainBtn btn">Play Now</button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="box">
                                    <h4>Win Award</h4>
                                    <div class="game-img"><img src="./../assets/img/g1.png"/></div>
                                    <button class="mainBtn btn">Play Now</button>
                                </div>
                            </div>
                                
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
        <!-- ##### online-game ##### -->
        <!-- games-play --> 
        <div class="games-play section">
            <div class="container">
                <div class="main-head">
                    <h2>Games Play</h2>
                    <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
                </div>
                <div>
                <!-- ######### --> 
                    <ul class="nav tab-nav">
                        <li class="col" @click="activeTabes = '1'" :class="[activeTabes === '1' ? 'active' : '']">
                            <span>Fierce Rem</span><span>BT- 0.0234</span>
                        </li>
                        <li class="col" @click="activeTabes = '2'" :class="[activeTabes === '2' ? 'active' : '']">
                            <span>Fierce Rem</span><span>BT- 0.0234</span>
                        </li>
                        <li class="col" @click="activeTabes = '3'" :class="[activeTabes === '3' ? 'active' : '']">
                            <span>Fierce Rem</span><span>BT- 0.0234</span>
                        </li>
                    </ul>
                    <div class="tabs-content">
                        <div class="content-one" v-if="activeTabes === '1'">
                            <div class="row">
                            <div class="col-md-4">
                                <ul class="list-unstyled player-list">
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_3.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_1.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player -->
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_4.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player -->
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_2.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player -->
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_5.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player -->
                                </ul>
                            </div><!-- End col --> 
                            <div class="col">
                                <div class="game-img"><img src="./../assets/img/game_3.jpg"/></div>
                            </div>
                            </div><!-- End row --> 
                        </div>
                        <div class="content-Tow" v-if="activeTabes === '2'">
                        <div class="row">
                            <div class="col-md-4">
                                <ul class="list-unstyled player-list">
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_2.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_3.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player -->
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_1.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_4.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_5.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                </ul>
                            </div><!-- End col --> 
                            <div class="col">
                                <div class="game-img"><img src="./../assets/img/game_2.jpg"/></div>
                            </div>
                            </div><!-- End row --> 
                        </div>
                        <div class="content-Three" v-if="activeTabes === '3'">
                            <div class="row">
                            <div class="col-md-4">
                                <ul class="list-unstyled player-list">
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_5.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_1.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_3.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_2.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                <li>
                                    <div class="row">
                                    <div class="col-3"><img src="./../assets/img/player_4.png"/></div>
                                    <div class="col-9 text-left"><span>Ragner lorth</span><span>BT- 0.0234</span></div>
                                    </div>
                                </li><!-- End li player --> 
                                </ul>
                            </div><!-- End col --> 
                            <div class="col">
                                <div class="game-img"><img src="./../assets/img/game_1.jpg"/></div>
                            </div>
                            </div><!-- End row --> 
                        </div>
                    </div>
                <!-- ######### --> 
                </div>
            </div>
        </div>
        <!-- games-play --> 
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    data() {
      return {
        activeTabes:'1',
        pageName:'Games',
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
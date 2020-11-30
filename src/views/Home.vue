<template>
<div class="home">

  <div class="main-slider">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="box-about text-left">
              <h1> PLAYING ONLINE GAMES <span class="mainColor">WIN REWARD</span></h1>
                <p>We develop effective plans to move your customers behaviour. customer can be alwayes his profit.</p>
                <button class="mainBtn btn">Get Started</button>
            </div>
          </div>
          <div class="col-md-6"><img src="./../assets/img/bg-slider.png"/></div>
        </div>
      </div>
    </div>
  </div>

  <div class="our-servers section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="box-content">
            <div class="row">
              <div class="col-4"><img src="./../assets/img/achieve_1.png"/></div>
              <div class="col-8">
                <h3>1200+</h3>
                <p class="green">LIVE ONLINE</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box-content">
            <div class="row">
              <div class="col-4"><img src="./../assets/img/achieve_2.png"/></div>
              <div class="col-8">
                <h3>1200+</h3>
                <p class="yellow">LIVE ONLINE</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box-content">
            <div class="row">
              <div class="col-4"><img src="./../assets/img/achieve_3.png"/></div>
              <div class="col-8">
                <h3>1200+</h3>
                <p class="red">LIVE ONLINE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        
  <!-- ##### Live Online Game ##### -->
  <div class="about-area section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="about-img"><img src="./../assets/img/about-area.jpg"/>
            <p class="text-center">If you need know more about play <a href="#">Click here</a></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box-content">
            <div class="row">
              <div class="col-4"><img src="./../assets/img/ab-icon.png"/></div>
              <div class="col-8">
                <h4>Live Online Game</h4>
                <p>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then.</p>
              </div>
            </div>
          </div>
          <div class="box-content">
            <div class="row">
              <div class="col-4"><img src="./../assets/img/ab-icon2.png"/></div>
              <div class="col-8">
                <h4>Instant Bonus</h4>
                <p>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then.</p>
              </div>
            </div>
          </div>
          <div class="box-content">
            <div class="row">
              <div class="col-4"><img src="./../assets/img/ab-icon6.png"/></div>
              <div class="col-8">
                <h4>Live Support</h4>
                <p>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ##### Live Online Game ##### -->
  
  <div class="online-game section">
    <div class="container">
      <div class="main-head">
        <h2>Online Games</h2>
        <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
      </div>
      <carousel :perPage="4" :loop="true" :autoplay="true">
        <slide>
          <div class="box">
            <h4>Win Award</h4>
            <div class="game-img"><img src="./../assets/img/g1.png"/></div>
            <button class="mainBtn btn">Play Now</button>
          </div>
        </slide>
        <slide>
          <div class="box">
            <h4>Win Award</h4>
            <div class="game-img"><img src="./../assets/img/g2.png"/></div>
            <button class="mainBtn btn">Play Now</button>
          </div>
        </slide>
        <slide>
          <div class="box">
            <h4>Win Award</h4>
            <div class="game-img"><img src="./../assets/img/g3.png"/></div>
            <button class="mainBtn btn">Play Now</button>
          </div>
        </slide>
        <slide>
          <div class="box">
            <h4>Win Award</h4>
            <div class="game-img"><img src="./../assets/img/g4.png"/></div>
            <button class="mainBtn btn">Play Now</button>
          </div>
        </slide>
        <slide>
          <div class="box">
            <h4>Win Award</h4>
            <div class="game-img"><img src="./../assets/img/g5.png"/></div>
            <button class="mainBtn btn">Play Now</button>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
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
<!-- ######### --> 
  <div class="games-history">
  <div class="layout section">
    <div class="container">
      <div class="main-head">
        <h2>Games History</h2>
        <p>
          Dummy text is also used to demonstrate the appearance of different<br>
          typefaces and layouts
        </p>
      </div>
       <div class="data-table">
          <table class="table table-striped table-dark">
            <thead>
              <tr >
                <th scope="col">NAME</th>
                <th scope="col">CODE ID</th>
                <th scope="col">GAMES</th>
                <th scope="col">LEVEL</th>
                <th scope="col">REWARD</th>
                <th scope="col">GAMES ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="text-left">
                  <div class="row">
                    <div class="col-3"><img src="../assets/img/player_1.png" alt="" srcset=""></div>
                    <div class="col">Ragner Lorth</div>
                  </div>
                </th>
                <td>EmI-76076</td>
                <td>Redline</td>
                <td>Level-122</td>
                <td>00.83 BTC</td>
                <td>BTC-0.02</td>
              </tr><!-- End table-row-->
              <tr>
                <th scope="row" class="text-left">
                  <div class="row">
                    <div class="col-3"><img src="../assets/img/player_2.png" alt="" srcset=""></div>
                    <div class="col">Jecky chen</div>
                  </div>
                </th>
                <td>EmI-76076</td>
                <td>Redline</td>
                <td>Level-122</td>
                <td>00.83 BTC</td>
                <td>BTC-0.02</td>
              </tr><!-- End table-row-->
              <tr>
                <th scope="row" class="text-left">
                  <div class="row">
                    <div class="col-3"><img src="../assets/img/player_3.png" alt="" srcset=""></div>
                    <div class="col">Junior mlind</div>
                  </div>
                </th>
                <td>EmI-76076</td>
                <td>Redline</td>
                <td>Level-122</td>
                <td>00.83 BTC</td>
                <td>BTC-0.02</td>
              </tr><!-- End table-row-->
              <tr>
                <th scope="row" class="text-left">
                  <div class="row">
                    <div class="col-3"><img src="../assets/img/player_4.png" alt="" srcset=""></div>
                    <div class="col">Andrew kolin</div>
                  </div>
                </th>
                <td>EmI-76076</td>
                <td>Redline</td>
                <td>Level-122</td>
                <td>00.83 BTC</td>
                <td>BTC-0.02</td>
              </tr><!-- End table-row-->
              <tr>
                <th scope="row" class="text-left">
                  <div class="row">
                    <div class="col-3"><img src="../assets/img/player_5.png" alt="" srcset=""></div>
                    <div class="col">Anjel loyel</div>
                  </div>
                </th>
                <td>EmI-76076</td>
                <td>Redline</td>
                <td>Level-122</td>
                <td>00.83 BTC</td>
                <td>BTC-0.02</td>
              </tr><!-- End table-row-->
              <tr>
                <th scope="row" class="text-left">
                  <div class="row">
                    <div class="col-3"><img src="../assets/img/player_6.png" alt="" srcset=""></div>
                    <div class="col">Jenefer july</div>
                  </div>
                </th>
                <td>EmI-76076</td>
                <td>Redline</td>
                <td>Level-122</td>
                <td>00.83 BTC</td>
                <td>BTC-0.02</td>
              </tr><!-- End table-row-->
            </tbody>
          </table>
      </div>

    </div>
  </div><!-- End layout-->
  </div>

<!-- ##### games-referral ##### --> 
  <div class="games-referral section">
    <div class="container">
      <div class="main-head">
        <h2>Referral Bonus Level</h2>
        <p>
          Help agencies to define their new business objectives and then create<br>
          professional software.
        </p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="box">
            <h3 class="content">
              <span class="icon yellow">
                <sup>03</sup>
                <b-icon icon="box-seam"></b-icon>
              </span>
            </h3>
            <h4>Level 01 Instant 10%</h4>
            <h4> Bonus Reward</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <h3 class="content">
              <span class="icon blue">
                <sup>3</sup>
                <b-icon icon="layers"></b-icon>
              </span>
            </h3>
            <h4>Level 02 Instant 20%</h4>
            <h4>Bonus Reward</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <h3 class="content">
              <span class="icon green">
                <sup>3</sup>
                <b-icon icon="bar-chart-line-fill"></b-icon>
              </span>
            </h3>
            <h4>Level 03 Instant 30%</h4>
            <h4> Bonus Reward</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- ##### games-referral ##### --> 

<!-- ##### sec-playing ##### --> 
  <div class="sec-playing section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="kung-img"><img src="./../assets/img/about-area.jpg"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content text-left">
              <h2>Playing games winning instant award and Bonus</h2>
              <p>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
              <ul class="list-unstyled features">
                <li>
                  <b-icon icon="check-circle" class="rounded-circle bg-danger " variant="light"></b-icon>
                  <h4>Innovation idea latest business tecnology</h4>
                </li>
                <li>
                  <b-icon icon="check-circle" class="rounded-circle bg-danger " variant="light"></b-icon>
                  <h4>Digital content marketing online clients plateform</h4>
                </li>
                <li>
                  <b-icon icon="check-circle" class="rounded-circle bg-danger " variant="light"></b-icon>
                  <h4>Safe secure services for you online email account</h4>
                </li>
              </ul>
              <a class="mainBtn btn" href="#">Signup today</a>
            </div>
          </div>
        </div>
      </div>
  </div>
<!-- ##### sec-playing ##### -->
<!-- ##### post-news ##### -->
<div class="post-news section">
    <div class="container">
      <div class="main-head">
        <h2>Games World News</h2>
        <p>
          Dummy text is also used to demonstrate the appearance of different<br>
          typefaces and layouts
        </p>
      </div>
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
  </div>
<!-- ##### post-news ##### -->
<!-- ######### -->
<!-- ######### --> 
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
        activeTabes:'1',
        /////////
        items: [
          { NAME: 'Dickerson',CODEID:'EmI-76076',GAMES:'Redline', last_name: 'Macdonald' },
          { NAME: 'Larsen',CODEID:'EmI-76076',GAMES:'Danger war', last_name: 'Shaw' },
          { NAME: 'Geneva',CODEID:'EmI-76076',GAMES:'Redline', last_name: 'Wilson' },
          { NAME: 'Jami',CODEID:'EmI-76076',GAMES:'Redline', last_name: 'Carney' }
        ]
    }
  }
  
}
</script>

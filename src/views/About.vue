<template>
    <div class="about-page">
        <Breadcrumb :pageName="pageName" />
        <!-- ##### online-game ##### -->
          <div class="starter">
            <div class="container">
                <div class="main-head">
                    <h2>How To Start</h2>
                    <p>
                        Help agencies to define their new business objectives and then create professional software.
                    </p>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="box">
                      <h2>01</h2>
                      <h4>Get access</h4>
                      <p>Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. Agencies to define their new business objectives and then create</p>
                    </div>
                  </div><!-- End Col -->
                  <div class="col-md-4">
                    <div class="box">
                      <h2>02</h2>
                      <h4>Enter games</h4>
                      <p>Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. Agencies to define their new business objectives and then create</p>
                    </div>
                  </div><!-- End Col -->
                  <div class="col-md-4">
                    <div class="box">
                      <h2>03</h2>
                      <h4>Win Award</h4>
                      <p>Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. Agencies to define their new business objectives and then create</p>
                    </div>
                  </div><!-- End Col -->
                </div>
            </div>
          </div>
        <!-- ##### online-game ##### -->

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

        
  <!-- ##### games-referral ##### --> 
    <div class="games-referral">
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

  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    data() {
      return {
        pageName:'About',
      }
    },
    computed: {},
    components: {
        Breadcrumb,
    },
}
</script>
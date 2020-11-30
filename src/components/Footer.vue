<template>
    <div class="footer text-left">
     <div class="container">
        <div class="row">
            <div class="col-md-4 d-none d-sm-block box-About-us">
                <h4><img src="../assets/img/NavLogo.png" alt="" srcset=""></h4>
                <p>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a maintains the amount of lines.</p>
                 <form class="form-inline">
                    <div class="input-group">
                        <input type="text" class="form-control mainInput" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                        <div class="input-group-prepend">
                            <button class="input-group-text mainBtn">@</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-2 col-sm-12 links">
                <h4 class="title">GAMES LIST</h4>
                <ul class="list-unstyled">
                    <li v-for="(link,index) in GAMESLIST" :key="index">
                        <a :href="link.url">
                            <b-icon icon="check-circle" class="rounded-circle" variant="light"></b-icon>
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div><!-- End Collection links -->
            <div class="col-md-2 col-sm-12 links">
                <h4 class="title">COMPANY</h4>
                <ul class="list-unstyled">
                    <li v-for="(link,index) in COMPANY" :key="index">
                        <a :href="link.url">
                            <b-icon icon="check-circle" class="rounded-circle" variant="light"></b-icon>
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div><!-- End Collection links -->
            <div class="col-md-2 col-sm-12 links">
                <h4 class="title">ACCOUNT</h4>
                <ul class="list-unstyled">
                    <li v-for="(link,index) in ACCOUNT" :key="index">
                        <a :href="link.url">
                            <b-icon icon="check-circle" class="rounded-circle" variant="light"></b-icon>
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div><!-- End Collection links -->
            <div class="col-md-2 col-sm-12 links">
                <h4 class="title">Support</h4>
                <ul class="list-unstyled">
                    <li v-for="(link,index) in secSuppor" :key="index">
                        <a :href="link.url">
                            <b-icon icon="check-circle" class="rounded-circle" variant="light"></b-icon>
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div><!-- End Collection links -->
        </div>
    </div>
        <!-- -->
        <div class="copy-right text-left">
            <div class="container">
                <p>Copyright &copy; 2020 playdo All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            secSuppor:[
                {name:'Customer Care',url:'#'},
                {name:'Live chat',url:'#'},
                {name:'Notification',url:'#'},
                {name:'Privacy',url:'#'},
                {name:'Terms & Condition',url:'#'},
                {name:'Contact us ',url:'#'}
            ],
            ACCOUNT:[
                {name:'Ripple coin',url:'#'},
                {name:'Bitcoin',url:'#'},
                {name:'Ethireum',url:'#'},
                {name:'Light coin',url:'#'},
                {name:'Coin base',url:'#'},
                {name:'Gold Coin',url:'#'}
            ],
            COMPANY:[
                {name:'Social Media',url:'#'},
                {name:'Transition',url:'#'},
                {name:'Promotion',url:'#'},
                {name:'Events',url:'#'},
                {name:'Services',url:'#'},
                {name:'About us',url:'#'}
            ],
            GAMESLIST:[
                {name:'Dicks game',url:'#'},
                {name:'Lobester',url:'#'},
                {name:'Gangstar',url:'#'},
                {name:'Royal Casino',url:'#'},
                {name:'Align fight',url:'#'},
                {name:'Black night',url:'#'},
            ],
        }
    }
}
</script>
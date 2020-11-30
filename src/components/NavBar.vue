<template>
<div>
<div class="main-top">
	<b-navbar toggleable="lg" type="blue" variant="info" sticky>
		<div class="container">
				<b-navbar-nav class="mr-auto">
					<b-nav-item href="#"><b-icon icon="envelope"></b-icon> info@playdo4.com</b-nav-item>
					<b-nav-item href="#"><b-icon icon="clock"></b-icon> Live support </b-nav-item>
				</b-navbar-nav>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em><img src="../assets/img/america.png" alt="" srcset=""> English</em>
						</template>
						<b-dropdown-item href="#"><img src="../assets/img/Deutsch.png" alt="" srcset=""> Deutsch</b-dropdown-item>
						<b-dropdown-item href="#"><img src="../assets/img/Español.png" alt="" srcset=""> Español</b-dropdown-item>
						<b-dropdown-item href="#"><img src="../assets/img/Français.png" alt="" srcset=""> Français</b-dropdown-item>
						<b-dropdown-item href="#"><img src="../assets/img/arabic.png" alt="" srcset=""> Arabic</b-dropdown-item>
					</b-nav-item-dropdown>
					<b-nav-item href="#"><b-icon icon="person-fill"></b-icon> Login</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</div>
<!-- -->
  <div class="main-header ">
		<b-navbar toggleable="lg" type="dark" variant="info">
			<div class="container">
				<b-navbar-brand href="/"><img src="../assets/img/NavLogo.png" alt="" srcset=""></b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav class="text-right">
					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item href="/">HOME</b-nav-item>
						<b-nav-item href="#">PLAY</b-nav-item>
						<!-- dropdown -->
						<b-nav-item-dropdown text="Games" right>
							<b-dropdown-item href="#/Games">All Games</b-dropdown-item>
							<b-dropdown-item href="#/GamesDetails">Game Details</b-dropdown-item>
						</b-nav-item-dropdown>
						<!-- dropdown -->
						<b-nav-item href="#">LOTTERY</b-nav-item>
						<!-- dropdown -->
						<b-nav-item-dropdown text="PAGES" right>
							<b-dropdown-item href="#/About">About</b-dropdown-item>
							<b-dropdown-item href="#/Contact">Contact</b-dropdown-item>
							<b-dropdown-item href="#/FAQ">FAQ</b-dropdown-item>
							<b-dropdown-item href="#">Team</b-dropdown-item>
						</b-nav-item-dropdown>
						<!-- dropdown -->
						<!-- dropdown -->
						<b-nav-item-dropdown text="BLOG" right>
							<b-dropdown-item href="#/Blog">BLOG Grid</b-dropdown-item>
							<b-dropdown-item href="#">BLOG sideBar</b-dropdown-item>
							<b-dropdown-item href="#">BLOG Details</b-dropdown-item>
						</b-nav-item-dropdown>
						<!-- dropdown -->
						<b-nav-item href="#/Contact">CONTACTS</b-nav-item>
						<b-nav-item href="#" class="nav-mainBtn">JOIN NOW</b-nav-item>
						
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
	</div>
	
<!-- -->
</div>
</template>

<script>
export default {
    data(){
		return{
		}
	},
	methods:{
	}
}

</script>
<style lang="scss" scoped>

</style>
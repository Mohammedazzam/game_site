<template>
    <div class="bread-crump">
        <div class="layout text-left">
            <div class="container">
                <h2>{{pageName}}</h2>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Home',
            href: '#'
          },
          {
            text: this.pageName,
            active: true
          }
        ]
      }
    },
    props:['pageName']
  }
</script>
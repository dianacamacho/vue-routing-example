<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <p>Loaded ID: {{ currentId }}</p>
      <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    // watch: {
    //   '$route'(to, from) {
    //     // to and from are just routes
    //     this.id = to.params.id;
    //   }
    // },
    // could also have used a computed property to keep track of changing route params
    computed: {
      currentId() {
        return this.id = this.$route.params.id;
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push("/");
      }
    }
  }
</script>
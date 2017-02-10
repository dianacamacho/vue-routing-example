<template>
    <div>
      <h3>Edit the User</h3>
      <p>Locale: {{ $route.query.locale }}</p>
      <p>Analytics: {{ $route.query.q }}</p>
      <hr>
      <button @click="checkConfirmation" class="btn btn-primary">Confirm</button>
      <div style="height: 700px"></div>
      <p id="data">Some extra data</p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    methods: {
      checkConfirmation() {
        this.confirmed = true;
        console.log(this.confirmed);
      }
    }
  }
</script>

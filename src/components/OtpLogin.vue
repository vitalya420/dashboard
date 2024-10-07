<script setup>

</script>

<template>
  <div class="text-center">
    <div class="header-container py-2">
      <v-btn
        icon="mdi-arrow-left"
        variant="plain"
        class="back-button"
      />
      <h3 class="text-h6 title align-self-center">
        Confirm authorization
      </h3>
    </div>
    <div class="text-body-2">
      We sent a verification code to +111111 <br>

      Please check your SMS and paste the code below.
    </div>
    <v-sheet color="surface">
      <v-otp-input
        variant="solo"
      />
    </v-sheet>
  </div>
</template>

<style scoped>
.header-container {
  position: relative;
}

.back-button {
  position: absolute;
  left: 10px; /* Position the button 10px from the left */
  //top: 10%; /* Center vertically */

}
</style>
<template>
  <div class="window-ringing">
    <div class="box">
      <div class="text">Call rejected</div>
      <div class="call-button call-button-bottom end-button" @click="$router.push(`/`)">
        <font-awesome-icon icon="fa-solid fa-phone" class="end-icon"/>
      </div>
    </div>
  </div>
</template>
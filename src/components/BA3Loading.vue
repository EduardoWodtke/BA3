<script setup>

</script>

<template>
    <div class="preloader">
      <img src="../assets/r2d2.gif" alt="" class="gif-loader">
    </div>
  </template>
  
  <style scoped>
  .preloader {
    width: 100%;
    height: 100%;
    background-color: #1d0346;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  .gif-loader{
    border-radius: 50%;
    width: 90vh;
  }
  </style>
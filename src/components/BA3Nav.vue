<script setup>

</script>

<template>
  <nav>
    <div id="conteiner">
      <div class="barra-lateral">    
        <div class="barra teto">

        </div>
        <div class="barra">

        </div>
        <div class="barra baixo">

        </div>
      </div>
      <div>
        <img src="../assets/populares.png" alt="">
      </div>
      <div>
        <img src="../assets/lancados.png" alt="">
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/R.0aed9c7a5752863d4ba49539dd072a48?rik=%2b5QnOU08U670FA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-heart-png-transparent%2fwhite-heart-png-transparent-3.png&ehk=gERPhhaF6yO68%2bKAfdwN3fjnoAo8Xu32sLY8c3vH5Y0%3d&risl=&pid=ImgRaw&r=0"
          alt="favoritos">
      </div>
      <div>
        <img src="https://o.remove.bg/downloads/ad13a6c7-ace5-45b8-aaf8-d8e40f39820c/OIP-removebg-preview.png" alt="assitri mais tarde">
      </div>
      <div>
        <img src="https://th.bing.com/th/id/R.b97a1aa3a7e1c62de58febd76728773c?rik=5eVVqkJwrfqfMQ&riu=http%3a%2f%2fwww.icons101.com%2ficon_png%2fsize_512%2fid_67747%2fLaunchpad01.png&ehk=k0ZbrEqId82zS8xIapSReMOfZ%2fsTpUleceXP0OIyJBU%3d&risl=&pid=ImgRaw&r=0" alt="">
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav{
  width: 4%;
  position: absolute;
  top: 0;
}
.barra{
  width: 5vh;
  border-bottom: 5px solid white;
  padding: 0.7vh;
  border-radius: 3px;
} 

.teto{
  margin-top: 1.5vh;
}

.baixo{
  margin-bottom: 5vh;
}

#conteiner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0); 
  height: 100%;
  overflow: hidden;
  /* border-right: 2px solid rgb(65, 65, 65);
 */
}

#conteiner img {
  width: 6vh;
  margin: 1vh;
}
</style>
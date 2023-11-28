<script setup>

</script>

<template>
  <footer>
    <div id="footer">
      <div id="redes-sociais">
        <h1>Contate-nos</h1>
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/819/295/original/whatsapp-icon-transparent-free-png.png"
          alt="" />
        <img
          src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png"
          alt="" />
        <img style="width: 41px" src="https://freepngimg.com/thumb/gmail/66572-google-icons-computer-logo-email-gmail.png"
          alt="" />
      </div>

      <div id="navegacoes">
        <h1>navegações</h1>
        <p>Populares</p>
        <p>Recentes</p>
        <p>Noticias</p>
      </div>

      <div id="info-conta">
        <h1>Conta</h1>
        <p>Login</p>
        <p>Cadastre-se</p>
      </div>

      <div id="termos">
        <h1>Termos de uso</h1>
        <p>Politica de privacidade</p>
        <p>Cookies</p>
        <p>Ajuda</p>
      </div>
    </div>
    <div id="ba3">
      <div>
        <p>©BetterAnime3, LLF</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>

#ba3 {
  display: flex;
  justify-content: center;
  width: 100%;
}

#ba3 div {
  width: 50%;
  border-top: 0.3vh solid white;
  display: flex;
  justify-content: center;
  font-size: 2vh;
}

#footer {
  display: flex;
  justify-content: space-around;
  height: 32vh;
  padding-top:12vh ;
}

footer {
  background: rgb(1, 66, 255);
  background: linear-gradient(0deg,
      rgba(1, 66, 255, 1) 2%,
      rgba(15, 15, 119, 1) 49%,
      rgba(0, 0, 0, 1) 100%);
  color: white;
  width: 100%;
}

#redes-sociais img {
  width: 4.3vh;
  margin: 0px 14px 9px 0px;
}
</style>

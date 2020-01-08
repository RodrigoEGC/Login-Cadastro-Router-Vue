<template>
    <div class="login">
      <h3>Entre</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="Password" v-model="password" placeholder="Password"><br>
      <button v-on:click="signIn">Entrar</button>
      <p>Você já possui uma conta? Você pode criar <router-link to="/sign-up"> uma conta. </router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data: function () {
          return {
            email: "",
            password: ""
          }
        },
      methods: {
        signIn: function () {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) =>{
              this.$router.replace('HelloWorld')
            },
            (err) => {
              alert('Opa! ' + err.message)
            }
          );
        }
      }
    }
</script>

<style scoped>
 .login {
   margin-top: 40px;
 }
  Input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a{
    text-decoration: underline;
    cursor: pointer;
  }

</style>

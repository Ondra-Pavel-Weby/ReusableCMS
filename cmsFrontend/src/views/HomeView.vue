<script setup lang="ts">
const clientName = "Bowling Radava"

</script>

<template>
  <header>
    <h1>{{ clientName }}</h1>
  </header>
  <main>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <div>
      <label for="psw"><b>Password</b></label>
      <input type="checkbox" onclick="myFunction()">Hide
      <input type="password" placeholder="Enter Password" name="psw" required>
    </div>

    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>

    <button type="submit">Login</button>
  </main>
  <footer>
    <a href="/">Ondra & Pavel Weby</a>
  </footer>
</template>

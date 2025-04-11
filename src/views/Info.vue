<template>
  <div class="info-page">
    <div class="about-app">
      <h2>About App</h2>
      <p>
        Planning a trip can be overwhelming, but with TripMaster, organizing your adventures has never been easier. 
        TripMaster is a comprehensive travel planning app designed to simplify every step of your journey—from choosing a destination to packing your bags. 
        Whether you’re a spontaneous explorer or a meticulous planner, this app ensures that you can focus on the excitement of travel rather than the hassle of logistics.
      </p>
    </div>

    <div class="authors">
      <h2>Authors</h2>
      <ul>
        <li>Amanda Miśkiewicz</li>
        <li>Julia Mieszaniec</li>
        <li>Jan Paluch</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.info-page {
  text-align: center;
  padding: 40px;
}

.about-app {
  margin-bottom: 40px;
}

h2 {
  color: #42b883;
  font-size: 2em;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
}

.authors ul {
  list-style-type: none;
  padding: 0;
}

.authors li {
  margin-bottom: 15px;
}

.authors input {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #42b883;
  border-radius: 5px;
  width: 250px;
  margin: 5px 0;
  text-align: center;
}

.authors input::placeholder {
  color: #bbb;
}

.authors input:focus {
  border-color: #358d73;
}
</style>

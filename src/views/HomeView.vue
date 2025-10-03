<template>
  <section class="home">
    <button type="button" class="home__button">خانه</button>
  </section>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.home__button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #1e40af;
  color: #fff;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.home__button:hover {
  background-color: #1d4ed8;
}
</style>

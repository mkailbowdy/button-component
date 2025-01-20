<script setup lang="ts">
</script>

<template>
  <div class="body">

    <header>
      <h1>grid-areas are awesome</h1>
    </header>

    <div class="main-content">
      main content
    </div>

    <div class="sidebar">
      sidebar
    </div>

    <footer>
      footer
    </footer>
  </div>

</template>

<style>

/* basic styling so we can
   see what's going on */

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
}

header,
.main-content,
.sidebar,
footer {
  padding: 2em;
}

header { background: #41D3BD; }
.main-content { background: #DE6449;}
.sidebar { background: #407899;}
footer { background: #694D75;}


/* ======================
   Demo stuff starts here
   ========================*/
.body {
  display:grid;
  grid-template-columns: 1.5em 1fr 1.5em;
  grid-template-areas:
    'header header header'
    '... main ...'
    '... side ...'
    'footer footer footer'
;
}

@media only screen and (min-width: 860px) {
  .body{
    grid-template-columns: 1.5em minmax(400px, 650px) minmax(200px, 350px) 1.5em;
    grid-template-areas:
    'header header header header'
    '... main side ...'
    'footer footer footer footer'

  ;
  }
}

header {
  grid-area: header;
}

.main-content {
  grid-area: main;
}

.sidebar {
  grid-area: side;
}

footer {
  grid-area: footer;
}



</style>

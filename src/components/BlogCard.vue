<script setup lang="ts">

import BadgeComponent from '@/components/BadgeComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <article>
    <div class="featuredImage">
      <img src="../assets/spacejoy.jpg" alt="living room with furniture" />
    </div>
    <div class="article">
      <div class="badge">
        <BadgeComponent status="success">Interior</BadgeComponent>
      </div>
      <div class="content">
        <h3>Top 5 Living Room Inspirations</h3>
        <p>Curated vibrants colors for your living, make it pop & calm in the same time.</p>
      </div>
      <div class="cta">
        <ButtonComponent hierarchy="tertiary" size="linkSize" icon-right>
          Read more
          <template #icon-right>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
          </template>
        </ButtonComponent>
      </div>
    </div>
  </article>

</template>

<style scoped>
h3 {
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #171717;
}
p {
  font-size: 16px;
  line-height: 24px;
  color: #525252;
}
article {
  display: flex;
  flex-direction: column;
  width: 340px;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10);
  overflow: hidden; /* Ensure child elements respect the border radius */
}
img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

.featuredImage {
  display:flex;
  width: 340px;
  height: 288px;
}

.featuredImage img {
  align-self: center;
}

.article{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
  'featuredImage'
  'badge'
  'content'
  'cta'
  ;
  gap:12px;
  background-color: #fff;
  padding: 24px 16px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}
</style>

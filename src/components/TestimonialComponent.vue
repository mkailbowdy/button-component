<script setup lang="ts">
const props = defineProps({
  author: {
    type: String,
    default: 'Anonymous',
    required: false,
  },
  handle: {
    type: String,
    default: '@anonymous',
    required: false,
  },
  img: {
    type: String,
    default: 'https://picsum.photos/200',
    required: false,
  }
})
</script>

<template>
<div class="container">
  <div class="avatar">
    <img :src=props.img alt="author's profile avatar" />
  </div>
  <div class="name">
    <h3>{{props.author}}</h3>
    <small>{{props.handle}}</small>
  </div>
  <div class="comment">
    <slot />
  </div>
</div>
</template>

<style scoped>
image{
  display: block;
  max-width: 100%;
}
.container {
  display:grid;
  grid-template-columns: 48px 1fr;
  grid-template-areas:
    'avatar name'
    'comment comment'
  ;
  color: #525252;
  padding: 24px;
  gap: 1em;
  width: 340px;
  background: #fff;
  box-shadow: 0px 1px 2px -1px rgb(0 0 0 / 0.10), 0px 1px 3px 0 rgb(0 0 0 / 0.10);
  border-radius: 8px;
}
.avatar img{
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.avatar {
  grid-area: avatar;
}
.name{
  grid-area: name;
  display: flex;
  flex-direction: column;
}
.name h3{
  color: #171717;
}
.comment {
  grid-area: comment;
}
</style>

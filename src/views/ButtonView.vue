<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'

</script>
<template>
  <main>
    <section>
    <div class="variation">
      <ButtonComponent size="medium">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="large" icon-left>
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl" icon-right>
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl2">
        Button CTA
      </ButtonComponent>
      <ButtonComponent icon-only size="iconSize"/>
    </div>
    <div class="variation">
      <ButtonComponent size="medium" hierarchy="secondary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="large" icon-left hierarchy="secondary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl" icon-right hierarchy="secondary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl2" hierarchy="secondary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent icon-only size="iconSize" hierarchy="secondary"/>
    </div>
    <div class="variation">
      <ButtonComponent size="medium" hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="large" icon-left hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl" icon-right hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl2" hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent icon-only size="iconSize" hierarchy="tertiary"/>
    </div>
    <div class="variation">
      <ButtonComponent size="iconSize" hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="iconSize" icon-left hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="iconSize" icon-right hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="iconSize" hierarchy="tertiary">
        Button CTA
      </ButtonComponent>
      <ButtonComponent icon-only size="linkSize" hierarchy="tertiary"/>
    </div>
    <div class="variation">
      <ButtonComponent size="linkSize" hierarchy="tertiaryPlain">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="linkSize" icon-left hierarchy="tertiaryPlain">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="linkSize" icon-right hierarchy="tertiaryPlain">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="linkSize" hierarchy="tertiaryPlain">
        Button CTA
      </ButtonComponent>
      <ButtonComponent icon-only size="linkSize" hierarchy="tertiaryPlain"/>
    </div>
    <div class="variation">
      <ButtonComponent size="medium" hierarchy="destructive">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="large" icon-left hierarchy="destructive">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl" icon-right hierarchy="destructive">
        Button CTA
      </ButtonComponent>
      <ButtonComponent size="xl2" hierarchy="destructive">
        Button CTA
      </ButtonComponent>
      <ButtonComponent icon-only size="iconSize" hierarchy="destructive"/>
    </div>
    </section>

  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #e5e7eb;
  gap: 16px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.variation {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>

<template>
  <teleport to="body">
    <transition name="fade">
      <ModalWrapper v-if="isShow" @close-modal="$emit('closeModal')">
        <template #header>Shortcuts</template>
        <template #content>
          <div class="hotkeys">
            <input
              id="hotkeys-input"
              type="text"
              name="hotkeys-input"
              class="hotkeys__input" />
            <div v-for="(hotkey, i) of hotkeys" :key="i" class="hotkeys__item">
              <div class="hotkeys__action">
                <IconEdit class="hotkeys__icon-edit" />
                <span class="hotkeys__action-text">
                  {{ hotkey.description }}
                </span>
              </div>
              <div class="hotkeys__buttons">
                <div class="hotkeys__modifiers">
                  <template v-for="(modifier, j) of hotkey.modifiers" :key="j">
                    <div class="hotkeys__button">{{ modifier }}</div>
                  </template>
                </div>
                <template v-if="hotkey.modifiers.length > 0">+</template>
                <div class="hotkeys__button">{{ hotkey.key }}</div>
              </div>
            </div>
          </div>
        </template>
      </ModalWrapper>
    </transition>
  </teleport>
</template>

<script>
import ModalWrapper from '@/components/ModalWrapper.vue'
import { hotkeys } from '@/hotkeys.js'

export default {
  components: { ModalWrapper },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['closeModal'],
  data() {
    return {
      hotkeys,
    }
  },
}
</script>

<style>
.hotkeys {
  width: 100%;
}

.hotkeys__input {
  margin-bottom: calc(var(--unit) * 2);
}

.hotkeys__item {
  display: flex;
  gap: calc(var(--unit) * 15);
  align-items: center;
  justify-content: space-between;
}

.hotkeys__item:not(:last-child) {
  margin-bottom: calc(var(--unit) * 2);
}

.hotkeys__icon-edit {
  width: var(--height-icon-main);
  min-width: var(--height-icon-main);
  height: var(--height-icon-main);
  min-height: var(--height-icon-main);
  cursor: pointer;
}

.hotkeys__buttons {
  display: flex;
  gap: calc(var(--unit) * 2);
  align-items: center;
}

.hotkeys__modifiers {
  display: flex;
  gap: calc(var(--unit) * 2);
  align-items: center;
}

.hotkeys__modifiers-inner {
  display: flex;
  align-items: center;
}

.hotkeys__action {
  display: flex;
  gap: var(--unit);
  align-items: center;
}

.hotkeys__button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--height-icon-main);
  height: var(--height-icon-main);
  padding: var(--unit);
  border: var(--border-width-small) solid var(--color-primary);
  border-radius: var(--border-width-main);
}

@media (max-width: 768px) {
  .hotkeys__item {
    gap: calc(var(--unit) * 5);
    font-size: var(--font-small);
  }

  .hotkeys__icon-edit {
    width: var(--height-icon-small);
    min-width: var(--height-icon-small);
    height: var(--height-icon-small);
    min-height: var(--height-icon-small);
  }

  .hotkeys__button {
    min-width: var(--height-icon-main);
    height: var(--height-icon-main);
    font-size: var(--font-small);
  }
}
</style>

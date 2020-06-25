<template>
  <div class="progress-circle">
    <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1">
      <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent" />
      <circle
        class="progress-bar"
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    radius: {
      type: Number,
      default: 100
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dashArray: Math.PI * 100
    }
  },
  computed: {
    dashOffset() {
      return this.percent === 0 ? this.dashArray : (1 - this.percent) * this.dashArray
    }
  }
}
</script>

<style scoped>
.progress-circle {
  position: relative;
}

.progress-circle circle {
  stroke-width: 8px;
  transform-origin: center;
}

.progress-background {
  transform: scale(0.9);

  stroke: rgb(158, 156, 156);
}

.progress-bar {
  transform: scale(0.9) rotate(-90deg);
  stroke: rgb(233, 48, 48);
}
</style>
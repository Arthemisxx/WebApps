<template>
  <div class="window-ringing">
    <div class="box">
      <div class="text" id="timer">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 0,
      seconds: "00",
      minutes: "00",
      hours: "00",
    };
  },
  watch: {
    timerCount: {
      handler() {
        setTimeout(() => {
          if (this.timerCount < 10) {
            this.seconds = `0${this.timerCount}`;
          } else {
            this.seconds = this.timerCount;
          }
          if (this.timerCount === 60) {
            this.timerCount = 0;
            this.seconds = "00";
            if (this.minutes.charAt(0) === "0" && this.minutes.charAt(1) !== "9") {
              this.minutes = `0${Number(this.minutes.charAt(1)) + 1}`;
            } else if (this.minutes.charAt(1) === "9") {
              this.minutes = `${Number(this.minutes.charAt(0)) + 1}0`;
            } else {
              this.minutes = Number(this.minutes) + 1;
            }
          }
           if (this.timerCount === 60 && this.minutes === "59") {
            this.timerCount = 0;
            this.seconds = "00";
            this.minutes = "00";
            if (this.hours.charAt(0) === "0") {
              this.hours = `0${Number(this.hours.charAt(1)) + 1}`;
            } else if (this.hours.charAt(1) === "9") {
              this.hours = `${Number(this.hours.charAt(0)) + 1}0`;
            } else {
              this.hours = Number(this.hours) + 1;
            }
          }

          this.timerCount++;
        }, 1000);
      },
      immediate: true,
    },
  },
};
</script>


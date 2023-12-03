<template>
  <div class="window">
    <div class="main">
      <input v-model="number" class="form-number clearfix" id="form-number" />
      <div class="grid-container">
        <button class="grid-item" @click="addNumber(1)">1</button>
        <button class="grid-item" @click="addNumber(2)">2</button>
        <button class="grid-item" @click="addNumber(3)">3</button>
        <button class="grid-item" @click="addNumber(4)">4</button>
        <button class="grid-item" @click="addNumber(5)">5</button>
        <button class="grid-item" @click="addNumber(6)">6</button>
        <button class="grid-item" @click="addNumber(7)">7</button>
        <button class="grid-item" @click="addNumber(8)">8</button>
        <button class="grid-item" @click="addNumber(9)">9</button>
        <button class="grid-item">*</button>
        <button class="grid-item" @click="addNumber(0)">0</button>
        <button class="grid-item">#</button>
        <div class="call-button call-item" @click="call()">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </div>
        <div class="grid-delete">
          <font-awesome-icon
            icon="fa-delete-left"
            id="delete-visibility"
            @click="deleteNumber()"
          />
        </div>
      </div>
    </div>
  </div>
</template> 


<script>
export default {
  data() {
    return {
      number: "",
    };
  },

  methods: {
    showDelete() {
      if (this.number.length === 0) {
        document.getElementById("delete-visibility").style.visibility =
          "hidden";
      } else {
        document.getElementById("delete-visibility").style.visibility =
          "visible";
      }
    },

    addNumber(value) {
      this.number = this.number + value;
      this.showDelete();
    },

    deleteNumber() {
      this.number = this.number.slice(0, -1);
      this.showDelete();
    },

    async call() {
      try {
        let responseStream = await fetch(
          `${process.env.VUE_APP_SERVER_URL}/call`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ number: this.number }),
          }
        );
        let response = await responseStream.json();
        this.$router.push({
          name: `ringing`,
          params: { callsId: response.id },
        });
      } catch (err) {
        location.reload();
      }
    },
  },
};
</script>

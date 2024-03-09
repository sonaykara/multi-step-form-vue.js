<template>
  <div>
    <div class="main">
      <!-- left side -->
      <div class="container">
        <!-- left side -->
        <div class="left-panel">
          <div class="left-panel-content">
            <div class="flex-item">
              <div><span class="active">1</span></div>
              <div class="flex-item-col">
                <div class="step">STEP 1</div>
                <div class="step-text"><strong>YOUR INFO</strong></div>
              </div>
            </div>
            <div class="flex-item">
              <div><span>2</span></div>
              <div class="flex-item-col">
                <div class="step">STEP 2</div>
                <div class="step-text"><strong>SELECT PLAN</strong></div>
              </div>
            </div>
            <div class="flex-item">
              <div><span>3</span></div>
              <div class="flex-item-col">
                <div class="step">STEP 3</div>
                <div class="step-text"><strong>ADD-ONS</strong></div>
              </div>
            </div>
            <div class="flex-item">
              <div><span>4</span></div>
              <div class="flex-item-col">
                <div class="step">STEP 4</div>
                <div class="step-text"><strong>SUMMARY</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- input-area -->
      <div class="info-area">
        <div class="input-area">
          <h1>Pesonal Info</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corrupti!
          </p>

          <div>
            <div class="label"><label for="">Name</label></div>
            <div class="inp">
              <input
                type="text"
                v-model="information.name"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div>
            <div class="label"><label for="">E-mail</label></div>
            <div class="inp">
              <input
                type="text"
                v-model="information.email"
                placeholder="Your E-mail"
              />
            </div>
          </div>

          <div>
            <div class="label"><label for="">Phone</label></div>
            <div class="inp">
              <input
                type="text"
                v-model="information.phone"
                placeholder="Phobe Number"
              />
            </div>
          </div>

          <div class="btn-area">
            <next-button @click="nextPage()"></next-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from "./button/NextButton.vue";

export default {
  data() {
    return {
      information: {
        name: "",
        email: "",
        phoneNumber: "",
      },
    };
  },
  components: {
    NextButton,
  },

  methods: {
    nextPage() {
      this.$router.push({ name: "selectplan" });
      this.addToİnformatin({ information: this.information });
    },
  },
};
</script>

<style lang="scss" scoped></style>

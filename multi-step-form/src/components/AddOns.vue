<template>
  <div>
    <div class="main">
      <!-- left side -->
      <div class="container">
        <!-- left side -->
        <div class="left-panel">
          <div class="left-panel-content">
            <div class="flex-item">
              <div><span>1</span></div>
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
            <!-- <img src="/multi-step-form/src/assets/bg-sidebar-desktop.svg" alt=""> -->
          </div>
        </div>

        <!-- right side -->

        <div></div>
      </div>

      <!-- input-area -->
      <div class="info-area">
        <div class="input-area">
          <h1>Pick add-ons</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            corrupti!
          </p>

          <div class="checkbox-area ">
            <div class="inp inp-checkbox"><input type="checkbox" /></div>
            <div class="label label-checkbox label-checkbox-color">
              <div class="label-area">
                <div><label for="">Online Service</label></div>
                <div><label for="">$1/mo</label></div>
              </div>
              <div>Access to multiplayer games</div>
            </div>
          </div>

          <div class="checkbox-area">
            <div class="inp inp-checkbox"><input type="checkbox" /></div>
            <div class="label label-checkbox label-checkbox-color">
              <div class="label-area">
                <label for="">Larger Storge</label>
                <label for="">$2/mo</label>
              </div>
              <div>Extra 1TB of cloud save</div>
            </div>
          </div>

          <div class="checkbox-area">
            <div class="inp inp-checkbox"><input type="checkbox" /></div>
            <div class="label label-checkbox label-checkbox-color">
              <div class="label-area">
                <label for="">Customizable Profile</label>
                <label for="">$2/mo</label>
              </div>
              <div>Custom theme on your profile</div>
            </div>
          </div>
          <div class="btn-area ">
            <back-button @click="prevPage"></back-button>
            <next-button @click="nextPage"></next-button>
            
          </div>
        </div>
      </div>
    </div>

   
  </div>
</template>

<script>
import BackButton from './button/BackButton.vue';
import NextButton from './button/NextButton.vue';

export default {
  components: { 
    BackButton,
    NextButton
  },

  methods: {
    nextPage () {
      this.$router.push({ name : 'summary'})
    },

    prevPage () {
      this.$router.go(-1)
    }
  },


};
</script>

<style lang="scss" scoped></style>

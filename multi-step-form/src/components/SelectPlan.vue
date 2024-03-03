<template>
  <div >
    <div class="main">
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
        
          </div>
        </div>
      </div>
      <!-- right side -->
      <div class="container-plan">
        <h1>Slect your plan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
          magnam?
        </p>
        <div>
          <component :is="currentComponent"></component>
        </div>

        <div class="btn-switch">
          <switch-button
            @selectedPlan="handleSelectedPlan"
            :currentComponent="currentComponent"
          ></switch-button>
        </div>
        <div class="btn-area">
          <back-button @click="prevPage"></back-button>
          <nex-button @click="nextPage"></nex-button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YearlyPlan from "./plan/Yearly.vue";
import MonthlyPlan from "./plan/Monthly.vue";
import SwitchButton from "./button/SwitchPlanButton.vue";
import NexButton from "./button/NextButton.vue";
import BackButton from "./button/BackButton.vue";

export default {
  data() {
    return {
      currentComponent: MonthlyPlan,
    };
  },
  methods: {
    handleSelectedPlan(selectedComponent) {
      this.currentComponent = selectedComponent;
    },

    nextPage () {
      this.$router.push({ name : 'addons'})
    },

    prevPage () {
      this.$router.go(-1)
    }
  },
  components: {
    SwitchButton,
    YearlyPlan,
    MonthlyPlan,
    NexButton,
    BackButton,
  },
};
</script>

<style></style>

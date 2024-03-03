<template>
  <div>
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
      <div class="summary-area">
          <div>
            <h1>Finishing Up</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, assumenda!</p>
            <div style="width: 500px; height:500px; background-color :black;"></div>
          </div>

          <div class="btn-area">
            <back-button @click="prevPage"></back-button>
            <confirm-button></confirm-button>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import BackButton from "./button/BackButton.vue"
import ConfirmButton from "./button/ConfirmButton.vue"
export default {
methods: {
  prevPage () {
    this.$router.go(-1)
  }
},
  components : {
    BackButton,
    ConfirmButton
  }


};
</script>
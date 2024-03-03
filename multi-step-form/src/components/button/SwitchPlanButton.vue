<template>
  <div>
    <section title=".slideThree" class="wrapper">
      <div class="slideThree">
        <input
          type="checkbox"
          value="None"
          id="slideThree"
          name="check"
          checked
        />
        <label for="slideThree" @click="toggleComponent"></label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["currentComponent"],

  data() {
    return {
      selected: "",
    };
  },

  methods: {
    toggleComponent() {
      this.selected =
        this.currentComponent == "YearlyPlan" ? "MonthlyPlan" : "YearlyPlan";
      console.log(this.currentComponent);
      this.$emit("selectedPlan", this.selected);
    },
  },
};
</script>

<style></style>

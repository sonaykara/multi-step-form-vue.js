<template>
  <div class="main" >
    <div class="plan" @click="handle">
      <img src=".././../assest/ımg.svg/icon-arcade.svg" alt="" />
      <p>Arcade</p>
      <p>$9/mo</p>
      <input type="text" style="display: none" value="9" />
    </div>
    <div class="plan">
      <img src=".././../assest/ımg.svg/icon-advanced.svg" alt="" />
      <p>Advanced</p>
      <p>$12/mo</p>
      <input type="text" style="display: none" value="12" />
    </div>
    <div class="plan">
      <img src=".././../assest/ımg.svg/icon-pro.svg" alt="" />
      <p>Pro</p>
      <p>$15/mo</p>
      <input type="text" style="display: none" value="15"  ref="inp"/>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped></style>

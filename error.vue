<script>
  export default {
    props: {
      error: Object
    }
  }
</script>

<template>
  <div class="container">
    <div class="error-card">
      <h3 class="error-card__title">
        {{ error.statusCode }}
      </h3>
      <p class="error-card__message">
        {{error.message}}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.error-card{
  margin: 100px auto;
  border-radius: $border-20;
  box-shadow: 2px 5px 25px -3px #B4B4B440;
  background-color: var(--light);
  padding: 20px;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;

  @include max-xxs{
    margin: 50px auto;
  }

  &__title{
    @include font-size(50);
    line-height: 50px;
    color: var(--dark);
    font-weight: 600;
    text-align: center;
  }

  &__message{
    margin-top: 10px;
    text-align: center;
    @include font-size(24);
  }
}
</style>
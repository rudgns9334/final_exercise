<template>
  <div class="hero overlay" style="background-image: url('images/hero_bg_3.jpg')">
    
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="wrap-login100">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-48">
            <i class="zmdi zmdi-font"></i>
          </span>

          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                value="admin@ssafy.com"
                placeholder="이메일을 입력하세요"
              />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="userPassword"
                value="admin1234!"
                placeholder="비밀번호를 압력하세요"
              />
          </div>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <a class="login100-form-btn" id="btnLogin">
                <span>Login</span>
              </a>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
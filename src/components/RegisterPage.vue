<template>
  <div class="hero overlay" style="background-image: url('/images/hero_bg_3.jpg')">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <!-- <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" data-aos="fade-up">Register</h1>
          </div> -->
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-48">
              <i class="zmdi zmdi-font"></i>
            </span>
  
            <form novalidate>
		        <div class="mb-3">
		          <label for="userName" class="form-label">User Name</label>
		          <input type="text" class="form-control" id="userName" placeholder="Name" value="1234" />
		          <div class="valid-feedback">Valid</div>
		          <div class="invalid-feedback">Enter Correct Name.</div>
		        </div>
		        <div class="mb-3">
		          <label for="userPassword" class="form-label">Password</label>
		          <input
		            type="password"
		            class="form-control"
		            id="userPassword"
		            value="1234qwer!"
		            placeholder="PassWord"
		          />
		          <div class="valid-feedback">Valid</div>
		          <div class="invalid-feedback">Least 1 Symbol, English, Number! At least 8 in length</div>
		        </div>
		        <div class="mb-3">
		          <label for="userPassword2" class="form-label">Password Confirm</label>
		          <input
		            type="password"
		            class="form-control"
		            id="userPassword2"
		            value="1234qwer!"
		            placeholder="Confirm"
		          />
		          <div class="valid-feedback">Valid</div>
		          <div class="invalid-feedback">Inconsistency</div>
		        </div>
		        <div class="mb-3">
		          <label for="userEmail" class="form-label">Email</label>
		          <input
		            type="email"
		            class="form-control"
		            id="userEmail"
		            value="1@ssafy.com"
		            placeholder="E-mail"
		          />
		          <div class="valid-feedback">Valid</div>
		          <div class="invalid-feedback">Invalid E-mail</div>
		        </div>
		        <div class="mb-3">
		          <label for="userState" class="form-label">userGrade</label> <br>
		          	<input type="radio" name="userState" value="001" checked="checked">Buyer
					<input type="radio" name="userState" value="002">Seller <br>
		        </div>
		      </form>
            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <a class="login100-form-btn" id="btnRegister">
                  <span>Register</span>
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
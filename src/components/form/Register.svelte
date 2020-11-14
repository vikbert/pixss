<style>
</style>

<h4 class="strong">Form Demo</h4>
<div class="row">
  <div class="column is-rounded">
    <div class="card">
      <div class="card-content">
        <label for="firstName">
          <strong>First Name</strong>
          <input type="text" name="firstName" />
        </label>
        <label for="lastName">
          <strong>Last Name</strong>
          <input type="text" name="lastName" />
        </label>
        <strong>Gender</strong>
        <fieldset class="gender-fieldset">
          <label class="radio">
            Female
            <input type="radio" name="gender" />
            <span />
          </label>
          <label class="radio">
            Male
            <input type="radio" name="gender" checked />
            <span />
          </label>
        </fieldset>
        <label for="birthday">
          <strong>Birthday</strong>
          <input type="date" value="2020-11-10" />
        </label>
        <label for="password">
          <strong>Password</strong>
          <input type="password" name="password" />
        </label>
        <label for="password-repeat">
          <strong>Password Repeat</strong>
          <input type="password" name="password-repeat" />
        </label>
        <label class="checkbox">
          subscribe the newsletters
          <input type="checkbox" name="condition" checked />
          <span />
        </label>
        <button
          type="button"
          class="is-primary is-rounded float-right">Register</button>
      </div>
    </div>
  </div>
  <div class="column" />
</div>

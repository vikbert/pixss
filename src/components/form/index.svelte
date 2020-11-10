<section class="container">
  <strong>Multiple choices</strong>
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <fieldset>
    <label class="checkbox">
      checked + disabled
      <input type="checkbox" checked disabled />
      <span />
    </label>

    <label class="checkbox">
      checked
      <input type="checkbox" checked="checked" />
      <span />
    </label>

    <label class="checkbox">
      unchecked
      <input type="checkbox" />
      <span />
    </label>
  </fieldset>

  <strong>Geben Sie Ihre Zahlungsweise an:</strong>
  <fieldset>
    <label class="radio" for="mc">
      Mastercard
      <input type="radio" id="mc" name="Zahlmethode" value="Mastercard" />
      <span />
    </label>
    <label class="radio" for="vi">
      Visa
      <input type="radio" id="vi" name="Zahlmethode" value="Visa" />
      <span />
    </label>
  </fieldset>

  <strong>Login Form</strong>
  <fieldset>
    <label for="email"> Email <input type="text" name="email" /></label>
    <label for="password">
      Password
      <input type="text" name="password" />
    </label>
  </fieldset>

  <div class="px-1 py-1 is-warning is-rounded">
    <div class="card">
      <div class="card-title has-text-centered">
        <strong>Login Form</strong>
      </div>
      <div class="card-content">
        <label for="email"> Email <input type="text" name="email" /> </label>
        <label for="password">
          Password
          <input type="password" name="password" />
        </label>
        <button class="is-primary is-rounded float-right">submit</button>
      </div>
    </div>
  </div>
</section>

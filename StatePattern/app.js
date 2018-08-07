const PageState = function() {
  let currentStage = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentStage = state;    
  }
};

// Home State
const homeState = function(page) {
  console.log(this);
  
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">State pattern</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

// About State
const aboutState = function(page) {
  console.log(this);
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <p class="lead">This is the about page</p>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

// Contact State
const contactState = function(page) {
  console.log(this);
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

const page = new PageState();
page.init;

const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
  page.change(new homeState);
  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState);
  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);
  e.preventDefault();
})


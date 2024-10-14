<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  @vite('resources/css/app.css')
</head>

<body>
  <div class="login_container">
    <form method="post" action="{{url('/')}}/register">
      @csrf
      <h2 class="head_login">Login Page</h2>
      <div class="all_data">
        <label for="uname">Name</label>
        <input type="text" class="uname">

        <label for="uemail">Email</label>
        <input type="email" class="uemail">

        <button type="submit" class="login_btn">Login NOW</button>
      </div>
    </form>
  </div>
</body>

</html>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $servername = "localhost";
    $dbusername = "mlanzcalini1";
    $dbpassword = "Napo2001";
    $dbname = "wp";

    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, username, password FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        setcookie('userid', $user['id'], time() + (86400 * 30), "/"); 
        header('Location: pwdMang.php');
        exit();
    } else {
    $error_message = "Incorrect username or password.";
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<header>
    <h2>PWX</h2>
    <nav class ="navBar">
        <a href="index.html">Home</a>
    </nav>
</header>

<body class="loginP">
    <div id="loginPage" class="container2">
        <h1 class="loginH">Login</h1>
        
        <?php if (isset($error_message)): ?>
                <p class="errorMsg"><?php echo $error_message; ?></p>
            <?php endif; ?>
        
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="formRow">
                <input type="text" id="usernameMainPage" name="username" class="formInput" placeholder="example" required>
                <label for="username" class="formLabel">Username</label>
                <span class="material-icons">person</span>
            </div>
            <div class="formRow">
                <input type="password" id="password" name="password" class="formInput" placeholder="pwd" required>
                <label for="password" class="formLabel">Password</label>
                <span class="material-icons">lock</span>
            </div>
            <a href="#" class="forgotPwd" id="forgotLink">Forgot Password?</a>

            <button type="submit" class="submitBtn">Login</button>
        </form>
        
        <p class="signUp">Don't have an account? <a href="#" id=signupLink> Signup</a></p>
    </div>

    <div id="signupPage" class="container3">
        <h1 class="loginH">Signup</h1>

        <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="formRow">
                <input type="text" name="email" class="formInput" placeholder="example" required>
                <label for="username" class="formLabel">Email</label>
                <span class="material-icons">email</span>
            </div>
            <div class="formRow">
                <input type="text" id="username" name="username" class="formInput" placeholder="example" required>
                <label for="username" class="formLabel">Username</label>
                <span class="material-icons">person</span>
            </div>
            <div class="formRow">
                <input type="password" name="password" class="formInput" placeholder="pwd" required>
                <label for="password" class="formLabel">Password</label>
                <span class="material-icons">lock</span>
            </div>
            <div class="formRow">
                <input type="password" name="password" class="formInput" placeholder="pwd" required>
                <label for="password" class="formLabel">Confirm Password</label>
                <span class="material-icons">lock</span>
            </div>

            <button type="submit" class="submitBtn">Signup Now</button>
        </form>
        
        <p class="signUp">Already have an account? <a href="#" id="loginLink"> Login</a></p>
        </div>
    
    <div id="forgotPage" class="container4">
        <h1 class="loginH">Forgot Password</h1>
        
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="formRow">
                <input type="text" name="email" class="formInput" placeholder="example" required>
                <label for="username" class="formLabel">Email</label>
                <span class="material-icons">email</span>
            </div>
            
            <button type="submit" class="submitBtn">Forgot Password</button>
        </form>
        
        <p class="signUp">< Back to<a href="#" id="forgotLink1"> Login</a></p>
        </div> 
    
    <script src="login.js"></script>
</body>
</html>
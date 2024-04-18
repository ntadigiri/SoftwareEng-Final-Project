<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Password Manager</title>
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<header>
    <h2>PWX</h2>
    <nav class="navBar">
    
        <a href="logout.php"><button class="login">Logout</button></a>
    </nav>
</header>

<body class="managerP">
        <h2 class="title">Password Manager</h2>

        <div class="container5">
        <form id="passwordForm">
        <label for="website">Website:</label>
        <input type="text" class="pwdMang" id="website" name="website"><br><br>
        <label for="username">Username:</label>
        <input type="text" class="pwdMang" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" class="pwdMang" id="password" name="password"><br><br>
        <input type="submit" value="Add Password" class="btn">
        </div> 
    </form>
    <div id="passwordList">
    
    </div>
    <script src="pwdMang.js"></script>
</body>

</html>

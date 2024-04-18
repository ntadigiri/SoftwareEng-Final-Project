<?php
session_start();

$_SESSION = array();

session_destroy();

setcookie("userid", "", time() - 3600, "/");

header("Location: index.html");
exit();
?>
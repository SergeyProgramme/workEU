<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registerUser";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->report_mode = MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT;

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
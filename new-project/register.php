<?php
require_once('db.php');

$name = mysqli_real_escape_string($conn, $_POST['name']);
$number = mysqli_real_escape_string($conn, $_POST['number']);
$messenger = mysqli_real_escape_string($conn, $_POST['messenger']);

if (empty($name) || empty($number) || empty($messenger)) {
    echo "Заполните все поля";
} else {
    $sql = "INSERT INTO `finalTestTable` (name, number, messenger) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("sss", $name, $number, $messenger);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "Данные успешно добавлены в базу данных";
        } else {
            echo "Ошибка при добавлении данных в базу данных: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Ошибка подготовки запроса: " . $conn->error;
    }
}

$conn->close();
?>

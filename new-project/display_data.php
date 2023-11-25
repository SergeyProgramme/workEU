<?php
// Подключение к базе данных
require_once('db.php');

// Выборка данных из базы данных
$sql = "SELECT * FROM finalTestTable";
$result = $conn->query($sql);

// HTML-код для отображения данных в виде таблицы
echo "<html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Display Data</title>
        </head>
        <body>
            <h1>Данные из базы данных</h1>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Country</th>
                </tr>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['id'] . "</td>
                <td>" . $row['name'] . "</td>
                <td>" . $row['number'] . "</td>
                <td>" . $row['messenger'] . "</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='4'>Нет данных в базе</td></tr>";
}

echo "</table>
        </body>
      </html>";

// Закрываем соединение с базой данных
$conn->close();
?>
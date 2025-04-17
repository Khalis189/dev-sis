<?php
$db_host = 'localhost';
$db_name = 'devidsisca_rsvp';
$db_user = 'username_yang_dibuat';
$db_pass = 'password_yang_dibuat';

try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
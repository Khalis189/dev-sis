<?php
require_once 'config.php';

try {
    $stmt = $conn->query("SELECT * FROM rsvp ORDER BY timestamp DESC");
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($messages);
} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
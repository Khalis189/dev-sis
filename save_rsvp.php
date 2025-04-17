<?php
require_once 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

try {
    $stmt = $conn->prepare("INSERT INTO rsvp (name, group_name, whatsapp, attendance, message) 
                           VALUES (:name, :group, :whatsapp, :attendance, :message)");
    
    $stmt->bindParam(':name', $data['name']);
    $stmt->bindParam(':group', $data['group']);
    $stmt->bindParam(':whatsapp', $data['whatsapp']);
    $stmt->bindParam(':attendance', $data['attendance']);
    $stmt->bindParam(':message', $data['message']);
    
    $stmt->execute();
    
    echo json_encode(['success' => true]);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
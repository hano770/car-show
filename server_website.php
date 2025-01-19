<?php
// Define the directory where the website files are stored
$websiteDir = __DIR__; // This will point to the current directory where the PHP file is located

// Check if the requested file exists or fallback to index.html
$file = isset($_GET['file']) ? basename($_GET['file']) : 'index.html';
$filePath = $websiteDir . '/' . $file;

// If the file exists, serve it
if (file_exists($filePath)) {
    // Get the MIME type
    $mimeType = mime_content_type($filePath);
    
    // Set the appropriate headers
    header('Content-Type: ' . $mimeType);
    readfile($filePath);
    exit;
} else {
    // File not found
    header('HTTP/1.0 404 Not Found');
    echo "404 - File Not Found";
}
?>

<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Content-Type");

$json = file_get_contents('php://input');
//$obj = json_decode($json, true);
sleep(5);
echo $json;

?>

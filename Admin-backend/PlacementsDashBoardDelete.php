<?php
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id=$_GET['id'];

$sql= "DELETE from placements_dash where id = $id LIMIT 1";

if(mysqli_query($con,$sql)){
    http_response_code(204);
}
else{
    http_response_code(422);
}
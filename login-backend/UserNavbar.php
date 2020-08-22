<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$name = [];
$sql = "SELECT first_name,last_name from personal_details_mdb where user_id=$id";
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $name[] = $row;
    }
    echo(json_encode($name));
}
else{
    http_response_code(404);
}

?>
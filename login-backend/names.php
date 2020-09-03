<?php

require "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$students = [];
$sql = "SELECT `first_name`, `middle_name`, `last_name` FROM `personal_details_mdb` WHERE user_id=$id";
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $students["first_name"] = $row["first_name"];
        $students["middle_name"] = $row["middle_name"];
        $students["last_name"] = $row["last_name"];
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
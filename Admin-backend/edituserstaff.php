<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$staff=[];

$sql = "select * from staff_details where Emp_Id=$id";

$ct=0;
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
      
        $staff[$ct] = $row;
        
        $ct++;
    }
    echo(json_encode($staff));
}
else{
    http_response_code(404);
}
?>
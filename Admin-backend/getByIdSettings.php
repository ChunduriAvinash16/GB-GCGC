<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$id = $_GET['id'];

$sql = "SELECT * FROM `staff_details` WHERE Emp_Id = '$id'LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);

echo $json= json_encode($row);

exit;
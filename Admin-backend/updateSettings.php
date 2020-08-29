<?php
require_once "auth.php";

$postdata = file_get_contents("php://input");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = $_GET['id'];
    $emp_id = $request->Emp_Id;
    $fname = $request->fname;
    $lname = $request->lname;
    $email = $request->email;
    $phone = $request->phone;
    $campus = $request->campus;
    $instituition = $request->instituition;
    $department = $request->department;

    $sql = "UPDATE `staff_details` SET `Emp_Id`=$id,`Email_id`='$email',`Emp_Name`='$fname',`Mobile_No`=$phone,`Campus`='$campus',`Institution`='$instituition',`Department`='$department',`last_name`='$lname' WHERE Emp_Id=$id";
    if(mysqli_query($con, $sql)){
        echo("Successfully Updated!");
        http_response_code(202);
    }
    else{
        http_response_code(422);
    }
}
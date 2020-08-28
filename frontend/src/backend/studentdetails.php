<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$students = [];
$sql = "SELECT SSC_percent,inter_percent,Branch,Program,b_tech_gpa,pass_category,no_of_backlogs,section from academic_details where user_id=$id";
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $students[] = $row;
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
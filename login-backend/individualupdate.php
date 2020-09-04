<?php

require_once "auth.php";

$postdata = file_get_contents("php://input");
print_r($postdata);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $id = $_GET['id'];
    $tenth = $request->ssc;

    

    $sql = "Update academic_details set SSC_percent='$tenth' where user_id='$id' ";
    if(mysqli_query($con, $sql)){
        
        http_response_code(202);
    }
    else{
        
        http_response_code(422);

    }
}




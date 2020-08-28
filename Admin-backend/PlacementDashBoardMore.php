<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $company= $request->company;
    $ctc= $request->CTC;
    $from_date= strtotime($request->date);
    $date=date('Y-m-d',$from_date);
    $sql="INSERT INTO placements_dash (`Date`, Company_name, CTC) VALUES ('$date','$company',$ctc)";
    if(mysqli_query($con,$sql)){
        echo ("$company ");
    }else{
        http_response_code(422);
    }
}
?>
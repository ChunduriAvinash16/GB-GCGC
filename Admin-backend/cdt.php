<?php

require_once 'auth.php';

//print_r($_POST);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
//echo ("$postdata");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $UserID= $request->UserID;
    $CompanyID= $request->CompanyID;
    $Attendence= $request->Attendence;
    $Writtentest= $request->Writtentest; 
    $Groupdiscussion= $request->Groupdiscussion;   
    $TechnicalInterview= $request->TechnicalInterview;   
    $PIU= $request->PIU;   
    $OfferLetter= $request->OfferLetter;                                       

  // echo("<h1>$Type1</h1>");

    $sql = "INSERT INTO user (userid,cid,attendance,WTS,GDS,TIS,PIU,offer_letter) VALUES ($UserID,'$CompanyID',$Attendence,'$Writtentest','$Groupdiscussion','$TechnicalInterview','$PIU','$OfferLetter')";

    if(mysqli_query($con,$sql)){
        //echo("$sql");
        echo("The data is inserted");
        http_response_code(201);
    }
    else{
        echo "$sql";
        http_response_code(422);
    }
}
?>
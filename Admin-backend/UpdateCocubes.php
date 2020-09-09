<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $id = $_GET['id'];
    $Apptitude=$request->Overall_Aptitude;
    $English=$request->English;
    $Quantitative=$request->Quantitative;
    $Analytical=$request->Analytical;
    $Domain=$request->Domain;
    $ComputerFundamentals=$request->ComputerFundamentals;
    $Coding=$request->Coding;
    $WET=$request->WET;
    $sql ="UPDATE `are_cocubes` SET
    `Overall_Aptitude`=$Apptitude,`English`=$English,`Quantitative`=$Quantitative,
    `Analytical`=$Analytical,`Domain`=$Domain,`Computer_Fundamentals`=$ComputerFundamentals,
    `Coding`=$Coding,`WET`=$WET,
     WHERE `unique_id`=$id";
    if(mysqli_query($con,$sql)){
        echo ("$program ");
    }else{
        http_response_code(422);
    }
}
?>
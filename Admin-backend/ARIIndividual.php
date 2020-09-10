<?php
require_once "auth.php";

$postdata = file_get_contents("php://input");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = $_GET['id'];
    $AT1 = $request->AT1;
    $AT2 = $request->AT2;
    $AT3 = $request->AT3;
    $AT4 = $request->AT4;
    $AT5 = $request->AT5;
    $AT6 = $request->AT6;
    $TT1 = $request->TT1;
    $TT2 = $request->TT2;
    $TT3 = $request->TT3;
    $TT4 = $request->TT4;
    $TT5 = $request->TT5;
    $TT6 = $request->TT6;
    $TT7 = $request->TT7;
    $TT8 = $request->TT8;
    $DT1 = $request->DT1;
    $DT2 = $request->DT2;
    $DT3 = $request->DT3;
    $DT4 = $request->DT4;

    $sql = "UPDATE `ari` SET `AT1_score`=$AT1,`AT2_score`=$AT2,`AT3_score`=$AT3,`AT4_score`=$AT4,`AT5_score`=$AT5,`AT6_score`=$AT6,`TT1_percentage`=$TT1,`TT2_percentage`=$TT2,`TT3_percentage`=$TT3,`TT4_percentage`=$TT4,`TT5_percentage`=$TT5,`TT6_percentage`=$TT6,`TT7_percentage`=$TT7,`TT8_percentage`=$TT8,`DT1_score`=$DT1,`DT2_score`=$DT2,`DT3_score`=$DT3,`DT4_score`=$DT4 WHERE `Unique_Id`=$id";
    if(mysqli_query($con, $sql)){
        echo("Successfully Updated!");
        http_response_code(202);
    }
    else{
        http_response_code(422);
    }
}
<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $id=$request->id;
    $YOP= $request->YOP;
    $program= $request->program;
    $from_date= strtotime($request->from_date);
    $to_date= strtotime($request->to_date);
    $from=date('Y-m-d',$from_date);
    $to = date('Y-m-d',$to_date);
    $sql ="UPDATE `training_dash` SET `id`=$id,`YOP`='$YOP',`from_date`='$from',`to_date`='$to',`name_of_the_program`='$program' WHERE id=$id";
    if(mysqli_query($con,$sql)){
        echo ("$program ");
    }else{
        http_response_code(422);
    }
}
?>
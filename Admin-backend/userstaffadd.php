<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);



    $eid= $request->empidno;
    $Ename= $request->empname;
    $emailid= $request->empemail;
    $cam= $request->camp;
    $depart= $request->empdept;
    $mobileno= $request->empmobile;
    $insti= $request->empinsti;
    $desig= $request->empdesig;
    $gend= $request->Gender;
    $type= $request->Employee_Type;
    $sql="INSERT INTO `user` (`user_id`, `password`, `campus_id`, `type`) VALUES ($eid,$eid,101,'Admin')";
    if(mysqli_query($con,$sql)){
        http_response_code(202);
    }else{

        http_response_code(422);
    }
    $sql="INSERT INTO staff_details(Emp_Id, Email_id, Emp_Name, Mobile_No, Campus, Institution, Department, Designation,Gender,Employee_Type) VALUES ($eid,'$emailid','$Ename',$mobileno,'$cam','$insti','$depart','$desig','$gend','$type')";

    if(mysqli_query($con,$sql)){
        http_response_code(202);
    }else{

        http_response_code(422);
    }
}
?>
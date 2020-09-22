<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $id=$request->Emp_Id;


    $Ename= $request->Emp_Name;
    $emailid= $request->Email_id;
    $camp= $request->Campus;
    $depart= $request->Department;
    $mobileno= $request->Mobile_No;
    $insti= $request->Institution;
    $desig= $request->Designation;
    $gen= $request->Gender;
    $type= $request->Employee_Type;

    $sql ="UPDATE staff_details SET Emp_Id=$id,Emp_Name='$Ename',Email_id='$emailid',Campus='$camp',Department='$depart',Mobile_No='$mobileno',Institution='$insti',Designation='$desig',Gender='$gen',Employee_Type='$type' WHERE Emp_Id=$id";
    if(mysqli_query($con,$sql)){
        http_response_code(202);
    }else{
        http_response_code(422);
    }
}
?>
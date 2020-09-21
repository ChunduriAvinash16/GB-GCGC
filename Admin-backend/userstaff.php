<?php
require_once 'auth.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$recordListuserstaff = [];

$show=$_GET["show"];

if($show=="0" )
$sql = "select Emp_Id,Emp_Name,Email_id,Campus,Department,Mobile_No from staff_details ";
else
$sql = "select Emp_Id,Emp_Name,Email_id,Campus,Department,Mobile_No from staff_details LIMIT $show";

if($result=mysqli_query($con,$sql)){
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
            $recordListuserstaff[$cr]['id']=$row['Emp_Id'];
            $recordListuserstaff[$cr]['ename']=$row['Emp_Name'];
            $recordListuserstaff[$cr]['emailid']=$row['Email_id'];
            $recordListuserstaff[$cr]['campus']=$row['Campus'];
            $recordListuserstaff[$cr]['depart']=$row['Department'];
            $recordListuserstaff[$cr]['mobile']=$row['Mobile_No'];
            $recordListuserstaff[$cr] = $row;
            $cr++;
    }
    echo(json_encode($recordListuserstaff));
}
else{
    echo "$result";
    http_response_code(404);
}


?>
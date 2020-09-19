<?php
    require 'auth.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    error_reporting(E_ERROR);
    $search=$_GET['search'];

    $recordListuserstaff = [];
    $sql="SELECT * FROM `staff_details` WHERE (`Emp_Id` LIKE '%$search%') OR (`Emp_Name` LIKE '%$search%') OR (`Email_id` LIKE '%$search%') OR (`Campus` LIKE '%$search%') OR (`Department` LIKE '%$search%') OR (`Mobile_No` LIKE '%$search%') ";
    if($result = mysqli_query($con,$sql))
    {
        $cr=0;
        while($row = mysqli_fetch_assoc($result))
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
        echo json_encode($recordListuserstaff);
    }
    else
    {
        http_response_code(404);
    }
?>
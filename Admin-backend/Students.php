<?php
    require 'auth.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    error_reporting(E_ERROR);
    $search=$_GET['search'];
    $students=[];
    $sql="SELECT * FROM `user-students` WHERE (`user_id` LIKE '%$search%') OR (`first_name` LIKE '%$search%') OR (`middle_name` LIKE '%$search%') OR (`last_name` LIKE '%$search%') OR (`Branch` LIKE '%$search%') OR (`YOP` LIKE '%$search%') OR (`Faculty_Coordinator` LIKE '%$search%')";
    if($result = mysqli_query($con,$sql))
    {
        $cr=0;
        while($row = mysqli_fetch_assoc($result))
        {
            $students[$cr]['id']=$row['user_id'];
            $students[$cr]['fname']=$row['first_name'];
            $students[$cr]['mname']=$row['middle_name'];
            $students[$cr]['lname']=$row['last_name'];
            $students[$cr]['Branch']=$row['Branch'];
            $students[$cr]['YOP']=$row['YOP'];
            $students[$cr]['Faculty_Coordinator']=$row['Faculty_Coordinator'];
            $cr++;
        }
        echo json_encode($students);
    }
    else
    {
        http_response_code(404);
    }
?>
<?php

require "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$students = [];
$sql = "SELECT COUNT(*) as count FROM `cdt2020` WHERE `userid`=$id";
$sql1 = "SELECT COUNT(*) as count FROM `cdt2020` WHERE `userid`=$id and WTS='Y'";
$result=mysqli_query($con,$sql1);
$row1=mysqli_fetch_assoc($result);
$sql2 = "SELECT COUNT(*) as count FROM `cdt2020` WHERE `userid`=$id and `attendance`='P'";
$result=mysqli_query($con,$sql2);
$row2=mysqli_fetch_assoc($result);
$sql3 = "SELECT COUNT(*) as count FROM `cdt2020` WHERE `userid`=$id and (`GDS`='NA' OR `GDS`='Y') and WTS='Y' and `attendance`='P'";
$result=mysqli_query($con,$sql3);
$row3=mysqli_fetch_assoc($result);
$sql4 = "SELECT COUNT(*) as count FROM `cdt2020` WHERE `userid`=$id and (`TIS`='NA' OR `TIS`='Y') and (`GDS`='NA' OR `GDS`='Y') and WTS='Y' and `attendance`='P'";
$result=mysqli_query($con,$sql4);
$row4=mysqli_fetch_assoc($result);
$sql5 = "SELECT COUNT(*) as count FROM `cdt2020` WHERE `userid`=$id and (`PIU`='NA' OR `PIU`='Y') and (`TIS`='NA' OR `TIS`='Y') and (`GDS`='NA' OR `GDS`='Y') and WTS='Y' and `attendance`='P'";
$result=mysqli_query($con,$sql5);
$row5=mysqli_fetch_assoc($result);
$sql6 = "SELECT COUNT(*) as count FROM `company-yop` WHERE `YOP`=(SELECT `YOP` FROM `academic_details` where `user_id`=$id)";
$result=mysqli_query($con,$sql6);
$row6=mysqli_fetch_assoc($result);
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $students["count"] = $row["count"];
        $students["count1"] = $row1["count"];
        $students["count2"] = $row2["count"];
        $students["count3"] = $row3["count"];
        $students["count4"] = $row4["count"];
        $students["count5"] = $row5["count"];
        $students["count6"] = $row6["count"];
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
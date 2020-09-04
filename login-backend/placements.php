<?php
require 'auth.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
error_reporting(E_ERROR);
$students = [];
$id = $_GET['id'];
$sql1 = "SELECT * FROM `cdt2020`,`companies` WHERE `userid`=$id and `cdt2020`.`cid`=`companies`.`company_id` and attendance='P'";
if($result1=mysqli_query($con,$sql1)){
    $cr=0;
    while($row=mysqli_fetch_assoc($result1)){
        $students[$cr]["logo"] = $row["company_logo"];
        $students[$cr]["name"] = $row["company_name"];
        $students[$cr]["attendance"] = $row["attendance"];
        $students[$cr]["WTS"] = $row["WTS"];
        $students[$cr]["GDS"] = $row["GDS"];
        $students[$cr]["TIS"] = $row["TIS"];
        $students[$cr]["PIU"] = $row["PIU"];
        $cr++;
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
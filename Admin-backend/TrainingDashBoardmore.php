<?php
require_once 'auth.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$year = $_GET["id"];
$students = [];
$sql = "select * from training_dash where YOP=$year";
$status="";
$ct=0;
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $date=date("Y-m-d");
        if($row["from_date"]>$date)
          $status="To Be Scheduled";
        else if($row["from_date"]<$date && $row["to_date"]>$date)
          $status="On-Going";
        else
          $status="Completed";
        $students[$ct] = $row;
        $students[$ct]['status']= $status;
        $ct++;
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
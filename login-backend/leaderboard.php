<?php
require 'auth.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
error_reporting(E_ERROR);
$students = [];
$id = $_GET['id'];
$sql1 = "SELECT * FROM `leaderboard` WHERE YOP=2021 LIMIT 10";
if($result1=mysqli_query($con,$sql1)){
    $cr=0;
    while($row=mysqli_fetch_assoc($result1)){
        $students[$cr]["rank"]=$cr+1;
        $students[$cr]["user_id"] = $row["user_id"];
        $students[$cr]["first_name"] = $row["first_name"];
        $students[$cr]["middle_name"] = $row["middle_name"];
        $students[$cr]["last_name"] = $row["last_name"];
        $students[$cr]["YOP"] = $row["YOP"];
        $students[$cr]["Branch"] = $row["Branch"];
        $students[$cr]["Cocubes_score"] = $row["Cocubes_rank"];
        $students[$cr]["Amcat_score"] = $row["Amcat_rank"];
        $students[$cr]["Ati_score"] = $row["Ati_rank"];
        $cr++;
    }
    $sql2 = "SELECT * FROM `leaderboard` WHERE YOP=2021 and user_id=$id";
    $result2=mysqli_query($con,$sql2);
    $row2=mysqli_fetch_assoc($result2);
    if($row2["Cocubes_rank"]>10)
    {
        $students[$cr]["rank"]=$row2["Cocubes_rank"];
        $students[$cr]["user_id"] = $row2["user_id"];
        $students[$cr]["first_name"] = $row2["first_name"];
        $students[$cr]["middle_name"] = $row2["middle_name"];
        $students[$cr]["last_name"] = $row2["last_name"];
        $students[$cr]["YOP"] = $row2["YOP"];
        $students[$cr]["Branch"] = $row2["Branch"];
        $students[$cr]["Cocubes_score"] = $row2["Cocubes_rank"];
        $students[$cr]["Amcat_score"] = $row2["Amcat_rank"];
        $students[$cr]["Ati_score"] = $row2["Ati_rank"];
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
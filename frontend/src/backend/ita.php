<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$students = [];
$sql = "SELECT * FROM  ita where unique_id=$id";
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $students[] = $row;
       // printf("%s"$row["Program"])
        
    }
    //$students[]=mysqli_fetch_assoc(mysqli_query($con,"SELECT AVG(att) as average FROM ita WHERE Program=$row["Program"]"));
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>



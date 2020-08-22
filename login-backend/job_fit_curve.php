<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$students = [];
$sql="select * from job_fit_curve where unique_id='$id'";
                      $result=mysqli_query($con,$sql);
                      $resultCheck=mysqli_num_rows($result);
                      $row=mysqli_fetch_assoc($result);
$analyst=$row['Analyst'];
$customersalesexecutive=$row['Customer_Sales_Executive'];
$graduateengineerplant=$row['Graduate_Engineer_Plant'];
$graduateengineerrd=$row['Graduate_Engineer_RD'];
$networkengineer=$row['Network_Engineer'];
$operationsandexecutive=$row['Operations_and_Executive'];
$softwaredeveloper=$row['Software_Developer'];
$softwareengineer=$row['Software_Engineer'];
$softwaretester=$row['Software_Tester'];
$result1=(int)(($analyst+$customersalesexecutive+$graduateengineerplant+$graduateengineerrd+$networkengineer+$operationsandexecutive+$softwaredeveloper+
$softwareengineer+$softwaretester)/9);



if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $students[] = $row;
       // printf("%s"$row["Program"])
        
    }
    //$students[]=mysqli_fetch_assoc(mysqli_query($con,"SELECT AVG(att) as average FROM ita WHERE Program=$row["Program"]"));
    echo(json_encode($result1));
}
else{
    http_response_code(404);
}
?>



<?php
require_once "auth.php";

$postdata = file_get_contents("php://input");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = $_GET['id'];
    $Analyst = $request->Analyst;
    $CustomerSales = $request->CustomerSales;
    $PlantEngineer = $request->PlantEngineer;
    $RRDEngineer = $request->RRDEngineer;
    $NetworkEngineer = $request->NetworkEngineer;
    $OperationsEngineer = $request->OperationsEngineer;
    $SoftwareEngineer = $request->SoftwareEngineer;
    $SoftwareDeveloper =$request->SoftwareDeveloper;
    $SoftwareTester = $request->SoftwareTester;

    $sql = "UPDATE `job_fit_curve` SET `Analyst`=$Analyst,`Customer_Sales_Executive`=$CustomerSales,`Graduate_Engineer_Plant`=$PlantEngineer,`Graduate_Engineer_RD`=$RRDEngineer,`Network_Engineer`=$NetworkEngineer,`Operations_and_Executive`=$OperationsEngineer,`Software_Developer`=$SoftwareDeveloper,`Software_Engineer`=$SoftwareEngineer,`Software_Tester`=$SoftwareTester WHERE `unique_id`=$id";
    if(mysqli_query($con, $sql)){
        echo("Successfully Updated!");
        http_response_code(202);
    }
    else{
        http_response_code(422);
    }
}
<?php

require_once 'auth.php';

//print_r($_POST);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
//echo ("$postdata");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $UserID= $request->UserID;
    $Assessmentpatner= $request->Assessmentpatner;
    $Assessmentdate= $request->Assessmentdate;
    $AssessmentID= $request->AssessmentID; 
    $OverallAptitude= $request->OverallAptitude;   
    $English $request->English;   
    $Quantitative= $request->Quantitative;
    $Analytical= $request->Analytical;                                          
    $Domian= $request->Domian; 
    $ComputerFundamentals= $request->ComputerFundamentals; 
    $coding= $request->coding; 
    $WET= $request->WET; 
    $Personality= $request->Personality; 
    $Overallscore= $request->Overallscore; 
    $Overallrank= $request->Overallrank; 
    $Remarks= $request->Remarks; 
    
  // echo("<h1>$Type1</h1>");
                                                                            
                                                                            

    $sql = "INSERT INTO user (unique_Id,Assesement_Partner,Date,Assesement_ID,Overall_Aptitude,English,Quantitative,Analytical,Domain,Computer_Fundamentals,Coding,WET,,Personality,Over_all_Score,Overall_Rank,Remarks) VALUES
     ('$UserId','$Assessmentpatner','$Assessmentdate','$AssessmentID','$OverallAptitude','$English','$Quantitative','$Analytical','$Domian','$ComputerFundamentals','$coding','$WET','$Personality','$Overallscore','$Overallrank',)";

    if(mysqli_query($con,$sql)){
        //echo("$sql");
        echo("The data is inserted");
        http_response_code(201);
    }
    else{
        echo "$sql";
        http_response_code(422);
    }
}



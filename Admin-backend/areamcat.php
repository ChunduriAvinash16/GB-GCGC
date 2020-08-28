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
    $date= $request->date;
    $AssessmentID= $request->AssessmentID; 
    $logicalability= $request->logicalability;   
    $LPA= $request->LPA;   
    $Englishcomprehension= $request->Englishcomprehension;
    $ECP= $request->ECP;                                          
    $Quantitativeability= $request->Quantitativeability; 
    $QAP= $request->QAP; 
    $Automata= $request->Automata; 
    $AP= $request->AP; 
    $AutomataFix= $request->AutomataFix;
    $AFP= $request->AFP;
    $Domain1= $request->Domain1;
    $d1p= $request->d1p;
    $Domain2= $request->Domain2;
    $d2p= $request->d2p;
    $DomainAverage= $request->DomainAverage;
    $DP= $request->DP;
    $Overallscore= $request->Overallscore; 
    $Overallscorepercentail= $request->Overallscorepercentail;
    $Overallrank= $request->Overallrank; 
    $Remarks= $request->Remarks; 
    
  // echo("<h1>$Type1</h1>");
                                                                            
                                                                            

    $sql = "INSERT INTO are_amcat (Unique_Id,Date,Assesement_ID,1_Logical_Ability_900M,LAP,2_English_Comprehension_900M,ECP,3_Quantitative_Ability_900M,QAP,4_Automata_100M,AP,5_Automata_Fix_100M,AFP,6a_domain_1_900M,d1p,6b_domain_2_900M,d2p,6_Domain_Average,DP,&_Over_all_Score_3800,7_Overall_Score_Percentage,7_Overall_Rank,Remarks) VALUES ($UserID,'$date',$AssessmentId,'$logicalability','$LPA','$Englishcomprehension','$ECP','$Quantitativeability','$QAP','$Automata','$AP','$AutomataFix','$AFP','$Domain1','$d1p','$Domain2','$d2p','$DomainAverage','$DP','$Overallscore','$Overallscorepercentail','$Overallrank','$Remarks')";
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

?>


    
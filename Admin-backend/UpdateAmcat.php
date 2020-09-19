<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $id = $_GET['id'];
    $LogicalAbility:$request->LogicalAbility,
    $EnglishComprehension:$request->EnglishComprehension,
    $QuantitativeAbility:$request->QuantitativeAbility,
    $Automata:$request->Automata,
    $AutomataFix:$request->AutomataFix,
    $Domain1:$request->Domain1,
    $Domain2:$request->Domain2
    $sql="UPDATE `are_amcat` SET 
    `1_Logical_Ability_900M`=$LogicalAbility,`2_English_Comprehension_900M`=$EnglishComprehension,
    `3_Quantitative_Ability_900M`=$QuantitativeAbility,`4_Automata_100M`=$Automata,
    `5_Automata_Fix_100M`=$AutomataFix,`6a_domain_1_900M`=$Domain1,`6b_domain_2_900M`=$Domain2,`6_Domain_Average`=[value-18],`7_Overall_Score_3800`=[value-20],
    `7_Overall_Score_Percentage`=[value-21],`7_Overall_Rank`=[value-22],`Remarks`=[value-23] WHERE `Unique_Id`"
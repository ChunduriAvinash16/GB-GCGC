<?php

require_once 'auth.php';
echo "working";

//print_r($_POST);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $CompanyID = $request->CompanyID ;
    $CompanyName= $request->CompanyName;
    $CompanyLogo= $request->CompanyLogo;
    $Companyofficialwebsite= $request->Companyofficialwebsite;
    $Employeestrength= $request->Employeestrength;  
    $Annualturnover= $request->Annualturnover;  
    $Aboutthecompany= $request->Aboutthecompany;  
    $Analytical= $request->Analytical;  
    $HRName= $request->HRName;  
    $Techinicalinterviewername= $request->Techinicalinterviewername;  
    $to_date= strtotime($request->RecruitmentDate);
    
    $to = date('Y-m-d',$to_date);

  // echo("<h1>$Type1</h1>");
    echo($CompanyID);
    $sql = "INSERT INTO companies(`company_id`, `company_name`, `company_logo`, `website_company`, `employee_strength`, `annual_turnover`, `about_the_company`, `HR_name`, `Technical_interviwer_name`, `date_of_recruitment`) 
    VALUES 
    ('$CompanyID','$CompanyName','$CompanyLogo','$Companyofficialwebsite','$Employeestrength','$Annualturnover','$Aboutthecompany','$Analytical',
    '$HRName','$Techinicalinterviewername','$to_date')";
    echo($sql);

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

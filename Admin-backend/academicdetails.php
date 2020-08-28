<?php
echo "working";

require_once 'auth.php';

print_r("$_POST");
// print_r("$con");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
echo ($postdata);
if(isset($postdata) && !empty($postdata)){
      $request = json_decode($postdata);

      $UserID = $request->UserID;
      $YearofPassing = $request->YearofPassing;
      $SSC = $request->SSC;
      $INTER = $request->INTER;
      $Branch = $request->Branch;
      $Program= $request->Program;
      $GPA = $request->GPA;
      $PassCategory = $request->PassCategory;
      $ActiveBacklog = $request->ActiveBacklog;
      $Section= $request->Section;
      $Resume = $request->Resume;
     
 // echo("<h1>$Type1</h1>");

$sql = "INSERT INTO academic_details (user_id, YOP, SSC_percent,inter_percent, Branch, Program, b_tech_gpa, pass_category, no_of_backlogs, section, resume) VALUES ($UserID,'$YearofPassing','$SSC ','$INTER ','$change ''$Program','$GPA ','$PassCategory ','$ActiveBacklog ','$Section','$Resume')";
//echo ("$sql");
    if(mysqli_query($con,$sql)){
        //echo("$sql");
        echo("The data is inserted");
        http_response_code(201);
    }
    else{
        echo ("$sql");
        http_response_code(422);
    }
}
?>

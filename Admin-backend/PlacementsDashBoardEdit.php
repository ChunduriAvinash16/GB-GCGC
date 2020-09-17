<?php
require_once 'auth.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$year = $_GET['id'];
$students = [];
$sql = "SELECT `placements_dash`.`Date`,`companies`.`Company_name`,`placements_dash`.`Date`,
`placements_dash`.`CTC` FROM `placements_dash`,`companies`
 WHERE `placements_dash`.`cid`=`companies`.`company_id` and `placements_dash`.`YOP`=$year";
$status="";
$ct=0;
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
    	$students[$ct]["sno"]=$ct+1;
        $students[$ct]["Date"] = $row["Date"];
        $students[$ct]["Company_name"] = $row["Company_name"];
        $students[$ct]["CTC"] = $row["CTC"];
        $ct++;
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
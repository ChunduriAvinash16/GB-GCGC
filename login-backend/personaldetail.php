<?php

require "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$id = $_GET['id'];
$students = [];
$sql = "SELECT   academic_details.user_id,academic_details.YOP, academic_details.Program, academic_details.Branch , academic_details.section,personal_details_mdb.first_name,personal_details_mdb.middle_name,personal_details_mdb.last_name,personal_details_mdb.DOB,personal_details_mdb.gender,personal_details_mdb.blood_group,
	personal_details_mdb.father_name,personal_details_mdb.mother_name,
	personal_details_mdb.reservation_on_category from academic_details,personal_details_mdb where academic_details.user_id=$id and academic_details.user_id=personal_details_mdb.user_id";
if($result=mysqli_query($con,$sql)){
    while($row=mysqli_fetch_assoc($result)){
        $students["user_id"] = $row["user_id"];
        $students["first_name"] = $row["first_name"];
        $students["middle_name"] = $row["middle_name"];
        $students["last_name"] = $row["last_name"];
        $students["YOP"] = $row["YOP"];
        $students["Branch"] = $row["Branch"];
        $students["Program"] = $row["Program"];
        $students["section"] = $row["section"];
        $students["DOB"] = $row["DOB"];
        $students["father_name"] = $row["father_name"];
        $students["mother_name"] = $row["mother_name"];
        $students["reservation_on_category"] = $row["reservation_on_category"];
        $students["blood_group"] = $row["blood_group"];
        $students["gender"] = $row["gender"];
    }
    echo(json_encode($students));
}
else{
    http_response_code(404);
}
?>
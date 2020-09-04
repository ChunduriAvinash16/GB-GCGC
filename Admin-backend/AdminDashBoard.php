<?php

require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$students = [];
$year=$_GET["year"];
if($year=="2022" || $year=="2023" )
{
    $students["Eligible"]=0;
	$students["Placed"]=0;
	$students["Not_placed"]=0;
	$students["total_drives"]=0;
	$students["highest package"]=0;
	$students["least_package"]=0;
	$students["total_no.of_offers"]=0;
	$students["average_package"]=0;
    echo (json_encode($students));
}
else{
$sql = "SELECT * FROM `cdt2020`,`academic_details` WHERE `cdt2020`.`userid`=`academic_details`.`user_id` and `academic_details`.`YOP`=$year GROUP BY `cdt2020`.`userid`";
$result=mysqli_query($con,$sql);
$row=mysqli_num_rows($result);
$sql1="SELECT * FROM `cdt2020` JOIN `academic_details` where `cdt2020`.`userid`=`academic_details`.`user_id` and `academic_details`.`YOP`=$year and `attendance`='P' and `WTS`='Y' and (`GDS`='Y' or `GDS`='NA') and (`TIS`='Y' or `TIS`='NA') and (`PIU`='Y' or `PIU`='NA') group by userid";
$result=mysqli_query($con,$sql1);
$row1=mysqli_num_rows($result);
$sql3="SELECT COUNT(*) as count FROM `company-yop` WHERE `YOP`=$year";
$result=mysqli_query($con,$sql3);
$row3=mysqli_fetch_assoc($result);
$sql4="SELECT MAX(`LPA`) as max FROM `company-yop` WHERE `YOP`=$year";
$result=mysqli_query($con,$sql4);
$row4=mysqli_fetch_assoc($result);
$sql5="SELECT MIN(`LPA`) as min FROM `company-yop` WHERE `YOP`=$year";
$result=mysqli_query($con,$sql5);
$row5=mysqli_fetch_assoc($result);
$sql6="SELECT * FROM `cdt2020` JOIN `academic_details` where `cdt2020`.`userid`=`academic_details`.`user_id` and `academic_details`.`YOP`=$year and `attendance`='P' and `WTS`='Y' and (`GDS`='Y' or `GDS`='NA') and (`TIS`='Y' or `TIS`='NA') and (`PIU`='Y' or `PIU`='NA')";
$result=mysqli_query($con,$sql6);
$row6=mysqli_num_rows($result);
$sqlnrl="SELECT MAX(count) as max from (SELECT COUNT(`LPA`) as count FROM `company-yop` WHERE `YOP`=$year GROUP BY `LPA`)as count1";
$result=mysqli_query($con,$sqlnrl);
$rownrl=mysqli_fetch_assoc($result);
$sql7="SELECT COUNT(`LPA`) as count,`LPA` FROM `company-yop` WHERE `YOP`=$year GROUP BY `LPA` HAVING COUNT(`LPA`)=".$rownrl['max']." ORDER BY `LPA` DESC";
if($result=mysqli_query($con,$sql7)){
    while($row7=mysqli_fetch_assoc($result)){
        $students["Eligible"]=$row;
		$students["Placed"]=$row1;
		$students["Not_placed"]=$row-$row1;
		$students["total_drives"]=$row3['count'];
		$students["highest package"]=$row4['max'];
		$students["least_package"]=$row5['min'];
		$students["total_no.of_offers"]=$row6;
		$students["average_package"]=$row7['LPA'];
    }
    echo (json_encode($students));
}
else{
    http_response_code(404);
}
}
?>
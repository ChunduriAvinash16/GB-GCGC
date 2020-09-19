<?php 
require_once "auth.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $CompanyName=$request->CompanyName;
    $YOP=$request->YOP;
    $DateOfInter=$request->DateOfInter;
    $Campus=$request->Campus;
    $JobDescript=$request->JobDescript;
    $Gender=$request->Gender;
    $PackageOffered=$request->PackageOffered;
    $Backlogs=$request->Backlogs;
    $CompanyURL=$request->CompanyURL;
    $SSC=$request->SSC;
    $Inter=$request->Inter;
    $ListOfStudents=$request->ListOfStudents;
    $selected=$request->selected;
    echo($selected[0]);
    $to_date= strtotime($DateOfInter);
    $to = date('Y-m-d',$to_date);
    if($result=mysqli_query($con,"select max(company_id) from `companies`")){
        $ct=0;
        while($row=mysqli_fetch_assoc($result)){
            $cid[$ct]=$row;
            $ct++;
        }
    }
    $cid=json_decode(json_encode($cid[0]));
    echo($cid->company_id);
    $companyid=$cid->company_id;
    $companyid++;
    $sql="INSERT INTO `companies`(`company_id`,`company_name`,  `website_company`, `date_of_recruitment`, `job_description`, `gender`, `backlogs`, 
    `ssc_cutoff`, `12th_cutoff`) VALUES 
    ($companyid,'$CompanyName','$CompanyURL','$to','$JobDescript','$Gender','$Backlogs','$SSC','$Inter')";
       if(mysqli_query($con,$sql)){
        echo("The data is inserted");
        $ct=0;
        $cid=[];
        if($result=mysqli_query($con,"SELECT `company_id` FROM `companies` WHERE `company_name`='$CompanyName'")){
            while($row=mysqli_fetch_assoc($result)){
                $cid[$ct]=$row;
                $ct++;
            }
        }
        echo($cid['company_id']);
        $cid=json_decode(json_encode($cid[0]));
        if(mysqli_query($con,"INSERT INTO `company-yop`(`cid`, `YOP`, `LPA`) VALUES ('$cid->company_id','$YOP','$PackageOffered')")){
            echo("Data inserted");
            http_response_code(202);
        }
        http_response_code(201);
    }
    else{
        echo "$sql";
        http_response_code(422);
    }
}
?>
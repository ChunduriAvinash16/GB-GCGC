<?php
    require 'auth.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    error_reporting(E_ERROR);
    $students=[];
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $category= $request->category;
    $batch= $request->batch;
    $gender=$request->gender;
    $sortby=$request->sortby;
    $jobeligible=$request->jobeligible;
    $jobsinhand=$request->jobsinhand;
    $cgpa=$request->cgpa;
    $tenth=$request->tenth;
    $twelve=$request->twelve;
    $backlogs=$request->back;
    $branches=$request->branches;
    if($category=="Any")
        $sql1="SELECT * from display_filtered_students";
    else
        $sql1="SELECT * from display_filtered_students where Program='$category'";
    if($batch=='nill')
        $sql2="SELECT * from display_filtered_students";
    else
        $sql2="SELECT * from display_filtered_students where YOP='$batch'";

    if($gender=="nill")
        $sql3="SELECT * from display_filtered_students";
    else
        $sql3="SELECT * from display_filtered_students where gender='$gender'";

    if($jobeligible=="nill")
        $sql4="SELECT * from display_filtered_students";
    else if($jobeligible=="yes")
        $sql4="SELECT * from display_filtered_students where b_tech_gpa>0";
    else
        $sql4="SELECT * from display_filtered_students where b_tech_gpa=0";
    if($jobsinhand=="-1")
        $sql5="SELECT * from display_filtered_students";
    else if($jobsinhand=="0")
        $sql5="SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students group by display_filtered_students.user_id
			EXCEPT
			SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students,cdt2020 WHERE cdt2020.PIU='Y' and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id HAVING COUNT(display_filtered_students.user_id)>0";
    else if($jobsinhand=="1")
        $sql5="SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students,cdt2020 WHERE cdt2020.PIU='Y' and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id HAVING COUNT(display_filtered_students.user_id)<=1";
    else if($jobsinhand=="2")
        $sql5="SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students,cdt2020 WHERE cdt2020.PIU='Y' and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id HAVING COUNT(display_filtered_students.user_id)<=2";
    else if($jobsinhand=="3")
        $sql5="SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students,cdt2020 WHERE cdt2020.PIU='Y' and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id HAVING COUNT(display_filtered_students.user_id)<=3";
    else if($jobsinhand=="4")
        $sql5="SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students,cdt2020 WHERE cdt2020.PIU='Y' and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id HAVING COUNT(display_filtered_students.user_id)<=4";
    else
        $sql5="SELECT display_filtered_students.user_id,display_filtered_students.first_name,display_filtered_students.middle_name,display_filtered_students.last_name,display_filtered_students.gender,display_filtered_students.YOP,display_filtered_students.Program,display_filtered_students.Branch,display_filtered_students.b_tech_gpa,display_filtered_students.SSC_percent,display_filtered_students.inter_percent,display_filtered_students.no_of_backlogs,display_filtered_students.pass_category from display_filtered_students,cdt2020 WHERE cdt2020.PIU='Y' and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id HAVING COUNT(display_filtered_students.user_id)>4";
    /*
    if($jobsinhand=="0")
        $sql5="SELECT * from display_filtered_students WHERE user_id NOT IN (SELECT display_filtered_students.user_id from display_filtered_students,cdt2020 WHERE cdt2020.PIU="Y" and display_filtered_students.user_id=cdt2020.userid group by display_filtered_students.user_id)";
    */
    $sql6="SELECT * from display_filtered_students where b_tech_gpa>='$cgpa'";
    $sql7="SELECT * from display_filtered_students WHERE `SSC_percent`>='$ten'";
    $sql8="SELECT * from display_filtered_students WHERE `inter_percent`>='$twelve'";
    if($backlogs==-1)
        $sql9="SELECT * from display_filtered_students WHERE `pass_category`='A'";
    else if($backlogs==0)
        $sql9="SELECT * from display_filtered_students WHERE `b_tech_gpa`>0";
    else if($backlogs<11)
        $sql9="SELECT * from display_filtered_students WHERE `no_of_backlogs`<='$backlogs'";
    else
        $sql9="SELECT * from display_filtered_students";
    if($branches=="All")
        $sql10="SELECT * from display_filtered_students";
    else
        $sql10="SELECT * from display_filtered_students where Branch LIKE '$branches%'";
    if($sortby=="user_id")
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10." ORDER BY user_id";
    else if($sortby=="first_name")
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10." ORDER BY first_name";
    else if($sortby=="Branch")
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10." ORDER BY Branch";
    else if($sortby=="b_tech_gpa")
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10." ORDER BY b_tech_gpa";
    else if($sortby=="SSC_percent")
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10." ORDER BY SSC_percent";
    else if($sortby=="inter_percent")
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10." ORDER BY inter_percent";
    else
        $sql=$sql1." INTERSECT ".$sql2." INTERSECT ".$sql3." INTERSECT ".$sql4." INTERSECT ".$sql5." INTERSECT ".$sql6." INTERSECT ".$sql7." INTERSECT ".$sql8." INTERSECT ".$sql9." INTERSECT ".$sql10;
    if($result = mysqli_query($con,$sql))
    {
        $cr=0;
        while($row = mysqli_fetch_assoc($result))
        {
            $students[$cr]['id']=$row['user_id'];
            $students[$cr]['fname']=$row['first_name'];
            $students[$cr]['mname']=$row['middle_name'];
            $students[$cr]['lname']=$row['last_name'];
            $students[$cr]['Branch']=$row['Branch'];
            $students[$cr]['sscmarks']=$row['SSC_percent'];
            $students[$cr]['intermarks']=$row['inter_percent'];
            $students[$cr]['btechgpa']=$row['b_tech_gpa'];
            $students[$cr]['batch']=$row['YOP'];
            $cr++;
        }
        echo json_encode($students);
    }
    else
    {
        http_response_code(404);
    }
?>
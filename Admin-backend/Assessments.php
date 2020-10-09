<?php
    require 'auth.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    error_reporting(E_ERROR);
    $search=$_GET['search'];
    $students=[];
    $sql="SELECT `YOP`,`Date`,MAX(`Overall _Score`) as `max`,MIN(`Overall _Score`) as `min`,round((SUM(`Overall _Score`)/COUNT(`Overall _Score`)),0) as `avg` FROM `amcat_analysis`,`academic_details`,`are_amcat` WHERE `amcat_analysis`.`Unique_Id`=`are_amcat`.`Unique_Id` AND `are_amcat`.`Unique_Id`=`academic_details`.`user_id` AND `Overall _Score`<>0 GROUP BY `YOP`";
    if($result = mysqli_query($con,$sql))
    {
        $cr=0;
        while($row = mysqli_fetch_assoc($result))
        {
            $YOP=$row['YOP'];
            $sql1="SELECT COUNT(*) as `attended`,`YOP` FROM `are_amcat`,`academic_details` WHERE `academic_details`.`user_id`=`are_amcat`.`Unique_Id` AND `Assessment_ID`<>'NA' AND (`1_Logical_Ability_900M`+`2_English_Comprehension_900M`+`3_Quantitative_Ability_900M`+`4_Automata_100M`+`5_Automata_Fix_100M`+`6a_domain_1_900M`+`6b_domain_2_900M`)<>0 AND `YOP`=".$YOP;
            $result1 = mysqli_query($con,$sql1);
            $row1 = mysqli_fetch_assoc($result1);
            $sql2="SELECT COUNT(*) as `absent`,`YOP` FROM `are_amcat`,`academic_details` WHERE `academic_details`.`user_id`=`are_amcat`.`Unique_Id` AND `Assessment_ID`<>'NA' AND (`1_Logical_Ability_900M`+`2_English_Comprehension_900M`+`3_Quantitative_Ability_900M`+`4_Automata_100M`+`5_Automata_Fix_100M`+`6a_domain_1_900M`+`6b_domain_2_900M`)=0 AND `YOP`=".$YOP;
            $result2 = mysqli_query($con,$sql2);
            $row2 = mysqli_fetch_assoc($result2);
            $students[$cr]['sno']=$cr+1;
            $students[$cr]['assessment']='AMCAT';
            $students[$cr]['YOP']=$row['YOP'];
            $students[$cr]['Date']=$row['Date'];
            $students[$cr]['attended']=$row1['attended'];
            $students[$cr]['absent']=$row2['absent'];
            $students[$cr]['max']=$row['max'];
            $students[$cr]['min']=$row['min'];
            $students[$cr]['avg']=$row['avg'];
            $cr++;
        }
    }
    else
    {
        http_response_code(404);
    }
    $sql="SELECT `YOP`,`assesment_no`,`Date`,MAX(`Over_all_Score`) as `max`,MIN(`Over_all_Score`) as `min`,round(AVG(`Over_all_Score`),0) as `avg` FROM `are_cocubes`,`academic_details` WHERE `are_cocubes`.`Unique_Id`=`academic_details`.`user_id` AND `Over_all_Score`<>0 AND `Assement_ID`<>0 GROUP BY `YOP`,`assesment_no`";
    if($result = mysqli_query($con,$sql))
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $YOP=$row['YOP'];
            $assessment=$row['assesment_no'];
            $sql1="SELECT COUNT(*) AS `attended`,`YOP`,`assesment_no` FROM `are_cocubes`,`academic_details` WHERE `are_cocubes`.`Unique_Id`=`academic_details`.`user_id` AND `Over_all_Score`<>0 AND `Assement_ID`<>0 AND `YOP`=".$YOP." AND `assesment_no`=".$assessment;
            $result1 = mysqli_query($con,$sql1);
            $row1 = mysqli_fetch_assoc($result1);
            $sql2="SELECT COUNT(*) AS `absent`,`YOP`,`assesment_no` FROM `are_cocubes`,`academic_details` WHERE `are_cocubes`.`Unique_Id`=`academic_details`.`user_id` AND `Over_all_Score`=0 AND `Assement_ID`<>0 AND `YOP`=".$YOP." AND `assesment_no`=".$assessment;
            $result2 = mysqli_query($con,$sql2);
            $row2 = mysqli_fetch_assoc($result2);
            $students[$cr]['sno']=$cr+1;
            $students[$cr]['assessment']='COCUBES-'.$assessment;
            $students[$cr]['YOP']=$row['YOP'];
            $students[$cr]['Date']=$row['Date'];
            $students[$cr]['attended']=$row1['attended'];
            $students[$cr]['absent']=$row2['absent'];
            $students[$cr]['max']=$row['max'];
            $students[$cr]['min']=$row['min'];
            $students[$cr]['avg']=$row['avg'];
            $cr++;
        }
    }
    else
    {
        http_response_code(404);
    }
    $sql="SELECT * FROM `ari_date_yop` ORDER BY `name`,`yop`";
    $result = mysqli_query($con,$sql);
    if($result = mysqli_query($con,$sql))
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $YOP=$row['yop'];
            $assessment=$row['ari'];
            $sql1="SELECT AVG(`".$assessment."`) as `avg` FROM `ari`,`academic_details` WHERE `ari`.`Unique_Id`=`academic_details`.`user_id` GROUP BY `academic_details`.`YOP` HAVING `academic_details`.`YOP`=".$YOP;
            $result1 = mysqli_query($con,$sql1);
            $row1 = mysqli_fetch_assoc($result1);
            $sql2="SELECT MAX(`".$assessment."`) as `max` FROM `ari`,`academic_details` WHERE `ari`.`Unique_Id`=`academic_details`.`user_id` GROUP BY `academic_details`.`YOP` HAVING `academic_details`.`YOP`=".$YOP;
            $result2 = mysqli_query($con,$sql2);
            $row2 = mysqli_fetch_assoc($result2);
            $sql3="SELECT MIN(`".$assessment."`) as `min` FROM `ari`,`academic_details` WHERE `ari`.`Unique_Id`=`academic_details`.`user_id` and `".$assessment."`>=0 GROUP BY `academic_details`.`YOP` HAVING `academic_details`.`YOP`=".$YOP;
            $result3 = mysqli_query($con,$sql3);
            $row3 = mysqli_fetch_assoc($result3);
            $sql4="SELECT COUNT(`".$assessment."`) as `count` FROM `ari`,`academic_details` WHERE `ari`.`Unique_Id`=`academic_details`.`user_id` and `".$assessment."`<>-20 GROUP BY `academic_details`.`YOP` HAVING `academic_details`.`YOP`=".$YOP;
            $result4 = mysqli_query($con,$sql4);
            $row4 = mysqli_fetch_assoc($result4);
            $sql5="SELECT COUNT(`".$assessment."`) as `count` FROM `ari`,`academic_details` WHERE `ari`.`Unique_Id`=`academic_details`.`user_id` and `".$assessment."`=-20 GROUP BY `academic_details`.`YOP` HAVING `academic_details`.`YOP`=".$YOP;
            $result5 = mysqli_query($con,$sql5);
            $row5 = mysqli_fetch_assoc($result5);
            if($row5['count']=='')
                $row5['count']=0;
            $students[$cr]['sno']=$cr+1;
            $students[$cr]['assessment']=$row['name'];;
            $students[$cr]['YOP']=$row['yop'];
            $students[$cr]['Date']=$row['date'];
            $students[$cr]['attended']=$row4['count'];
            $students[$cr]['absent']=$row5['count'];
            $students[$cr]['max']=$row2['max'];
            $students[$cr]['min']=$row3['min'];
            $students[$cr]['avg']=round($row1['avg'],2);
            $cr++;
        }
    }
    else
    {
        http_response_code(404);
    }
    echo json_encode($students);
?>
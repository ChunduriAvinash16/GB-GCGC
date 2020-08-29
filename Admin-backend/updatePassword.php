<?php
require_once "auth.php";

$postdata = file_get_contents("php://input");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = $_GET['id'];
    $oldpassword = $request->oldpassword;
    $newpassword = $request->newpassword;
    $verifypassword = $request->verifypassword;
    if($newpassword!=$verifypassword){
        $msg ="New Password and confirm password does not match";
        echo "$msg";
    }
    $sql = mysqli_query($con,"SELECT * FROM user WHERE user_id = '$id'");
    $rows=mysqli_fetch_assoc($sql);
    $field1name = $rows["password"];
    if($field1name!=$oldpassword){
        $msg="Invalid Old Password";
        echo "$msg";
    }
    else{
        $s ="UPDATE user SET password='$verifypassword' WHERE user_id='$id'";
        if(mysqli_query($con, $s)){
            echo("Successfully Password Updated!");
            http_response_code(202);
        }
        else{

            http_response_code(422);
        }
    }
}
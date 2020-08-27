<?php
    require 'auth.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    error_reporting(E_ERROR);
    $id = $_GET['id'];
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $oldpassword= $request->oldpassword;
    $newpassword= $request->newpassword;    
    $verifypassword= $request->verifypassword;
    $sql="SELECT * FROM `user` WHERE `user_id`=$id";
    $result=mysqli_query($con,$sql);
    $row=mysqli_fetch_assoc($result);
    echo $row["password"];
    echo $oldpassword;
    if($oldpassword==$row["password"])
    {
    	if($newpassword==$verifypassword)
    	{
    		$query="UPDATE `user` SET `password`='$newpassword' WHERE `user_id`=$id";
    		$result=mysqli_query($con,$query);
    		echo "Successful";
    	}
    	else
    		echo "Passwords donot match";
    }
    else
    	echo "Password Validation Failed";
?>
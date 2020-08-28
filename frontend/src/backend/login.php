<?php

require 'auth.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $login_id= $request->Login_id;
    $password= $request->password;
    $sql = "SELECT * FROM user  where user_id=$login_id and password='$password'";
    $result = mysqli_query($con,$sql);
            if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $items[] = $row;
                echo json_encode($items);
            }
            } else {
            echo "0 results";
            }
    /*if(mysqli_query($con,$sql)){
        http_response_code(201);
    }
    else{
        http_response_code(422);
        echo "Inavalid";
    }*/
}
?>
<?php
    require 'auth.php';
    $col='AT1_score';
    $sql="SELECT ".$col." from ari where Unique_id=321710303054";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_assoc($result);
    $ans=$row[$col];
    echo $ans;
?>
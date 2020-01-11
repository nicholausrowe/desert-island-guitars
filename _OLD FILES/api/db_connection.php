<?php

$conn = mysqli_connect('localhost', 'root', 'root', 'wickedsales', '3000');

if (!$conn){
throw new Exception(mysqli_connect_error());
};

?>

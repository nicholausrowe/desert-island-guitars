<?php
require_once('db_connection.php');
require_once('functions.php');
set_exception_handler('error_handler');

startup();

if (empty($_GET['id'])) {
  $whereClause = "";
} else if (!is_numeric($_GET['id'])) {
  throw new Exception("id needs to be a number");
} else {
  $whereClause = "WHERE `id` = {$_GET['id']}";
};

$query = "SELECT * FROM `products` {$whereClause}";

$result = mysqli_query($conn, $query);
//$result = $conn->query($query);

if (!$result) {
  throw new Exception("Connect failed: " . mysqli_connect_error());
};

if (!empty($_GET['id']) && mysqli_num_rows($result) === 0) {
  throw new Exception("Invalid ID: {$_GET['id']}");
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

if (count($output) === 1){
  $output = $output[0];
};

print(json_encode($output));

?>

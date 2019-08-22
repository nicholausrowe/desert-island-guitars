<?php
require_once('functions.php');
set_exception_handler('error_handler');

header('Content-Type: application/json');

$output = file_get_contents('dummy-products-list.json');

print($output);



// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }



?>

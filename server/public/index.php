<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/health-check':
    require_once "..${request['path']}.php";
  case '/api/products':
    require_once "..${request['path']}.php";
  case '/api/cart':
    require_once "..${request['path']}.php";
  case '/api/orders':
    require_once "..${request['path']}.php";

  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}

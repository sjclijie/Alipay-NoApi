<?php
$dsn = 'mysql:host=localhost;dbname=tpay';

$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 

$db= new PDO($dsn, "root", "", $options);
?>
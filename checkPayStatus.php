<?php

require_once("common/config.php");

$query = $db->query("select * from tpay_orders where orderid = ".intval($_GET['orderid']));
$query->setFetchMode(PDO::FETCH_ASSOC);
$record = $query->fetchAll();
if($record[0]['payed'] == 0){
	echo "NO_PAID";
}else{
	echo $record[0]['payed'];
}
?>
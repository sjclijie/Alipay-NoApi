<?php

$re = "/.*?商品名.*?(\\d+)-.*?.*?交易状态.*?交易成功.*?购买总价.*?(\\d+\\.\\d+)元/s"; 
preg_match($re, $_POST['body-plain'], $matches);
require_once("common/config.php");

if(!empty($matches[0])){
	if($_POST['sender'] != "service@mail.alipay.com"){
			$query = $db->exec("INSERT INTO `tpay`.`tpay_log` (`id`, `ip`, `operate`, `location`, `time`) VALUES ('".$matches[1]."', NULL, 'Fake mail ,".$matches[2].$_POST['Sender']."', NULL, '".time()."');");
	}else{
	$query = $db->exec("INSERT INTO `tpay`.`tpay_log` (`id`, `ip`, `operate`, `location`, `time`) VALUES ('".$matches[1]."', NULL, 'Received mail from mailgun ,".$matches[2].$_POST['Sender']."', NULL, '".time()."');");
	$query = $db->exec("UPDATE `tpay`.`tpay_orders` SET `payed` = '".$matches[2]."' WHERE `tpay_orders`.`orderid` = ".$matches[1].";");
	}
}else{
	$query = $db->exec("INSERT INTO `tpay`.`tpay_log` (`id`, `ip`, `operate`, `location`, `time`) VALUES ('0', NULL, 'Mail Content Error', NULL, '".time()."');");

}
?>
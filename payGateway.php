<?php
require_once("common/config.php");

$orderid = str_replace('.','',microtime(true));
$uid = intval($_GET['uid']);
$itemid = intval($_GET['itemid']);

$query = $db->exec("INSERT INTO `tpay`.`tpay_orders` (`orderid`, `uid`, `itemid` ,`client_ip`, `payed`) VALUES ('".$orderid."', '".$uid."', '".$itemid."','".$_SERVER['REMOTE_ADDR']."', '0');");
if($query === false){
	die("订单创建失败");
}

$query = $db->query("select * from tpay_item where id = ".intval($_GET['itemid']));
$query->setFetchMode(PDO::FETCH_ASSOC);
$item = $query->fetchAll();
$itemname  = mb_convert_encoding($item[0]['name'], "GBK", "UTF-8");
?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/style.css">
<title>请稍后</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
如果长时间没有跳转，请刷新页面。
<form id="a" action="https://shenghuo.alipay.com/send/payment/fill.htm" method="post">
<input type="hidden" name="optEmail" value="pay@eqoe.cn">
<input type="hidden" name="payAmount" value="<?php echo $item[0]['price'];?>">
<input type="hidden" name="title" value="<?php echo $orderid."-".$itemname."-TYPCNPAY"; ?>">
<input type="submit">
</form>
<script type="text/javascript">
window.opener.setOrderid("<?php echo $orderid; ?>");
document.getElementById("a").submit();
</script>
</body>
</html>
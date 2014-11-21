-- phpMyAdmin SQL Dump
-- version 4.2.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2014-11-21 10:09:43
-- 服务器版本： 5.5.37-log
-- PHP Version: 5.5.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tpay`
--

-- --------------------------------------------------------

--
-- 表的结构 `tpay_item`
--

CREATE TABLE IF NOT EXISTS `tpay_item` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `dsc` varchar(500) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- 表的结构 `tpay_log`
--

CREATE TABLE IF NOT EXISTS `tpay_log` (
  `id` bigint(20) NOT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `operate` varchar(200) NOT NULL,
  `location` varchar(30) DEFAULT NULL,
  `time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `tpay_orders`
--

CREATE TABLE IF NOT EXISTS `tpay_orders` (
  `orderid` bigint(14) NOT NULL,
  `uid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `client_ip` varchar(15) NOT NULL,
  `payed` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tpay_item`
--
ALTER TABLE `tpay_item`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tpay_log`
--
ALTER TABLE `tpay_log`
 ADD UNIQUE KEY `time` (`time`);

--
-- Indexes for table `tpay_orders`
--
ALTER TABLE `tpay_orders`
 ADD UNIQUE KEY `orderid` (`orderid`), ADD KEY `uid` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tpay_item`
--
ALTER TABLE `tpay_item`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;
INSERT INTO `tpay_item` (`id`, `name`, `price`, `dsc`) VALUES (NULL, 'test item', '0.01', 'sample');
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

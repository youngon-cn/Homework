-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-23 22:47:51
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `datalist`
--

-- --------------------------------------------------------

--
-- 表的结构 `datas`
--

CREATE TABLE IF NOT EXISTS `datas` (
  `Name` tinytext,
  `Emali` tinytext,
  `Account` tinytext,
  `Password` int(11) DEFAULT NULL,
  FULLTEXT KEY `Name` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `datas`
--

INSERT INTO `datas` (`Name`, `Emali`, `Account`, `Password`) VALUES
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('ç”°æˆ', '1805170243@qq.com', '', 123456),
('æ°¸é˜¿è¾¾', '180243@qq.co', 'Q123456', 52058),
('æ°¸é˜¿', '180243@qq.co', 'Q123456', 52058),
('ç”°é™ˆæ°¸', '1805170243@qq.com', 'q123456', 123456),
('ç”°é™ˆæ°¸', '18051702423@qq.com', 'q1234567', 123456),
('', '', '', 0),
('ç”°é™ˆc', '18051243@qq.cma', 'q1234566ca', 123456),
('', '', '', 0),
('ç”°å‘', '180243@qq.caa', 'h123464a', 0),
('ç”°è¾°', '1805170243@qq.com', 'q2365421', 123456),
('å•Šå¤§å¤§', '18051743@qq.com', 'QQQ123546', 1234567),
('é£žé£ž', '1805170243@qq.coml', 'k123456', 654321);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

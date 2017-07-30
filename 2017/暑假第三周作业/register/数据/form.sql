-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-30 09:48:43
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `form`
--

-- --------------------------------------------------------

--
-- 表的结构 `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `math` int(255) NOT NULL AUTO_INCREMENT,
  `id` text NOT NULL,
  `account` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`math`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `data`
--

INSERT INTO `data` (`math`, `id`, `account`, `email`, `password`, `data`) VALUES
(1, 'ç”°é™ˆæ°¸', 0, '1805170243@qq.com', '4280d89a5a03f812751f504cc10ee8a5', '2017-07-29 13:00:05');

-- --------------------------------------------------------

--
-- 表的结构 `information`
--

CREATE TABLE IF NOT EXISTS `information` (
  `math` int(255) NOT NULL AUTO_INCREMENT,
  `data` varchar(255) NOT NULL,
  `day` datetime DEFAULT NULL,
  PRIMARY KEY (`math`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=87 ;

--
-- 转存表中的数据 `information`
--

INSERT INTO `information` (`math`, `data`, `day`) VALUES
(7, 'ddddddddddddddd', '2017-07-29 17:08:25'),
(8, 'ddddddddddddddd', '2017-07-29 17:08:25'),
(9, 'adadada', '2017-07-29 17:09:12'),
(10, 'adadada', '2017-07-29 17:09:12'),
(11, 'dadad', '2017-07-29 17:12:17'),
(12, 'dadad', '2017-07-29 17:12:17'),
(13, 'adadad', '2017-07-29 17:22:55'),
(14, 'adadad', '2017-07-29 17:22:55'),
(15, 'adada', '2017-07-29 17:23:40'),
(16, 'adada', '2017-07-29 17:23:40'),
(17, 'adadad', '2017-07-29 17:25:12'),
(18, 'adadad', '2017-07-29 17:25:12'),
(19, 'aaaaa', '2017-07-29 17:26:25'),
(20, 'aaaaa', '2017-07-29 17:26:25'),
(21, 'adada', '2017-07-29 17:32:09'),
(22, 'adada', '2017-07-29 17:32:09'),
(23, 'adada', '2017-07-29 17:32:22'),
(24, 'adada', '2017-07-29 17:32:22'),
(25, 'dddddddddddddTTTTTTTTTTT', '2017-07-29 17:32:37'),
(26, 'dddddddddddddTTTTTTTTTTT', '2017-07-29 17:32:37'),
(27, 'AAAAAAAAAAAAAAAAAAAAAAAAAA', '2017-07-29 17:32:45'),
(28, 'AAAAAAAAAAAAAAAAAAAAAAAAAA', '2017-07-29 17:32:45'),
(29, 'AAAAAAAAAAAAAAAAVVVVVVVVVVVVVV', '2017-07-29 17:32:53'),
(30, 'AAAAAAAAAAAAAAAAVVVVVVVVVVVVVV', '2017-07-29 17:32:53'),
(31, 'DADAD', '2017-07-29 17:34:05'),
(32, 'DADAD', '2017-07-29 17:34:05'),
(33, 'adabå•µå•µå•µå•µå•µå•µå•µå•µå•µå®å®', '2017-07-29 17:35:44'),
(34, 'adabå•µå•µå•µå•µå•µå•µå•µå•µå•µå®å®', '2017-07-29 17:35:44'),
(35, '4444', '2017-07-29 17:38:52'),
(36, '4444', '2017-07-29 17:38:52'),
(37, '45687', '2017-07-29 17:39:04'),
(38, '45687', '2017-07-29 17:39:04'),
(39, 'å•Šå¤§å¤§', '2017-07-29 17:41:41'),
(40, 'å•Šå¤§å¤§', '2017-07-29 17:41:41'),
(41, 'å•Šå¤§å¤§', '2017-07-29 17:42:05'),
(42, 'æ€¥æ€¥æ€¥', '2017-07-29 17:42:11'),
(43, 'å•Šå¤§å¤§', '2017-07-29 17:45:09'),
(44, 'aè¾¾åˆ°', '2017-07-29 17:45:37'),
(45, 'é˜¿è¾¾', '2017-07-29 17:47:42'),
(46, 'å•Šå¤§å¤§', '2017-07-29 17:48:06'),
(47, 'é˜¿è¾¾', '2017-07-29 17:52:33'),
(49, 'é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶', '2017-07-29 17:52:39'),
(50, 'é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶é¡¶\r\næˆ‘æ¥äº†\r\n', '2017-07-29 17:52:47'),
(51, 'å•Šå¤§å¤§', '2017-07-29 17:55:56'),
(52, 'å•Šå¤§å¤§', '2017-07-29 17:56:18'),
(53, 'çš„', '2017-07-29 17:56:25'),
(54, 'é˜¿è¾¾', '2017-07-29 17:57:04'),
(55, 'é˜¿è¾¾', '2017-07-29 17:57:41'),
(58, 'ç­‰ç­‰', '2017-07-29 18:06:12'),
(59, 'ç­‰ç­‰', '2017-07-29 18:06:38');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

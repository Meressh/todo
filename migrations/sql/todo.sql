-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 07, 2022 at 10:01 AM
-- Server version: 8.0.30-0ubuntu0.22.04.1
-- PHP Version: 8.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `text` text COLLATE utf8mb4_general_ci,
  `deadline` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `todoId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `title`, `text`, `deadline`, `userId`, `type`, `todoId`, `createdAt`, `updatedAt`) VALUES
(1, 'This is title item 1', 'This is text/description item 1', '2022-09-6 9:58:46', 1, 'active', 1, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(2, 'This is title item 2', 'This is text/description item 2', '2022-09-6 9:58:46', 1, 'active', 1, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(3, 'This is title item 3', 'This is text/description item 3', '2022-09-6 9:58:46', 1, 'canceled', 2, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(4, 'This is title item 4', 'This is text/description item 4', '2022-09-6 9:58:46', 2, 'active', 1, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(5, 'This is title item 5', 'This is text/description item 5', '2022-09-6 9:58:46', 2, 'canceled', 2, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(6, 'This is title item 6', 'This is text/description item 6', '2022-09-6 9:58:46', 2, 'no-active', 3, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(7, 'This is title item 7', 'This is text/description item 7', '2022-09-6 9:58:46', 2, 'no-active', 3, '2022-08-07 07:58:46', '2022-08-07 07:58:46');

-- --------------------------------------------------------

--
-- Table structure for table `listUsers`
--

CREATE TABLE `listUsers` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `todoId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listUsers`
--

INSERT INTO `listUsers` (`id`, `userId`, `todoId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(2, 1, 2, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(3, 2, 1, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(4, 2, 2, '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(5, 2, 3, '2022-08-07 07:58:46', '2022-08-07 07:58:46');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220802093219-create-users.js'),
('20220802095332-create-list-users.js'),
('20220802095337-create-todos.js'),
('20220802095340-create-items.js');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'Test title 1', '2022-08-07 07:57:32', '2022-08-07 07:57:32'),
(2, 'This is title 1', '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(3, 'This is title 2', '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(4, 'This is title 3', '2022-08-07 07:58:46', '2022-08-07 07:58:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'someone@example.com', '$2a$10$iKi3qUER5sE54PK91t1mp.4YqRmkqgPPLBcdhz9Vc73upCbwQFi9G', '2022-08-07 07:57:32', '2022-08-07 07:57:32'),
(2, 'test1@test.com', '$2a$10$gzbrqI2E2BcvtLy5E3XrIu2061i5fN96Dra/K1uWMSdc7uLcaJnwq', '2022-08-07 07:57:32', '2022-08-07 07:57:32'),
(3, 'example@example.com', '$2a$10$qCjh9ELFi6.Ytx3rBqR8eeunTSqzNdbaWY1prBhB8O2wWlhAHW4gu', '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(4, 'marek@marek.com', '$2a$10$PEhsauGzBbTCEL/Nt7XND.1VbCSg2qg4d.BwN77e/bzY.t5apTMLy', '2022-08-07 07:58:46', '2022-08-07 07:58:46'),
(5, 'testing@marek.com', '$2a$10$1poHgO8fVBxIG5Fi0Edh7.En4yq.K80YjaRBDE7qouRVPdfoomsk6', '2022-08-07 07:58:46', '2022-08-07 07:58:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listUsers`
--
ALTER TABLE `listUsers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `listUsers`
--
ALTER TABLE `listUsers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

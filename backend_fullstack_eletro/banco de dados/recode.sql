-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Dez-2020 às 16:17
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `recode`
--
CREATE DATABASE IF NOT EXISTS `recode` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `recode`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--
-- Criação: 04-Dez-2020 às 14:20
-- Última actualização: 04-Dez-2020 às 14:24
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `id_cliente` varchar(5) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cep` varchar(20) NOT NULL,
  `numero` varchar(45) NOT NULL,
  `telefone` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `cliente`:
--

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nome`, `cep`, `numero`, `telefone`) VALUES
('1', 'Luiz', '04675-060', '23', '44534344'),
('2', 'Joao Paulo Soares', '04802170', '456', '987868688'),
('3', 'Daniela Capassi Moreira', '04841-150', '491', '(11) 2345-6780');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--
-- Criação: 30-Out-2020 às 19:11
-- Última actualização: 04-Dez-2020 às 14:28
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `comentarios`:
--

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'teste2', 'teste2', '2020-10-30 16:24:19'),
(2, 'teste4', 'teste4', '2020-10-30 16:24:35'),
(3, 'teste5', 'teste5\r\n', '2020-10-30 17:03:07'),
(4, 'Daniela Capassi Moreira', 'Olá, gostaria de comprar uma Geladeira Frost Free Brastemp Side Inverse 540 litros que está no de R$5819.00 de acordo com anúncio no site.', '2020-10-30 23:00:52'),
(5, '', '', '2020-11-02 02:21:00'),
(6, '', '', '2020-11-02 02:21:01'),
(7, '', '', '2020-11-02 13:27:30'),
(8, 'teste final', 'teste final', '2020-11-02 13:53:29'),
(9, 'Bootstrap', 'testando bootstrap', '2020-11-05 12:10:39'),
(10, 'Bootstrap', 'Teste 2 bootstrap', '2020-11-05 12:16:14'),
(11, 'Bootstrap', 'Teste 2 bootstrap', '2020-11-05 12:17:18'),
(12, 'Bootstrap', 'Teste 2 bootstrap', '2020-11-05 12:17:32'),
(13, 'teste boo', 'teste boo', '2020-11-05 23:27:28'),
(14, 'teste boo', 'teste boo', '2020-11-05 23:31:20'),
(15, 'teste boo', 'teste boo', '2020-11-05 23:31:31'),
(16, 'teste ultimo boo', 'teste ultimo boo', '2020-11-06 10:52:09'),
(17, 'Bootstrap', 'Bootstrap ', '2020-11-06 11:15:11'),
(20, NULL, NULL, '2020-12-01 17:19:38'),
(26, 'Daniela', 'teste', '2020-12-02 11:12:46'),
(27, '', '', '2020-12-02 13:36:21'),
(28, 'daniela', 'teste', '2020-12-02 15:58:04'),
(29, 'diego', 'teste', '2020-12-02 16:59:12'),
(30, 'Daniela', 'Teste!', '2020-12-03 21:59:28'),
(31, 'Daniela', 'Teste de Backend', '2020-12-03 22:27:16'),
(32, 'Daniela', 'Teste2', '2020-12-03 22:34:49'),
(33, 'joão das couve', 'teste', '2020-12-04 11:28:44');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--
-- Criação: 03-Dez-2020 às 23:30
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE `pedidos` (
  `idpedido` int(11) NOT NULL,
  `id_cliente` varchar(5) NOT NULL,
  `idproduto` int(11) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `pedidos`:
--

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedido`, `id_cliente`, `idproduto`, `data`) VALUES
(0, '1', 2, '2020-12-03 00:00:00'),
(1, '1', 1, '2020-12-03 00:00:00'),
(2, '1', 2, '2020-12-03 00:00:00'),
(3, '2', 1, '2020-12-03 00:00:00'),
(4, '2', 3, '2020-12-03 20:31:48'),
(5, '3', 4, '2020-12-03 20:32:35'),
(6, '3', 2, '2020-12-03 20:59:47'),
(7, '3', 9, '2020-12-03 21:00:15');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--
-- Criação: 24-Out-2020 às 00:25
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(55) NOT NULL,
  `descricao` varchar(155) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `produtos`:
--

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', '6389.00', '5819.00', 'imagens/geladeira1.jpeg'),
(2, 'geladeira', 'Refrigerador Consul Frost Free com 2 Portas Inox', '2269.00', '2199.00', 'imagens/geladeira2.jpeg'),
(3, 'geladeira', 'Refrigerador Brastemp Frost Free - 375Litros', '2499.00', '2269.00', 'imagens/geladeira3.jpeg'),
(4, 'fogao', 'Fogão Consul 4 Bocas com Acendimento Automático - Inox', '1259.00', '949.00', 'imagens/fogao1.jpeg'),
(5, 'fogao', 'Fogão Atlas 4 Bocas Mônaco Automático', '559.00', '499.00', 'imagens/fogao2.jpeg'),
(6, 'lavalouca', 'Lava-louças Brastemp Ative! 8 Serviços - Branca', '2097.00', '1987.00', 'imagens/lavalouca1.jpeg'),
(7, 'lavalouca', 'Lava-Louças Electrolux Display Digital - Inox', '3859.00', '3649.00', 'imagens/lavalouca2.jpeg'),
(8, 'lavadoraderoupas', 'Lavadora de Roupas Automática Brastemp 9KG Branca - 110V', '1899.90', '1799.90', 'imagens/lavadora1.jpeg'),
(9, 'lavadoraderoupas', 'Lavadora Philco 12KG Cor Branca - 110V', '3199.90', '3099.90', 'imagens/lavadora2.jpeg'),
(10, 'microondas', 'Forno de Micro-ondas Electrolux Branco - 20Litros', '559.00', '449.00', 'imagens/microondas1.jpeg'),
(11, 'microondas', 'Forno de micro-ondas Philco com Porta Espelhada - 25 Litros', '759.00', '699.00', 'imagens/microondas2.jpeg'),
(12, 'microondas', 'Forno de Micro-ondas Consul Espelhado - 32 Litro', '700.00', '689.00', 'imagens/microondas3.jpeg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedido`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idproduto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

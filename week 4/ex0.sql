-- Configuração do Banco de Dados

-- Antes de começar com os exercícios, vamos criar algumas tabelas e inserir alguns dados para usarmos nas consultas. Aqui está o script de configuração inicial:

create table clientes(
	cliente_id SERIAL primary key,
	nome varchar(50),
	cidade varchar(50),
	idade INT
)

create table pedidos(
	pedido_id SERIAL primary key,
	cliente_id int,
	data_pedido date,
	valor decimal(10,2),
	foreign key (cliente_id) references clientes(cliente_id)
)

CREATE TABLE produtos (
produto_id SERIAL PRIMARY KEY,
nome_produto VARCHAR(100),
preco DECIMAL(10, 2)
)

CREATE TABLE itens_pedidos (
item_id SERIAL PRIMARY KEY,
pedido_id INT,
produto_id INT,
quantidade INT,
FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);

-- Inserir dados na tabela de clientes
INSERT INTO clientes (nome, cidade, idade) VALUES
('João Silva', 'São Paulo', 28),
('Maria Santos', 'Rio de Janeiro', 35),
('Carlos Souza', 'Belo Horizonte', 42),
('Ana Paula', 'Curitiba', 22),
('Pedro Costa', 'Porto Alegre', 30);

-- Inserir dados na tabela de pedidos
INSERT INTO pedidos (cliente_id, data_pedido, valor) VALUES
(1, '2023-01-15', 150.50),
(1, '2023-02-20', 200.00),
(2, '2023-03-05', 300.75),
(3, '2023-01-25', 450.60),
(4, '2023-02-10', 100.00);

-- Inserir dados na tabela de produtos
INSERT INTO produtos (nome_produto, preco) VALUES
('Produto A', 10.50),
('Produto B', 20.00),
('Produto C', 15.75),
('Produto D', 50.00),
('Produto E', 5.25);

-- Inserir dados na tabela de itens_pedidos
INSERT INTO itens_pedidos (pedido_id, produto_id, quantidade) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 5),
(3, 4, 1),
(4, 5, 3);
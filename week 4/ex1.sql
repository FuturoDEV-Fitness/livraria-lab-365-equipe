-- Criar um arquivo SQL com os seguintes procedimentos:

-- Crie uma tabela chamada categorias com as seguintes colunas: categoria_id (chave primária), nome_categoria (VARCHAR(50)).

create table categorias(
	categoria_id serial primary key,
	nome_categoria varchar(50)
)
select * from categorias;

-- Adicione uma coluna categoria_id à tabela produtos e crie uma chave estrangeira para a tabela categorias.

--adding column
alter table produtos add column categorias_id int;
select * from produtos;

--adding the constrain
alter table produtos
add constraint fk_categorias_id
foreign key (categorias_id) references categorias(categoria_id);
select * from produtos;

-- Exclua a tabela categorias.

-- first we delete the contarin in the table "produtos" then 
drop table categorias;


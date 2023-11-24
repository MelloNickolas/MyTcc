create table animal(
    id int not null primary key auto_increment,
    nomeanimal varchar(40),
    sexo char(1),
    idade varchar(50),
    porte varchar(15),
    idcidade int not null,
    foto varchar(700)
);

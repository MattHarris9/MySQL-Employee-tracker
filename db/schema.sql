create database employee_db;

use employee_db;

create table department 
(
    id int auto_increment,
    name varchar(30) not null,
    Primary key (id)
);

create table roles (
    id int auto_increment,
    title varchar(30) not null,
    salary decimal(6,2) not null,
    department_id int not null,
    primary key(id),
);

create table employee (
    id int auto_increment,
    first_name varchar(30) not null,
    last_name  varchar(30) not null,
    role_id int not null,
    primary key (id)
);


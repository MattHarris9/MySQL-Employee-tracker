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

insert into department (name) values ("head programmer");
insert into department (name) values ("Marketing team");
insert into department (name) values ("lead developer");
insert into department (name) values ("IT");
insert into department (name) values ("programmer");

insert into roles (title, salary, department_id) values ("head programmer",90, 1);
insert into roles (title, salary, department_id) values ("Marketing Team", 100, 2);
insert into roles (title, salary, department_id) values ("lead developer", 100, 3);
insert into roles (title, salary, department_id) values ("IT", 60, 4);
insert into roles (title, salary, department_id) values ("programmer", 80, 5);

insert into employee (first_name, last_name, role_id) values("Matt", "Harris", 1);
insert into employee (first_name, last_name, role_id) values("Rachel", "Bean", 2);
insert into employee (first_name, last_name, role_id) values("Greg", "Slayer", 3);
insert into employee (first_name, last_name, role_id) values("Megan", "Henney", 4);
insert into employee (first_name, last_name, role_id) values ("John", "Moen", 5);
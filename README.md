# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version 1.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Create a python3.6 virtual environment
$ python3.6 -m venv venv

* Activate the virtaul environment
$ source venv/bin/activate

* Install all required libraries to the virtual environment
$ pip install -r requirements.txt

* Login to mysql
$ mysql -u root -p
* Enter your mysql password
Enter password: 
* Create database 'base'
mysql> create database base;

* Exit myql
mysql> exit

* Migrate 
$ python manage.py migrate

* Runserver and start coding
$ python manage.py runserver

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
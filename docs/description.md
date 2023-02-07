# Description

This app shoud let users to register their notes using a custom 'user defined' schema.

User can configure any fields he likes, and the app propose a for to insert numbers for each configured field.


# User story

## First login, schema definition

The user register using sign-up procedure, 
the app ask user to insert a email/password (or use google account),
the app ask user to configure fields.

From now, let's assume that are defined 3 fields:

* minutes
* km
* money


## Normal usage

The user sign-in, 
the app propose to insert 3 numeric values one for each fields:

* minutes
* km
* money

and a 'label' (string) for this annotation.

The app persist all values ('label', minutes, km, money) into the DB, alongside a timestamp for insert and update.


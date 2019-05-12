# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|body|text|null: false,
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name|text|null: false
|e-mail|varchar|null: false, unique: true|


### Association
- has_many :messages
- has_many :groups

##groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign: key|
|name|string|null:false, 

### Association
- has_many :users
- has_many :messages, through: :member


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

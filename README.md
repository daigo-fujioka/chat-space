# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|body|text|null: false,
|image|string|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

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
- has_many :groups, through: :member

##groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|references|null: false, foreign: key|
|name|string|null:false, 

### Association
- has_many :users, through: :member
- has_many :messages

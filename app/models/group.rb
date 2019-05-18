class Group < ApplicationRecord
    has_many :group_users
    has_many :users, through: :group_users
    vaidates :name, presence: true
end

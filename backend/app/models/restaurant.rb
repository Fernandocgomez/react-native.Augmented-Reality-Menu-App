class Restaurant < ApplicationRecord
    has_secure_password
    has_many :menus
end

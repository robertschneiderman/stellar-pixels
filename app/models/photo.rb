class Photo < ApplicationRecord

  validates :url, :user_id, :width, :height, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
  
  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :favorites,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Favorite

end

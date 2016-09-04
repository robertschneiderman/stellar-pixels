class Photo < ApplicationRecord

  validates :url, :user_id, :width, :height, presence: true

  belongs_to :user
  
  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag




end

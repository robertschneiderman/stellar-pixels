
class Tag < ApplicationRecord

  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :taggings
  has_many :photos, -> {distinct},
    through: :taggings,
    source: :photo
    

end

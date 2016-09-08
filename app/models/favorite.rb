class Favorite < ApplicationRecord

  validates :user_id, :photo_id, presence: true
  validates_uniqueness_of :user_id, scope: [:photo_id]

  belongs_to :user
  belongs_to :photo

end

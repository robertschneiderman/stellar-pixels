class Tagging < ApplicationRecord

  validates :photo_id, :tag_id, presence: true

  belongs_to :photo
  belongs_to :tag

end

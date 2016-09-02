class Photo < ApplicationRecord

  validates :url, :title, :user_id, :width, :height, presence: true

  belongs_to :user


end

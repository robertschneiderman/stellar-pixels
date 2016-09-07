class Following < ApplicationRecord

  validates :follower_id, :broadcaster_id, presence: true

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: User

  belongs_to :broadcaster,
    primary_key: :id,
    foreign_key: :broadcaster_id,
    class_name: User    


end

class Following < ApplicationRecord

  validates :follower_id, :broadcaster_id, presence: true
  validates_uniqueness_of :follower_id, :scope => [:broadcaster_id]


  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: User

  belongs_to :broadcaster,
    primary_key: :id,
    foreign_key: :broadcaster_id,
    class_name: User    


end

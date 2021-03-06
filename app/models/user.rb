class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token

  has_many :photos

  has_many :followings,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Following

  has_many :broadcasters,
    through: :followings,
    source: :broadcaster

  has_many :followers,
    through: :followings,
    source: :follower

  has_many :favorites,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Favorite




  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials email, password
    user = User.find_by(email: email)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    # ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  # def ensure_session_token_uniqueness
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = new_session_token
  #   end
  # end  

end

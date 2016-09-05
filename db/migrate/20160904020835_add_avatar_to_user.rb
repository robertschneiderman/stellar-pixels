class AddAvatarToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avatar, :string, default: "https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg"
  end
end

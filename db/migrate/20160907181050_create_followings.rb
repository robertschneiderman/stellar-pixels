class CreateFollowings < ActiveRecord::Migration[5.0]
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :broadcaster_id, null: false
      t.timestamps
    end

    add_index :followings, :follower_id
    add_index :followings, :broadcaster_id    
  end
end

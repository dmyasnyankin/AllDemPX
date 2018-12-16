class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :photos, :author_id, unique: true
  end
end

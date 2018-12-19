class RemoveUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :photos, :author_id
    add_index :photos, :author_id
  end
end

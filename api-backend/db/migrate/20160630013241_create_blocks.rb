class CreateBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :blocks do |t|
      t.string :title
      t.string :size
      t.string :shape
      t.text :text
      t.integer :position
      t.boolean :is_published
      t.references :blockable, polymorphic: true, index: true
      
      t.timestamps
    end
  end
end

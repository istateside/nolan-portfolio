class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|
      t.string :name
      t.string :presentation
      t.boolean :is_published, default: false
      t.boolean :is_in_header, default: true

      t.timestamps
    end
  end
end

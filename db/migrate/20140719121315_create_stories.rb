class CreateStories < ActiveRecord::Migration
  def change
    create_table do |t|
      t.string :title
      t.string :story
    end
  end
end

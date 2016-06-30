class Block < ApplicationRecord
  belongs_to :blockable, polymorphic: true
  has_many :child_blocks, as: :blockable, -> { order(position: :asc) }
  acts_as_list scope: :blockable
  
  attr_accessor :title, :size, :shape, :text, :position, :is_published
end

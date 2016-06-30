class Image < ApplicationRecord
  belongs_to :imageable, polymorphic: true
  acts_as_list scope: :imageable
  attr_accessor :alt, :file
  
  has_attached_file :file, styles: { medium: "400x", thumb: "150x" }
  validates_attachment_content_type :file, content_type: /\Aimage\/.*\Z/
end

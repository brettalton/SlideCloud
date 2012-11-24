class Image
  include Mongoid::Document
  belongs_to :user
  
  attr_accessible :file
  mount_uploader :file, ImageUploader
  field :title, type: String
  field :desc, type: String
end
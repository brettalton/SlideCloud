class Image
  include Mongoid::Document
  belongs_to :assetmanager
  attr_accessible :file
  mount_uploader :file, ImageUploader
end
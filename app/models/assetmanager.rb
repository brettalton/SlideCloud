class Assetmanager
  include Mongoid::Document
  belongs_to :user
  has_many :images

end

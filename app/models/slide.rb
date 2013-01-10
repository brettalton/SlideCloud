class Slide
  include Mongoid::Document
  embedded_in :slideshow
  field :stage, type: Hash
end

class Slide
  include Mongoid::Document
  embedded_in :slideshow
  field :style_attributes, type: Hash
end

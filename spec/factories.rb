FactoryGirl.define do
  factory :user do
    name     "Luis Mendes"
    email    "luis.mendes@wiremaze.com"
    password "123456"
    password_confirmation "123456"
  end
end
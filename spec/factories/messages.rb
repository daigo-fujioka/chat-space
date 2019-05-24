FactoryBot.define do
    factory :message do
        content {Faker::Lorem.sentence}
        image {File.open("#{Rails.root}/public/images/a6657c54041514fcfba85c908c4c67402bd61814.jpg")}
        user
        group
    end
end
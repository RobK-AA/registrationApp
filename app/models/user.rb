class User < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :address_1, presence: true
    validates :city, presence: true
    validates :state, presence: true, inclusion: { in: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]}
    validates :zip, presence: true
    validate :zip_code_must_be_five_or_nine_digits
    validate :zip_code_must_contain_digits
    validate :country_must_be_US
    validates :country, presence: true

    def zip_code_must_be_five_or_nine_digits
        if zip.present? && (zip.length != 5 && zip.length != 9)
            errors.add(:zip, "code must be 5 or 9 digits")
        end
    end

    def zip_code_must_contain_digits
        if zip.present? && (!zip.scan(/\D/).empty?)
            errors.add(:zip, "code must only contain digits 0 - 9")
        end
    end

    def country_must_be_US
        if country.present? && (country != "US")
            errors.add(:country, "not US. Registration requires US address")
        end
    end
end

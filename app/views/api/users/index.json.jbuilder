@users.each do |user| 
  json.set! user.id do 
    json.extract! user, 
        :id,
        :first_name, 
        :last_name, 
        :address_1, 
        :address_2, 
        :city, 
        :state, 
        :zip, 
        :country, 
        :created_at
  end
end
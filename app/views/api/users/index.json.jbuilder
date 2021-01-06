@users.each do |user| 
  json.set! user.id do 
    json.extract! user, 
        :first_name, 
        :last_name, 
        :address_1 
        :address_2, 
        :city, 
        :state, 
        :zip, 
        :country
  end
end
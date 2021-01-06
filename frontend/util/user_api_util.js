export const fetchUsers = () => {
  return $.ajax({
    url: `api/users`
  })
};

export const createUser = formData => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false
  })
};


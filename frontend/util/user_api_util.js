export const fetchUsers = () => (
  $.ajax({
    url: `api/users`
  })
);

export const createUser = formData => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false
  })
);


let userDataArray = [];

export const addFormData = (formData) => {
  userDataArray.push(formData);
  console.log('User added:', userDataArray);
};

export const getAllFormData = () => {
  return userDataArray;
};

export const clearAllFormData = () => {
  userDataArray = [];
};
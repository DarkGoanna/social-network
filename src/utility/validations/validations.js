export const required = (value) => {
  return (value && value.length) ? undefined : 'Это обязательное поля';
}

export const maxlength = (length) => {
  return (value) => {
    return (value && value.length <= length) ? undefined : `Максимально допустимая длина ${length} символов`;
  }
}
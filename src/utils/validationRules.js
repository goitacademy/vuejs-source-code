export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Пожалуйста заполните это поле',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'Вы превысели лимит',
});

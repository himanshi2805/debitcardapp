export const formateCardNumber = (
  cardNumber: string,
  visible: boolean = false,
) => {
  if (visible) {
    return cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1   ');
  }
  return hideCardNumber(cardNumber);
};

export const hideCardNumber = (cardNumber: string) => {
  return cardNumber.replace(
    /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm,
    '••••   ••••   ••••   ',
  );
};

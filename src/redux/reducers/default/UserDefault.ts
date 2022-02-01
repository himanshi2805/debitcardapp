export type CardState = {
  cardNumber: string;
  expDate: string;
  cvv: number;
};

export type UserState = {
  user: any;
  weeklyLimit: string;
  availableBalance: string;
  userCard: CardState;
};

// Here for UI set the default values
const userDefault: UserState = {
  user: {},
  userCard: {
    cardNumber: '3411345676548765',
    expDate: '12/25',
    cvv: 141,
  },
  weeklyLimit: '',
  availableBalance: '3,000',
};

export default userDefault;

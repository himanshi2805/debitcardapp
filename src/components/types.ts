import {CardState} from 'redux/reducers/default/UserDefault';

export interface NavigationHeaderProps {
  title?: string;
  hasBack?: boolean;
}

export interface BalanceViewProps {
  amount: string;
  color?: string;
  exStyle?: any;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export interface CardComponentProps {
  cardData: CardState;
}

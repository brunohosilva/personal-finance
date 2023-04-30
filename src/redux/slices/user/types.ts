export type TUserState = {
  budget: number;
  transactions: TTransactionItem[];
  user: TUserInfo
};

export type TUserInfo = {
  email: string,
  token: string
}

export type TTransactionItem = {
  id: string;
  type: 'spend' | 'budget';
  category?: string;
  icon?: string;
  value: number;
  description?: string;
  date?: string;
};

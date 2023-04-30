import { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';

export const useModalHooks = () => {
  const { budget } = useAppSelector((state) => state.user);

  const [modalBudgetVisible, setModalBudgetVisible] = useState(false);
  const [editBudget, setEditBudget] = useState<number>(budget);

  return {
    modalBudgetVisible,
    setModalBudgetVisible,
    editBudget,
    setEditBudget,
    budget,
  };
};

import { useState } from "react";

export const useModalSpendHooks = () => {
  
    const [modalSpendVisible, setModalSpendVisible] = useState(false);

    return{modalSpendVisible, setModalSpendVisible }
}
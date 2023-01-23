import { useState } from 'react';
import { createContext } from 'react';

// import PopupModal from '~/components/base/PopupModal';
// import PopupRequestAuth from '~/components/common/PopupRequestAuth';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [openNavBar, setOpenNavBar] = useState(true);
  const [openLoading, setOpenLoading] = useState(false);
  return (
    <>
      <GlobalContext.Provider
        value={{
          openNavBar: {
            state: openNavBar,
            setState: setOpenNavBar,
          },
          openLoading: {
            state: openLoading,
            setState: setOpenLoading,
          },
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export { GlobalContext };
export default GlobalProvider;

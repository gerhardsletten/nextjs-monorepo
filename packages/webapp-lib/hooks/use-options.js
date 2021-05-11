import React, { useContext } from 'react'

const OptionContext = React.createContext()

export const OptionProvider = ({ children, options }) => {
  return (
    <OptionContext.Provider value={options}>
      {children}
    </OptionContext.Provider>
  )
}

function useOption() {
  const options = useContext(OptionContext)
  return options
}

export default useOption

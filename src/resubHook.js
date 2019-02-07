import { useEffect, useState } from "react"
import { StoreBase } from "resub"

const useResub = (Store, getKey, functionOptions) => {
  const UntypedStore = Store
  // An alternative similar to _buildState that automatically does subscriptions based on calls would be preferable
  const getTheValue = () => {
    return UntypedStore[functionOptions.name].apply(Store, functionOptions.arguments)
  }
   // An alternative to useState would be preferable because it is dependent on call order
  const stateValues = useState(getTheValue())
  useEffect(() => {
    const subscriptionId = Store.subscribe(() => {
      stateValues[1](getTheValue())
    }, getKey)
    return () => {
      Store.unsubscribe(subscriptionId)
    }
  }, [getKey])
  return stateValues
}

export default useResub

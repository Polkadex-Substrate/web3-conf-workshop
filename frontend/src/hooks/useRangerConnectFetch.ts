import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectRanger,
  selectShouldRangerConnect,
  rangerConnectFetch
} from 'modules'

export const useRangerConnectFetch = () => {
  const dispatch = useDispatch()
  const shouldFetch = useSelector(selectShouldRangerConnect)
  const { connected } = useSelector(selectRanger)

  useEffect(() => {
    if (!connected && shouldFetch) dispatch(rangerConnectFetch())
  }, [shouldFetch, connected, dispatch])
  return { connected }
}

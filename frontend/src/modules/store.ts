import { Context, createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'

import { rootReducer, rootSaga, RootState } from 'modules'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export interface SagaStore extends Store<RootState> {
  sagaRootTask: Task
}

const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware()
  const initialStore = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  )
  ;(initialStore as SagaStore).sagaRootTask = sagaMiddleware.run(rootSaga)
  return initialStore
}

export const wrapper = createWrapper(makeStore, {
  debug: true
})

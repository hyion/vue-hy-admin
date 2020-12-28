import { StoreOptions, Store } from 'vuex'

const createUserModule = <S>(store: StoreOptions<S>) => store as Store<S>

export default createUserModule({
  state: {
    token: ''
  }
})

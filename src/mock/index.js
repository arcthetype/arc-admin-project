import http from '@/utils/http'
import MockAdapter from 'axios-mock-adapter'
import userMock from './modules/user'

export default {
  init() {
    const mockAdapter = new MockAdapter(http)
    userMock(mockAdapter)
    // 没有匹配的就不拦截了，走network
    mockAdapter.onAny().passThrough()
  }
}

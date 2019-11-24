import userDao from '../data/user.json'

export default function userMock(mockAdapter) {
  mockAdapter.onGet('/user/info').reply(() => {
    return [200, userDao.userInfo]
  })
}

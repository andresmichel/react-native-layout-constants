import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const statusBarHeight = getStatusBarHeight()

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  statusBarHeight: Platform.OS === 'ios' ? statusBarHeight : 0,
  isPad: Platform.OS === 'ios' ? Platform.isPad : width > 500,
}

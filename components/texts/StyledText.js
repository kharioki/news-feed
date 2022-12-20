import { Text } from 'react-native'
import { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { colors } from '../../config/theme'

const StyledText = ({ children, style, small, big, bold, ...props }) => {
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

  return (
    <Text
      style={[
        {
          color: activeColors.tint,
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold || big ? 'bold' : 'normal',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}

export default StyledText

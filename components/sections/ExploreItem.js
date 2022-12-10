import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

import { colors } from '../../config/theme'
import StyledText from '../texts/StyledText'

const ExploreItem = ({ image, title, ...props }) => {
  return (
    <TouchableOpacity onPress={() => alert(title)} style={[styles.container]} {...props}>
      <Image source={image} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={styles.bg}>

        <StyledText bold style={styles.title}>
          {title}
        </StyledText>
      </View>
    </TouchableOpacity>
  )
}

export default ExploreItem

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  bg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '#0005',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  title: {
    fontSize: 18,
    color: colors.primary,
    textAlign: 'center',
  },
})
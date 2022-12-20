import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { colors } from '../../config/theme'
import StyledText from '../texts/StyledText'

const NewsItem = ({ image, title, avatar, author, date, content, ...props }) => {
  const navigation = useNavigation()

  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          image, title, avatar, author, date, content
        })
      }}
      style={[
        { backgroundColor: activeColors.secondary },
        styles.container
      ]}
      {...props}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.bottomSection}>
        <StyledText numberOfLines={3} bold style={[{ color: activeColors.accent }, styles.title]}>
          {title}
        </StyledText>
        <View style={styles.row}>
          <View style={styles.authorRow}>
            <Image source={avatar} style={styles.avatar} />
            <StyledText numberOfLines={1} bold>{author}</StyledText>
          </View>
          <StyledText small style={[{ color: activeColors.tertiary }, styles.date]}>
            {date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 250,
    borderRadius: 25,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 18,
  },
  bottomSection: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
  },
  date: {
    textAlign: 'right',
    flex: 2,
  },
})
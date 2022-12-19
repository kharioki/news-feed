import { StyleSheet, View, Image } from 'react-native'

// components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/texts/StyledText';

// data
import { colors } from '../config/theme';

const Details = ({ route }) => {
  const { image, title, avatar, author, date, content } = route?.params;
  let activeColors = colors;

  return (
    <MainContainer style={{ backgroundColor: activeColors.secondary }}>
      <Image source={image} style={styles.image} />
      <View style={[{ backgroundColor: activeColors.secondary }, styles.bottomSection]}>
        <StyledText numberOfLines={3} big style={[{ color: activeColors.accent }, styles.title]}>
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
        <StyledText style={styles.content}>
          {content}
        </StyledText>
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    marginBottom: 10,
  },
  bottomSection: {
    padding: 10,
    top: -30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  content: {
    marginVertical: 10,
  },
});

export default Details

import { StyleSheet } from 'react-native'

// components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/texts/StyledText';
import NewsSection from '../components/sections/NewsSection';
import ExploreSection from '../components/sections/ExploreSection';

// data
import { newsData, exploreData } from '../config/data';

const Home = () => {
  return (
    <MainContainer>
      <StyledText style={styles.sectionTitle} big>Trending News</StyledText>
      <NewsSection data={newsData} />
      <StyledText style={styles.sectionTitle} big>Explore</StyledText>
      <ExploreSection data={exploreData} />
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 20,
  },
});

export default Home

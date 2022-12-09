import { FlatList } from 'react-native'
import NewsItem from './NewsItem'

const NewsSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <NewsItem {...item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    />
  )
}

export default NewsSection

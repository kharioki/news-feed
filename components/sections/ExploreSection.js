import { FlatList } from 'react-native'
import ExploreItem from './ExploreItem'

const ExploreSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <ExploreItem {...item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    />
  )
}

export default ExploreSection

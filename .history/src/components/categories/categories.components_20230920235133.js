import { categories } from "../../data/dummay__data";
import { FlatList } from "react-native";
import { CategoryItem } from "./category-item.components";
export const Categories = () => {
  const renderCategoryItem = () => {
    return <CategoryItem />;
  };
  return (
    <FlatList
      numColumns={3}
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

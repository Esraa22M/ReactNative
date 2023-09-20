import { categories } from "../../data/dummay__data";
import { FlatList } from "react-native";
import { CategoryItem } from "./category-item.components";
export const Categories = () => {
  const renderCategoryItem = (itemData) => {
    return <CategoryItem item={itemData.item} />;
  };
  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

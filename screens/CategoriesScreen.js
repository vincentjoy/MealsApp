import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridStyle";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
}

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
        />
    );
}

export default CategoriesScreen;
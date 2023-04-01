import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React, { memo, useState } from "react";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";


const CategoryListItem = memo((props) => {
  const { id, name, description, image } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [nameEdit, setNameEdit] = useState(name);
  const [descEdit, setDescEdit] = useState(description);


  const onEditClick = () => {
    setIsEditing(true);
  };

  const onCancelClick = () => {
    setIsEditing(false);
  };

  const onSaveClick = (id: string, name: string, description: string) => {
    props.updateCategory(id, name, description);
    setIsEditing(false);
  };

  const onDeleteClick = (id) => {
    
    props.deleteCategory(id);
  };

  const renderTaskSection = () => {
    if (isEditing) {
      return (
        <View style={{ flex: 1 }}>
          <TextInput
            value={nameEdit}
            onChangeText={setNameEdit}
            style={{ fontSize: 16 }}
            autoFocus
          />
          <TextInput
            value={descEdit}
            onChangeText={setDescEdit}
            style={{ fontSize: 16 }}
            autoFocus
          />
        </View>
      );
    }
    return (
      <Pressable onPress={() => {}} style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {image && (
            <View style={{ width: 70, height: 70, marginRight: 20 }}>
              <Image source={{ uri: image }} style={{ flex: 1 }} />
            </View>
          )}
          <View
            style={{
              position: "absolute",
              left: 80,
              top: -3,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
                fontWeight: "500",
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 8,
                fontWeight: "400",
                color: "#696969",
              }}
            >
              {description}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const renderActionSection = () => {
    if (isEditing) {
      return (
        <View style={styles.boxesContainer}>
          <TouchableOpacity style={{ marginRight: 15 }} onPress={() => onSaveClick(id, nameEdit, descEdit)}>
            <AntDesign name="save" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancelClick}>
            <AntDesign name="close" size={24} />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.boxesContainer}>
        <TouchableOpacity style={{ marginRight: 15 }} onPress={onEditClick}>
          <AntDesign name="edit" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> onDeleteClick(id)}>
          <AntDesign name="delete" size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderTaskSection()}
      {renderActionSection()}
    </View>
  );
});

export default CategoryListItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00000044",
    borderRadius: 15,
    marginBottom: 6,
    marginLeft: 3,
    marginRight: 3,
    elevation: 8,
    height: 100,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  boxesContainer: {
    flexDirection: "row",
    alignItems: "center",
    //marginRight: 10,
    justifyContent: "space-evenly",
  },
});

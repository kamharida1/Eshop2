import { Image, View } from "@bacons/react-views";
import { memo, useState } from "react";
import {
  TextInput,
  Button as NativeButton
} from "react-native";
import { Button } from "../../../etc/buttons/button";
import * as ImagePicker from "expo-image-picker";

interface CreateCategoryProps {
  createCategory: (category: {id: string, name: string, description: string}) => void
}

const PlaceholderImageSource = "https://picsum.photos/200/300";

export const CreateCategory = memo<CreateCategoryProps>(({ createCategory }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null as any)

  const guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  };

  const handleCreate = () => {
    if(name && desc){
      createCategory({
        id: guid(),
        name,
        description: desc,
        image
      });
      setName('')
      setDesc('')
      setImage(null)
    }
    console.log(image)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={{ justifyContent: "space-around" }}>
      <TextInput
        placeholder="category name ..."
        placeholderTextColor={"#00000099"}
        style={{ fontSize: 18 }}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="category description..."
        placeholderTextColor={"#00000099"}
        style={{ fontSize: 18 }}
        onChangeText={setDesc}
        value={desc}
      />
      <View style={{
        marginVertical: 10,
        justifyContent: 'space-between'
      }}>
        <NativeButton
          onPress={pickImage}
          title="Pick an Image"
          //color="#841584"
        />
        <Image
          source={{ uri: image ?? PlaceholderImageSource }}
          style={{
            alignSelf: 'center',
            width: 80,
            height: 80,
            marginTop: 16
          }}
        />
      </View>
      <Button
        onPress={handleCreate}
        style={{
          marginVertical: 16,
          backgroundColor: "#568444",
          borderRadius: 10,
        }}
      >
        Add Category
      </Button>
    </View>
  );
})
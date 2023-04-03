import { DataStore } from "aws-amplify";
import { useRouter, useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { goBack } from "../../../constants";
import { Screen } from "../../../etc/views/screen";
import { Category } from "../../../src/models";

export default function AddCategory() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [input, setCategory] = useState({
    id: '',
    name: '',
    description: '',
    image: ''
  })

  const formikRef = useRef();

  // useEffect(() => {
  //   const obj = useSearchParams();
  //   if (typeof obj !== 'undefined') {
  //     setCategory(obj)
  //     const { setFieldValue } = formikRef.current
  //     const { name, description, image } = obj
  //     setFieldValue('name', name)
  //     setFieldValue("description", description)
  //     setFieldValue('image', image)
  //   }
  // }, [])
  
  const createCategory = async values =>
    (await DataStore.save(new Category({ ...values }))) && router.back();
  
  const updateJob = async ({ name, description, image}) => {
    try {
      setLoading(true)
      const original = await DataStore.query(Category, input.id)
      const update = await DataStore.save(
        Category.copyOf(original, updated => {
          updated.name = name
          updated.description = description
          updated.image = image
        })
      )
      update && router.back()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  const deleteJob = async () => {
    try {
      setLoading(true)
      const category = await DataStore.query(Category, input.id)
      const del = await DataStore.delete(category)
      del && router.back()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <>
      <StatusBar style="light" />
      <Screen>

      </Screen>
    </>
  );
}
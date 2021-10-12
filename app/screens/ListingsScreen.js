import React, { useEffect,useState } from "react";
import { FlatList, StyleSheet,View, RefreshControl } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";
import categoriesApi from "../api/categories";

const ListingsScreen=({ navigation })=> {
 
  const getListingsApi = useApi(listingsApi.getListings);

  const [categories,setCategories]= useState();
  const [datalist,setDatalist]=useState([]);

  const setStatusFilter =async(item)=>{
 
    if (item !== '0'){
      setDatalist(getListingsApi.data.filter(e => e.categoryId === item.id))
    }else{
      setDatalist(getListingsApi.data)
    }
  }
  const loadingCategories= async() => {
    
    const response= await categoriesApi.getCategories();
      setStatusFilter('0')
      setCategories(response.data);
}

  useEffect(() => {
    getListingsApi.request();
    loadingCategories();
    setDatalist(getListingsApi.data)
   
  }, [getListingsApi.data.length > 0 ]);
  
  
  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={data} />
          </>
        )}
        <>
        <View>
                <Button
                    title="All"
                    id='0'
                    onPress={()=> setStatusFilter('0')}
                /> 
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(category) => category.id.toString()}
                    renderItem={({ item })=>(
                      <View>
                        <Button
                          title={item.name}
                          onPress={()=> setStatusFilter(item)}
                        />
                      </View>
                    )}
               />
        </View>
        <FlatList
          data={datalist}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
        </>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingTop:0,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

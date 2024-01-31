import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentCard from "../../components/blog/commentCard";
import useBlogCalls from "../../hooks/useBlogCalls";
import { Button, FlatList, Image, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./Detail.style";
import Ionicons from '@expo/vector-icons/Ionicons'
import { Octicons } from '@expo/vector-icons';
// import DeleteModal from "../components/blog/DeleteModal";
// import UpdateModal from "../components/blog/UpdateModal";

 const Detail = ({route}) => {
  const { user } = useSelector((state) => state.auth);

  const { loading, err, data, getDetailCard, likeUnlike } = useBlogCalls();
  renderItem = ({ item }) => <View style={styles.commentContainer}>
  <Text >{item.content}</Text>
  <Text > <Ionicons name="person" size={16} color="black" />{item.user}</Text>
  <Text >{item.time_stamp}</Text>
  </View>;

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getDetailCard(route.params.id);
      
    }, [route.params.id])
  );


  const handleClick=()=>{
    likeUnlike(route.params.id)
    setTimeout(() => {
      getDetailCard(route.params.id);
  }, 1000);
  }

  const like =
    data?.likes_n?.filter((item) => item.user_id == user?._id).length ? "red":"black";

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data?.image,
        }}
      />

      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.content}</Text>
      <Text>{data.publish_date}</Text>
      <View style={styles.authorContainer}>
        <Ionicons name="person" size={24} color="black" />
        <Text >{data?.author}</Text>
        </View>
        <View style={styles.reactionContainer}>
        <Ionicons name="heart" size={24} color={like} onPress={handleClick}/>
        <Text >{data?.likes}</Text>
        <Octicons name="comment" size={24} color="black" />
        <Text >{data?.comment_count}</Text>
        <Ionicons name="eye-outline" size={24} color="black" />
        <Text >{data?.post_views}</Text>
        </View>

      {/* <div className='d-flex align-items-center gap-2 mb-2 '>
<AiFillHeart className={"fs-4 " + (like)} role="button" onClick={handleClick}/>
<span>{data.likes}</span>
<BiComment className='fs-4'/>
<span>{data.comment_count}</span>
<AiOutlineEye className='fs-4 '/>
<span>{data.post_views}</span>
    </div> */}

      {user?.username==data?.author&&(<View style={styles.buttonContainer}>
      <Button
              onPress={null}
              title="Update"
            />

   <Button
             
              onPress={null}
              title="Delete"
              color="red"
            />
      </View>)}

    {/* <DeleteModal id={id}/>
    <UpdateModal id={id} data={data} getDetailCard={getDetailCard}/> */ }


<FlatList
        data={data.comments}
        renderItem={renderItem}
      />

      <CommentCard id={data.id} getDetailCard={getDetailCard} />
    </View>
  );
};

export default Detail
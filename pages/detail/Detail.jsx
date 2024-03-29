import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentCard from "../../components/blog/commentCard";
import useBlogCalls from "../../hooks/useBlogCalls";
import { Button, FlatList, Image, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./Detail.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Octicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import DeleteCard from "../../components/blog/deleteCard";
import UpdateCard from "../../components/blog/updateCard";


const Detail = ({ route, navigation }) => {
  const [commentModal, setCommentModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const { loading, err, data, getDetailCard, likeUnlike } = useBlogCalls();
  renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text>{item.content}</Text>
      <Text>
        {" "}
        <Ionicons name="person" size={16} color="black" />
        {item.user}
      </Text>
      <Text>{item.time_stamp}</Text>
    </View>
  );

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getDetailCard(route.params.id);
    }, [route.params.id])
  );

  const handleClick = () => {
    likeUnlike(route.params.id);
    setTimeout(() => {
      getDetailCard(route.params.id);
    }, 1000);
  };

  const like = data?.likes_n?.filter((item) => item.user_id == user?._id).length
    ? "red"
    : "black";

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
        <Text>{data?.author}</Text>
      </View>
      <View style={styles.reactionContainer}>
        <Ionicons name="heart" size={24} color={like} onPress={handleClick} />
        <Text>{data?.likes}</Text>
        <Octicons name="comment" size={24} color="black" />
        <Text>{data?.comment_count}</Text>
        <Ionicons name="eye-outline" size={24} color="black" />
        <Text>{data?.post_views}</Text>
      </View>

      {user?.username == data?.author && (
        <View style={styles.buttonContainer}>
          <Button onPress={()=>setUpdateModal(true)} title="Update" />

          <Button onPress={()=>setDeleteModal(true)} title="Delete" color="red" />
        </View>
      )}

      {/* <DeleteModal id={id}/>
    <UpdateModal id={id} data={data} getDetailCard={getDetailCard}/> */}

      <FlatList data={data.comments} renderItem={renderItem} />
      <Button onPress={()=>setCommentModal(true)} title="Add a new comment" color="green" />

      <Modal isVisible={commentModal}  onBackdropPress={() => setCommentModal(false)}>
      <CommentCard id={data.id} getDetailCard={getDetailCard} setCommentModal={setCommentModal} />
      </Modal>
      <Modal isVisible={deleteModal}  onBackdropPress={() => setDeleteModal(false)}>
      <DeleteCard id={route.params.id} navigation={navigation} setDeleteModal={setDeleteModal}/>
      </Modal>
      <Modal isVisible={updateModal}  onBackdropPress={() => setUpdateModal(false)}>
      <UpdateCard data={data} setUpdateModal={setUpdateModal}  getDetailCard={getDetailCard}/>
      </Modal>

      
    </View>
  );
};

export default Detail;

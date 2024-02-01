import { Formik } from "formik";
import useBlogCalls from "../../../hooks/useBlogCalls";
import { Button, Text, TextInput, View } from "react-native";
import styles from "./CommentCard.style";

const CommentCard = ({ id, getDetailCard, setCommentModal }) => {
  const { sendComment } = useBlogCalls();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          content: "",
        }}
        onSubmit={(values, action) => {
          sendComment({ ...values, post: id }, id);
          setCommentModal(false)
          action.resetForm();
          action.setSubmitting(false);
          setTimeout(() => {
            getDetailCard(id);
          }, 1000);

          // console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <View>
            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={5}
              onChangeText={handleChange("content")}
              onBlur={handleBlur("content")}
              value={values.content}
            />
            <Text style={styles.text}>
              {errors.content && touched.content && errors.content}
            </Text>
            <Button
              disabled={isSubmitting}
              onPress={handleSubmit}
              title="Add a new comment"
              color="green"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CommentCard;

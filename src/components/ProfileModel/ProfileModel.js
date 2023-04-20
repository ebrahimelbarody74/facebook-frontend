import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModel.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { uploadImage } from "../../actions/UploadAction";
// import { updateUser } from "../../actions/UserAction";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const param = useParams();
  const { currentUser } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [coverPicture, setCoverPicture] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  //   const { user } = useSelector((state) => state.authReducer.authData);

  //   const onImageChange = (event) => {
  //     if (event.target.files && event.target.files[0]) {
  //       let img = event.target.files[0];
  //       event.target.name === "profileImage"
  //         ? setProfileImage(img)
  //         : setCoverImage(img);
  //     }
  //   };

  // form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = {
      //   userId: currentUser._id,
      username: username ? username : currentUser.username,
    };
    if (profilePicture) {
      const data = new FormData();
      const fileName = Date.now() + profilePicture.name;
      data.append("name", fileName);
      data.append("file", profilePicture);
      update.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    if (coverPicture) {
      const data = new FormData();
      const fileName = Date.now() + coverPicture.name;
      data.append("name", fileName);
      data.append("file", coverPicture);
      update.coverPicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    const setPost = async () => {
      try {
        const res = await axios.put(
          "/users/" + currentUser._id + "/update",
          update
        );
        console.log(res);

        window.location.reload();
        setModalOpened(false);
      } catch (err) {
        console.log(err);
      }
    };
    setPost();
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => {
        setModalOpened(false);
        console.log(modalOpened);
      }}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            name="firstname"
            className="infoInput"
          />
          <input
            // value={formData.lastname}
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="infoInput"
          />
        </div>

        <div>
          <input
            // value={formData.worksAt}
            // onChange={handleChange}
            type="text"
            placeholder="Works at"
            name="worksAt"
            className="infoInput"
          />
        </div>

        <div>
          <input
            // value={formData.livesIn}
            // onChange={handleChange}
            type="text"
            placeholder="Lives in"
            name="livesIn"
            className="infoInput"
          />
          <input
            // value={formData.country}
            // onChange={handleChange}
            type="text"
            placeholder="Country"
            name="country"
            className="infoInput"
          />
        </div>

        <div>
          <input
            // value={formData.relationship}
            // onChange={handleChange}
            type="text"
            className="infoInput"
            placeholder="Relationship status"
            name="relationship"
          />
        </div>

        <div>
          Profile image
          <input
            type="file"
            name="profileImage"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            //    onChange={onImageChange}
          />
          Cover image
          <input
            type="file"
            name="coverImage"
            onChange={(e) => setCoverPicture(e.target.files[0])}

            //   onChange={onImageChange}
          />
        </div>

        <button className="button infoButton" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default ProfileModal;

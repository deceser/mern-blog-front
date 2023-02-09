import React from "react";

import ButtonDefault from "../../components/ui/buttonDefault";
import InputUi from "../../components/ui/input";
import InputFile from "../../components/ui/inputFile";
import SearchUi from "../../components/ui/search";
import SelectUi from "../../components/ui/select";
import Post from "../../components/block/post";
import Comment from "../../components/block/comment";
import InputTitle from "../../components/ui/inputTitle";
import TextField from "../../components/ui/textField";

const Ui = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15, marginTop: 10 }}>
      <ButtonDefault>Log In</ButtonDefault>
      <InputUi type="text" id="Email" label="Email" htmlFor="Email" />
      <SearchUi />
      <Post />
      <SelectUi />
      <Comment />
      <InputFile />
      <InputTitle />
      <TextField />
    </div>
  );
};

export default Ui;

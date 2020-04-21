import React from "react";

function InputForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.song.title}
        name="title"
        placeholder="add song title"
        onChange={props.handleChange}
      />
      <input
        type="text"
        value={props.song.artist}
        name="artist"
        placeholder="add artist"
        onChange={props.handleChange}
      />
      <select
        value={props.song.genre}
        name="genre"
        onChange={props.handleChange}
      >
        <option value="">Select Genre</option>
        <option value="EDM">EDM</option>
        <option value="Pop">Pop</option>
        <option value="Jazz">Jazz</option>
        <option value="Rock">Rock</option>
        <option value="Punk">Punk</option>
        <option value="Classical">Classical</option>
      </select>
      <select
        value={props.song.rating}
        name="rating"
        onChange={props.handleChange}
      >
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button>Hit it!</button>
    </form>
  );
}

export default InputForm;

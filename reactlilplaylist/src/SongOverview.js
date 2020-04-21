import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    console.log("ik ga iets adden");
    const newSongs = [song, ...this.state.songs];
    this.setState({
      songs: newSongs,
    });
  };

  render() {
    return (
      <div>
        <SongForm onSubmit={this.addSong} />

        <table style={{ width: "100%" }}>
          <thead>
            <tr className="song-header">
              <th className="song-row__header">Song</th>
              <th className="song-row__header">Artist</th>
              <th className="song-row__header">Genre</th>
              <th className="song-row__header">Rating</th>
            </tr>
          </thead>
          <SongList songs={this.state.songs} />
        </table>
      </div>
    );
  }
}

export default SongOverview;

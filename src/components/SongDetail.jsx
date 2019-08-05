import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please Select a Song</div>;
  }
  return (
    <div>
      <h3>Details For:</h3>
      <p>
        Title: {song.tittle}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, View, Dimensions } from "react-native";

import Slide from "../../components/Movies/Slide";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const SliderContainer = styled.View`
  height: ${HEIGHT / 4}px;
  width: ${WIDTH};
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide key={movie.id} id={movie.id} title={movie.original_title} overview={movie.overview} votes={movie.vote_average} backgroundImage={movie.backdrop_path} />
          ))}
        </Swiper>
      </SliderContainer>
    )}
  </Container>
);

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {React, useState,useEffect } from "react";
import { Arrow, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper, Container } from './SliderElements';
import { sliderItems } from "../data";
import { Button1 } from "../../ButtonElement";

const Slider = ({data}) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    };

    useEffect(() => {
        console.log(data.data)
    })




  return (
      <Container >
          <Arrow direction="left" onClick={() => handleClick("left")}>
              <ArrowLeftOutlined />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {
                data.data.map((item)=> {
                    return(
                    <Slide bg={'#2EFE9A'}>
                        <ImgContainer>
                            <Image src={item.image} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.name}</Title>
                            <Desc>{"piuttosto bizzarro, nevvero? 😏"}</Desc>
                            <Button1 to={""}>{item.prezzo}</Button1>
                        </InfoContainer>
                    </Slide>


                )
                    }
            )}

          </Wrapper>

          <Arrow direction="right" onClick={() => handleClick("right")}>
              <ArrowRightOutlined />
          </Arrow>
      </Container>
  )
}

export default Slider
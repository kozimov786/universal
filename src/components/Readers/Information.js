import React from 'react';
import styled from 'styled-components';
import InfoCard from './InfoCard';


export default function Information() {
  return (
    <div className='container'>
      <Content>
        <Text>
          <p>
            <span>M</span> <p>
              any geographers are trained in toponymy and cartology, this is not their main preoccupation. Geographers study the space and the temporal database distribution of phenomena,
            </p>
          </p>
          <p>processes, and features as well as the interaction of humans and their environment. Because space and place affect a variety of topics, such as economics, health, climate, plants and animals, geography is highly interdisciplinary. The interdisciplinary nature of the geographical approach depends on a attentiveness to the relationship between physical and human phenomena and its spatial patterns.
          </p>
          <div className='integrated'>
            <h3>Integrated Geography</h3>
            <p>Geography as a discipline can be split broadly into two main subsidiary fields: human geography and physical geography. The former largely focuses on the built environment and how humans create, view, manage, and influence space. The latter examines the natural environment, and how organisms, climate, soil, water, and landforms produce and interact.

            </p>
            <p className='middle-text'>
              The difference between these approaches led to a third field, environmental geography, which combines physical and human geography and concerns the interactions between the environment and humans.
            </p>
            <p>
              The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent.
            </p>

          </div>
        </Text>
        <InfoCard />

      </Content>
    </div>
  )
}

const Content = styled.div`
 width: 100%;
 max-width: 963px;
 margin-top: 67px;
 margin-left: 97px;
 margin-right: 94px;
 display: flex;
 align-items: start;
 justify-content: space-between;

`




const Text = styled.div`
width: 623px;
.middle-text{
  margin: 15px 0;
}
.integrated{
  h3{
   margin: 30px 0;
   font-weight: bold;
font-size: 25px;
line-height: 30px;
  }
}
p{
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  p{
    width: 524px;
  }
  span{
    &::first-letter{
    font-size: 100px;
    font-weight: bold;
    line-height: 75px;
    text-align: center;
    color: #4592FF;
    margin-right: 3px;
    margin-bottom: 3px;
  }
  }
}

`
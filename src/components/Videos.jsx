import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/H5BOVymHiplawzr0/videoblocks-scientist-in-a-protective-suit-looks-at-a-hologram-on-the-screen-researching-coronavirus-searching-for-a-vaccine-and-treatment-in-a-laboratory-researcher-is-studying-a-viral-infection_bc_uwyaav__31052e31399dc904fff11afd350cc665__P360.mp4',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SuFLR1_Nwkex4zo1y/videoblocks-61769ebf0f1ea325a22a8076_rnkg5lnuy__e35b87a47bf52118a646ea2c73a62665__P360.mp4',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack w={'full'}>
            <video
            controls controlsList='nodownload' src={videoSrc} style={{width:'100%'}}
            >

            </video>
        <VStack alignItems={'flex-start'} w={'full'} p={'8'} overflowY={'auto'}>
            <Heading>Sample Video</Heading>
            <Text>Interactive experience that combines the real world.AR delivers visual elements, sound and other sensory information to the user through a device like a smartphone or glasses. This information is overlaid onto the device to create an interwoven experience where digital information alters the user's perception of the real world.  </Text>
        </VStack>
        </VStack>
        <VStack width={['full','xl']} alignItems={'stretch'} p='8' spacing={'8'} overflowY={'auto'}> 
          
          {
            videosArr.map((item, index) => (
              <Button variant={'ghost'} colorScheme={'purple'} onClick={() => setVideoSrc(item)}>
              Lecture {index + 1}
              </Button>
            ))
          }
          
        </VStack>
    </Stack>
  )
}

export default Videos

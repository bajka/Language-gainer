import React from 'react';
import { Image } from 'react-native';

const RoundedImage = ({ image, additionalStyles }) => {
    const styles = {
        image: {
            width: 137,
            height: 91,
            borderRadius: 13,
            marginRight: -8
        },
    };

    return <Image style={[styles.image, additionalStyles]} source={image}></Image>;
};

RoundedImage.defaultProps = { image: '' };

export default RoundedImage;
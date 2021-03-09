import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Campo, CampoInputMasked } from './styles/ComponentCpf';

export default ( { iconStyle, iconName, iconSize, iconColor, placeholder, placeholderTextColor, returnKeyType, type, value, onChangeText, ref, onSubmitEditing, blurOnSubmit } ) => {
    return (
        <Campo>
            <Icon 
                style={iconStyle} 
                name={iconName} size={iconSize} 
                color={iconColor} 
            />
            <CampoInputMasked 
                placeholder={placeholder} 
                placeholderTextColor={placeholderTextColor} 
                returnKeyType={returnKeyType} 
                type={type}
                value={value}
                onChangeText={onChangeText} 
                ref={ref} 
                onSubmitEditing={onSubmitEditing} 
                blurOnSubmit={blurOnSubmit}
            />
        </Campo>
    );
}
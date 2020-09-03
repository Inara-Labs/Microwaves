import React from 'react';
import styled from 'styled-components/native';
import {
  compose,
  typography,
  TypographyProps,
  color,
  ColorProps,
} from 'styled-system';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import {Box, Label, Icon} from '../../../components';

const TextInput: React.FunctionComponent<
  TextInputProps & TypographyProps & ColorProps
> = styled(RNTextInput)<TextInputProps>`
  ${compose(typography, color)}
`;

TextInput.defaultProps = {
  fontSize: 2,
  lineHeight: 2,
  fontFamily: 'medium',
};

interface InputProps extends TextInputProps {
  label?: string;
  labelBaseColor?: string;
  labelFocusColor?: string;
  color?: string;
  bgColor?: string;
  textColor?: string;
  placeholder?: string;
  icon?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  color,
  label,
  labelBaseColor,
  labelFocusColor = color,
  bgColor,
  textColor,
  placeholder,
  icon,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <Box flexShrink={1} flexDirection={'column'}>
      {label && (
        <Box
          flexShrink={1}
          paddingLeft={1}
          paddingRight={1}
          paddingTop={2}
          paddingBottom={2}>
          <Label color={isFocused ? color : textColor}>{label}</Label>
        </Box>
      )}
      <Box
        flexGrow={1}
        flexDirection={'row'}
        bg={bgColor}
        borderRadius={5}
        paddingLeft={3}
        paddingRight={3}>
        <Box flex={1}>
          <TextInput
            placeholder={placeholder}
            color={textColor}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </Box>
        {icon && (
          <Box
            flexShrink={1}
            justifyContent="center"
            alignItems="center"
            paddingLeft={1}
            paddingRight={1}>
            <Icon
              name={icon}
              fontSize={3}
              color={isFocused ? labelFocusColor : labelBaseColor}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

Input.defaultProps = {
  color: 'primary',
  labelBaseColor: 'grey.300',
  bgColor: 'grey.100',
  textColor: 'black',
};

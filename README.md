# ez-button
A customisable react-native button component. 

## Installation

### npm
```bash
npm install ez-button
```

### yarn
```bash
yarn add ez-button
```
# Optional: Adding Icon Support
This button component supports icons but does not include any icon packages by default. To use icons:

Install an icon package (eg from react-native-vector-icons):

```bash
  yarn add react-native-vector-icons
```

# or

```bash
npm install react-native-vector-icons --save
```


Follow the installation instructions for the icon package:
https://www.npmjs.com/package/react-native-vector-icons


# sample button
```js
import React from 'react';
import { View } from 'react-native';
import EzButton from 'ez-button';

const App = () => {
  return (
    <View>
      <EzButton 
        onPress={() => console.log('Button clicked!')}
        backgroundColor="#007BFF"
        color="#FFFFFF"
        height={50}
        width={250}
        marginTop={20}
        alignSelf="center"
        borderRadius={10}
      >
        Click Me
      </EzButton>
    </View>
  );
};

export default App;
```

# with icons
```js
import React from 'react';
import { View } from 'react-native';
import EzButton from 'ez-button';

const App = () => {
  return (
    <View>
      <EzButton 
        onPress={() => console.log('Icon button pressed!')}
        backgroundColor="#28A745"
        color="#FFFFFF"
        buttonIcon="checkmark-circle"
        buttonColor="#FFFFFF"
      >
        Success
      </EzButton>
    </View>
  );
};

export default App;
```



# props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onPress | () => void | Required | Function to call when button is pressed |
| backgroundColor | string | 'red' | Background color of the button |
| marginHorizontal | number | - | Horizontal margin on both sides |
| width | number \| string | - | Width of the button |
| marginTop | number | - | Top margin of the button |
| marginBottom | number | - | Bottom margin of the button |
| marginLeft | number | - | Left margin of the button |
| marginRight | number | - | Right margin of the button |
| color | string | - | Text color of the button |
| position | string | - | Position style ('absolute', 'relative') |
| fontWeight | number \| string | - | Font weight of the text |
| fontFamily | string | - | Font family of the text |
| borderRadius | number | 15 | Border radius of the button |
| fontSize | number | 16 | Font size of the button text |
| disabled | boolean | false | Whether the button is disabled |
| height | number \| string | - | Height of the button |
| borderWidth | number | 1 | Width of the button border |
| borderColor | string | '#00A6FB' | Color of the button border |
| left | number | - | Left position when using absolute positioning |
| right | number | - | Right position when using absolute positioning |
| buttonColor | string | - | Color of the icon (if using buttonIcon) |
| alignSelf | string | - | Alignment of button within parent ('flex-start', 'center', 'flex-end', etc.) |
| bottom | number | - | Bottom position when using absolute positioning |
| top | number | - | Top position when using absolute positioning |
| marginVertical | number | - | Vertical margin on both top and bottom |
| buttonIcon | string | - | Name of the icon (if using an icon library) |
| imageWidth | number | - | Width of the image when using imagePath |
| imageHeight | number | - | Height of the image when using imagePath |
| iconComponent | ComponentType<{ name: string; size?: number; color?: string }> | Eye (Ionicons) | Icon component library to use |
| imagePath | ComponentType<{ width?: number; height?: number }> | - | Custom image component to display |
| disabledbackGroundColor | string | - | Background color when button is disabled |
| disabledTextColor | string | - | Text color when button is disabled |
| children | ReactNode | Required | Text on the button |

# Dependencies
`react`
`react-native`
`react-native-vector-icons`

# License
MIT
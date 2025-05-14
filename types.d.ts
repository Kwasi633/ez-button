declare module 'react-native' {
    export * from '@types/react-native';
  }
  
  declare module 'react-native-vector-icons/Ionicons' {
    import { Component } from 'react';
    export default class Icon extends Component<{name: string, size?: number, color?: string}> {}
  }
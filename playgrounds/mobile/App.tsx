import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CABadge from "@yubi/yb-core-badge";
// import CABadge from "@yubi/yb-core-badge/src/CABadge";
// import {badgeStyle} from '@yubi/yb-core-badge/src/style/CABadgeStyle';
//

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/*<CABadge*/}
      {/*    onClick={() => {*/}
      {/*      console.log('clicked');*/}
      {/*    }}*/}
      {/*    type="primary"*/}
      {/*    size="large"*/}
      {/*    label="PlaceHolder"*/}
      {/*    themeConfig={badgeStyle}*/}
      {/*/>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

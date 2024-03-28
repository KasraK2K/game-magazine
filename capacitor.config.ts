import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gamehub.app',
  appName: 'game-hub',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

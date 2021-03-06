const {config} = require('./wdio.shared.sauce.conf');
const testName = `iOS Biometric login real device Sauce UI: ${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    {
        // Just give an iPhone with FaceID
        deviceName: 'iPhone XS',
        platformName: 'iOS',
        orientation: 'PORTRAIT',
        // The path to the app
        app: 'sauce-storage:sample-app-ios-real.ipa',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        // Add a name to the test
        name: testName,
        // Enable touchID on RDC
        allowTouchIdEnroll: true,
    },
];

exports.config = config;

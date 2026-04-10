// Small file to tweak some settings for development purposes

function overrideAccessKey() {
    ACCESS_KEY = "a48ec089-6c39-4f76-b29f-2302222049cd";
}

function setupForDevelopment() {
    if (isDevelopmentRun()) {
//        // Enable test at localhost:8001
//        uil.useCustomServer("http://localhost:8001/api/");
//
//        overrideAccessKey();
    }
}

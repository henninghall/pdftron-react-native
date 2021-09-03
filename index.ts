import { NativeModules } from 'react-native';
import { PDFViewCtrl } from './src/PDFViewCtrl/PDFViewCtrl';
import { DocumentView } from './src/DocumentView/DocumentView';
import { Config } from './src/Config/Config';
import * as AnnotOptions from './src/AnnotOptions/AnnotOptions';

/**
 * @typedef Pdftron
 * @description Contains {@link RNPdftron} methods. The Pdftron interface is implemented internally by PDFTron.
 */
export interface Pdftron 
{
    /**
     * @method
     * @description Initializes PDFTron SDK with your PDFTron commercial license key. You can run PDFTron in demo mode by passing an empty string.
     * @param {string} licenseKey your PDFTron license key
     * @example RNPdftron.initialize('your_license_key');
     */
    initialize(licenseKey: string) : void;
    
    /**
     * @method
     * @description Enables JavaScript for PDFTron SDK, by default it is enabled.
     * @param {boolean} enabled whether to enable or disable JavaScript
     * @example RNPdftron.enableJavaScript(true);
     */
    enableJavaScript(enabled: boolean) : void;

    /**
     * @method
     * @description Gets the current PDFNet version.
     * @returns {Promise<string>} version - currentPDFNet version
     * @example
     * RNPdftron.getVersion().then((version) => {
     *   console.log("Current PDFNet version:", version);
     * });
     */
    getVersion() : Promise<string>;

    /**
     * @method
     * @description Gets the version of current platform (Android/iOS).
     * @returns {Promise<string>} platformVersion - current platform version (Android/iOS)
     * @example
     * RNPdftron.getPlatformVersion().then((platformVersion) => {
     *   console.log("App currently running on:", platformVersion);
     * });
     */
    getPlatformVersion() : Promise<string>;

    /**
     * @method
     * @description Gets the font list available on the OS (Android only).
     * This is typically useful when you are mostly working with non-ascii characters in the viewer.
     * @returns {Promise<string>} fontList - the font list available on Android
     * @example
     * RNPdftron.getSystemFontList().then((fontList) => {
     *   console.log("OS font list:", fontList);
     * });
     */
    getSystemFontList() : Promise<string>;

    /**
     * @method
     * @description Clear the information and bitmap cache for rubber stamps (Android only).
     * This is typically useful when the content of rubber stamps has been changed in the viewer.
     * @example
     * RNPdftron.clearRubberStampCache().then(() => {
     *   console.log("Rubber stamp cache cleared");
     * });
     */
    clearRubberStampCache() : Promise<void>;

    /**
     * @method
     * @description Encrypts (password-protect) a document (must be a PDF). **Note**: This function does not lock the document it cannot be used it while the document is opened in the viewer.
     * @param {string} filePath the local file path to the file
     * @param {string} password the password you would like to set
     * @param {string} currentPassword the current password, use empty string if no password
     * @example
     * RNPdftron.encryptDocument("/sdcard/Download/new.pdf", "1111", "").then(() => {
     *   console.log("done password");
     * });
     */
    encryptDocument(filePath: string, password: string, currentPassword: string) : Promise<void>;

    /**
     * @method
     * @description Generates a PDF using a template in the form of an Office document and replacement data in the form of a JSON object.
     * For more information please see our [template guide](https://www.pdftron.com/documentation/core/guides/generate-via-template/).
     * 
     * The user is responsible for cleaning up the temporary file that is generated.
     * @param {string} docxPath the local file path to the template file
     * @param {object} json the replacement data in the form of a JSON object
     * @returns {Promise<string>} resultPdfPath - the local file path to the generated PDF 
     * @example
     * RNPdftron.pdfFromOfficeTemplate("/sdcard/Download/red.docx", json).then((resultPdfPath) => {
     *   console.log(resultPdfPath);
     * });
     */
    pdfFromOfficeTemplate(docxPath: string, json: object) : Promise<string>;
}

/**
 * @class
 * @classdesc RNPdftron contains static methods for global library initialization, configuration, and utility methods.
 * @see {@link Pdftron} interface for RNPdftron method descriptions.
 * @hideconstructor
 */
const RNPdftron : Pdftron = NativeModules.RNPdftron;

export {
    RNPdftron,
    PDFViewCtrl,
    DocumentView,
    Config,
    AnnotOptions,
};